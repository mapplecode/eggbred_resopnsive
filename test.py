import json
import requests
from flask import Flask, render_template, jsonify, request
import pandas as pd
import os
import csv
import base64
import mysql.connector
from home import state_by_zipCode

app = Flask(__name__)

def connect_to_database():
    try:
        mydb = mysql.connector.connect(
            host="localhost",
            user="root",
            password="root",
            database="eggbred$newDB"
        )
        return mydb
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None

# Function route to insert data into mysql server 
@app.route('/save_regions', methods=['POST'])
def save_regions():
    data = request.get_json()
    selected_regions = data.get('selectedRegions', [])
    selected_region_groups = data.get('selectedRegionGroups', [])
    if not selected_regions or not selected_region_groups:
        return jsonify({'status': 'error', 'message': 'No data to save'})
    connection = connect_to_database()
    if not connection:
        return jsonify({'status': 'error', 'message': 'Failed to connect to the database'})
    try:
        with connection.cursor() as cursor:
            for group in selected_region_groups:
                zip_codes = ','.join(group.get('zipCodes', []))  # Join list into a comma-separated string
                cursor.execute("SELECT id FROM selectedregiongroups WHERE id = %s", (group['id'],))
                existing_group = cursor.fetchone()
                if not existing_group:
                    cursor.execute("""
                        INSERT INTO selectedregiongroups (id, name, color, demographics, classificationText)
                        VALUES (%s, %s, %s, %s, %s)
                    """, (
                        group['id'],
                        group['name'],
                        group['color'],
                        json.dumps(group['demographics']),
                        group.get('classificationText', 'Default Classification')
                    ))
            for region in selected_regions:
                cursor.execute("""
                    INSERT INTO selectedregions (displayName, placeId, featureType, lat, lng, groupId, color, postalCode, classificationText, coordinates)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    ON DUPLICATE KEY UPDATE
                        displayName = VALUES(displayName),
                        featureType = VALUES(featureType),
                        lat = VALUES(lat),
                        lng = VALUES(lng),
                        groupId = VALUES(groupId),
                        color = VALUES(color),
                        postalCode = VALUES(postalCode),
                        classificationText = VALUES(classificationText),
                        coordinates = VALUES(coordinates)
                """, (
                    region.get('displayName'),
                    region.get('placeId'),
                    region.get('featureType'),
                    region.get('lat', 0),
                    region.get('lng', 0),
                    region.get('groupId', 0),  
                    region.get('color', 'rgb(0,0,0)'),
                    region.get('postalCode', '00000'),
                    region.get('classificationText'),
                    json.dumps(region.get('coordinates', []))
                ))
        connection.commit()
        return jsonify({'status': 'success', 'message': 'Regions saved successfully!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
    finally:
        if connection:
            connection.close()

@app.route('/load_regions', methods=['GET'])
def load_regions():
    connection = connect_to_database()
    if not connection:
        return jsonify({'status': 'error', 'message': 'Failed to connect to the database'})
    try:
        with connection.cursor(dictionary=True) as cursor:
            cursor.execute("SELECT id, name, color, demographics, classificationText, label FROM selectedregiongroups")
            region_groups = cursor.fetchall()
            for group in region_groups:
                group['demographics'] = json.loads(group['demographics']) if group['demographics'] else {}
            cursor.execute("SELECT displayName, placeId, featureType, lat, lng, groupId, color, postalCode, classificationText, coordinates FROM selectedregions")
            regions = cursor.fetchall()
            for region in regions:
                region['coordinates'] = json.loads(region['coordinates']) if region['coordinates'] else []
        return jsonify({
            'status': 'success',
            'regions': regions,
            'regionGroups': region_groups
        })
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
    finally:
        if connection:
            connection.close()
            
@app.route('/delete_region_group', methods=['POST'])
def delete_region_group():
    data = request.get_json()
    group_id = data.get('groupId')
    if not group_id:
        return jsonify({'status': 'error', 'message': 'Group ID is required'})
    connection = connect_to_database()
    if not connection:
        return jsonify({'status': 'error', 'message': 'Failed to connect to the database'})
    try:
        with connection.cursor() as cursor:
            # Delete associated regions
            cursor.execute("DELETE FROM selectedregions WHERE groupId = %s", (group_id,))
            # Delete the region group
            cursor.execute("DELETE FROM selectedregiongroups WHERE id = %s", (group_id,))

        connection.commit()
        return jsonify({'status': 'success', 'message': 'Region group and associated regions deleted successfully'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
    finally:
        if connection:
            connection.close()

@app.route('/update_region_group', methods=['POST'])
def update_region_group():
    data = request.get_json()
    print("RECEIVED DATA FROM AJAX CALL:", data)
    group_id = data.get('groupId')
    group_name = data.get('name')
    group_color = data.get('color')
    demographics = data.get('demographics', None)
    classification_text = data.get('classificationText', "Unclassified")
    regions = data.get('regions', [])

    if not group_id:
        return jsonify({'status': 'error', 'message': 'Group ID is required'})
    for region in regions:
        if 'placeId' not in region:
            return jsonify({'status': 'error', 'message': 'Each region must have a placeId'})

    connection = connect_to_database()
    if not connection:
        return jsonify({'status': 'error', 'message': 'Failed to connect to the database'})

    try:
        with connection.cursor() as cursor:
            if demographics is None:
                cursor.execute("SELECT demographics FROM selectedregiongroups WHERE id = %s", (group_id,))
                current_demographics = cursor.fetchone()
                demographics = current_demographics[0] if current_demographics else {}

            cursor.execute("""
                UPDATE selectedregiongroups
                SET name = %s, color = %s, demographics = %s, classificationText = %s
                WHERE id = %s
            """, (group_name, group_color, json.dumps(demographics), classification_text, group_id))
            cursor.execute("DELETE FROM selectedregions WHERE groupId = %s", (group_id,))

            for region in regions:
                cursor.execute("""
                    INSERT INTO selectedregions 
                        (displayName, placeId, featureType, lat, lng, groupId, 
                         color, postalCode, classificationText, coordinates)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (
                    region['displayName'],
                    region['placeId'],
                    region['featureType'],
                    region['lat'],
                    region['lng'],
                    group_id,
                    region['color'],
                    region['postalCode'],
                    region['classificationText'],
                    json.dumps(region.get('coordinates', []))
                ))

        connection.commit()
        return jsonify({'status': 'success', 'message': 'Region group and associated regions updated successfully'})

    except Exception as e:
        print("Error occurred:", e)
        return jsonify({'status': 'error', 'message': str(e)})
    finally:
        if connection:
            connection.close()

            
@app.route('/save_regions_recruitment', methods=['POST'])
def save_regions_recruitment():
    data = request.get_json()
    selectedRegionsRecruitment = data.get('selectedRegionsRecruitment', [])
    selectedRegionGroupsRecruitment = data.get('selectedRegionGroupsRecruitment', [])

    if not selectedRegionsRecruitment or not selectedRegionGroupsRecruitment:
        return jsonify({'status': 'error', 'message': 'No data to save'})

    connection = connect_to_database()
    if not connection:
        return jsonify({'status': 'error', 'message': 'Failed to connect to the database'})

    try:
        with connection.cursor() as cursor:
            # Insert groups first if they don't exist
            for group in selectedRegionGroupsRecruitment:
                print("Group", group)
                cursor.execute("SELECT id FROM selectedRegionGroupsRecruitment WHERE id = %s", (group['id'],))
                existing_group = cursor.fetchone()

                if not existing_group:
                    cursor.execute("""
                        INSERT INTO selectedRegionGroupsRecruitment (id, name, color, demographics, classificationText)
                        VALUES (%s, %s, %s, %s, %s)
                    """, (
                        group['id'],
                        group['name'],
                        group['color'],
                        json.dumps(group['demographics']),
                        group.get('classificationText', 'Default Classification')
                    ))

            # Now insert regions, which should have a valid group_id
            for region in selectedRegionsRecruitment:
                print("REGIONS", region)
                cursor.execute("""
                    INSERT INTO selectedRegionsRecruitment (displayName, placeId, featureType, lat, lng, groupId, color, postalCode, classificationText, coordinates)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    ON DUPLICATE KEY UPDATE
                        displayName = VALUES(displayName),
                        featureType = VALUES(featureType),
                        lat = VALUES(lat),
                        lng = VALUES(lng),
                        groupId = VALUES(groupId),
                        color = VALUES(color),
                        postalCode = VALUES(postalCode),
                        classificationText = VALUES(classificationText),
                        coordinates = VALUES(coordinates)
                """, (
                    region.get('displayName'),
                    region.get('placeId'),
                    region.get('featureType'),
                    region.get('lat', 0),
                    region.get('lng', 0),
                    region.get('groupId', 0),  # The group_id must exist by now
                    region.get('color', 'rgb(0,0,0)'),
                    region.get('postalCode', '00000'),
                    region.get('classificationText'),
                    json.dumps(region.get('coordinates', []))
                ))

        connection.commit()
        return jsonify({'status': 'success', 'message': 'Regions saved successfully!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
    finally:
        if connection:
            connection.close()
            
@app.route('/load_regions_recruitment', methods=['GET'])
def load_regions_recruitment():
    connection = connect_to_database()
    if not connection:
        return jsonify({'status': 'error', 'message': 'Failed to connect to the database'})
    try:
        with connection.cursor(dictionary=True) as cursor:
            cursor.execute("SELECT id, name, color, demographics, classificationText, label FROM selectedRegionGroupsRecruitment")
            region_groups = cursor.fetchall()
            print("region groups for recruitment analysis:- ",region_groups)
            for group in region_groups:
                group['demographics'] = json.loads(group['demographics']) if group['demographics'] else {}
            cursor.execute("SELECT displayName, placeId, featureType, lat, lng, groupId, color, postalCode, classificationText, coordinates FROM selectedRegionsRecruitment")
            regions = cursor.fetchall()
            for region in regions:
                region['coordinates'] = json.loads(region['coordinates']) if region['coordinates'] else []
        print(jsonify({'status': 'success', 'regions': regions, 'regionGroups': region_groups}))
        return jsonify({
            'status': 'success',
            'regions': regions,
            'regionGroups': region_groups
        })
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
    finally:
        if connection:
            connection.close()
@app.route('/delete_region_group_recruitment', methods=['POST'])
def delete_region_group_recruitment():
    data = request.get_json()
    group_id = data.get('groupId')
    if not group_id:
        return jsonify({'status': 'error', 'message': 'Group ID is required'})
    connection = connect_to_database()
    if not connection:
        return jsonify({'status': 'error', 'message': 'Failed to connect to the database'})
    try:
        with connection.cursor() as cursor:
            # Delete associated regions
            cursor.execute("DELETE FROM selectedRegionsRecruitment WHERE groupId = %s", (group_id,))
            # Delete the region group
            cursor.execute("DELETE FROM selectedRegionGroupsRecruitment WHERE id = %s", (group_id,))

        connection.commit()
        return jsonify({'status': 'success', 'message': 'Region group and associated regions deleted successfully'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
    finally:
        if connection:
            connection.close()

@app.route('/update_region_group_recruitment', methods=['POST'])
def update_region_group_recruitment():
    data = request.get_json()
    print("Data for updating table Recruitment:- ", data)
    group_id = data.get('groupId')
    group_name = data.get('name')
    group_color = data.get('color')
    demographics = data.get('demographics', {})
    classification_text = data.get('classificationText', "Unclassified")
    regions = data.get('regions', [])

    if not group_id:
        return jsonify({'status': 'error', 'message': 'Group ID is required'})

    connection = connect_to_database()
    if not connection:
        return jsonify({'status': 'error', 'message': 'Failed to connect to the database'})

    try:
        with connection.cursor() as cursor:
            # Update the region group
            cursor.execute("""
                UPDATE selectedRegionGroupsRecruitment
                SET name = %s, color = %s, demographics = %s, classificationText = %s
                WHERE id = %s
            """, (group_name, group_color, json.dumps(demographics), classification_text, group_id))

            # Delete existing rows for the groupId in selectedRegionsRecruitment
            cursor.execute("DELETE FROM selectedRegionsRecruitment WHERE groupId = %s", (group_id,))

            # Insert new regions into selectedRegionsRecruitment
            for region in regions:
                cursor.execute("""
                    INSERT INTO selectedRegionsRecruitment 
                        (displayName, placeId, featureType, lat, lng, groupId, 
                         color, postalCode, classificationText, coordinates)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    ON DUPLICATE KEY UPDATE
                        displayName = VALUES(displayName),
                        featureType = VALUES(featureType),
                        lat = VALUES(lat),
                        lng = VALUES(lng),
                        color = VALUES(color),
                        classificationText = VALUES(classificationText),
                        coordinates = VALUES(coordinates)
                """, (
                    region['displayName'],
                    region['placeId'],
                    region['featureType'],
                    region['lat'],
                    region['lng'],
                    group_id,
                    region['color'],
                    region['postalCode'],
                    region['classificationText'],
                    json.dumps(region.get('coordinates', []))
                ))

        connection.commit()
        return jsonify({'status': 'success', 'message': 'Region group and associated regions updated successfully'})

    except Exception as e:
        print("Error occurred:", e)
        return jsonify({'status': 'error', 'message': str(e)})

    finally:
        if connection:
            connection.close()


@app.route('/save_circles', methods=['POST'])
def save_circles():
    try:
        # Parse the incoming JSON data
        data = request.get_json()
        if not data:
            return jsonify({"success": False, "message": "No data received"}), 400
        # Establish a database connection
        conn = connect_to_database()
        # Insert each circle into the database
        with conn.cursor() as cursor:
            for key, circle in data.items():
                query = """
                    INSERT INTO map_circles (id, name, color, classification_text, center_lat, center_lng, radius, demographics, places)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                    ON DUPLICATE KEY UPDATE
                    name = VALUES(name),
                    color = VALUES(color),
                    classification_text = VALUES(classification_text),
                    center_lat = VALUES(center_lat),
                    center_lng = VALUES(center_lng),
                    radius = VALUES(radius),
                    demographics = VALUES(demographics),
                    places = VALUES(places)
                """
                cursor.execute(query, (
                    circle['id'],
                    circle['name'],
                    circle['color'],
                    circle['classificationText'],
                    circle['center']['lat'],
                    circle['center']['lng'],
                    circle['radius'],
                    json.dumps(circle['demographics']),
                    json.dumps(circle['places'])
                ))
        # Commit the transaction and close the connection
        conn.commit()
        return jsonify({'status': 'success', 'message': 'Regions saved successfully!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
    finally:
        if conn:
            conn.close()

@app.route('/get_all_circles', methods=['GET'])
def get_all_circles():
    try:
        conn = connect_to_database()
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM map_circles")
            rows = cursor.fetchall()
            # Map tuples to dictionaries with column names
            circles = {}
            for row in rows:
                circle_id = row[0]  # Assuming the first column is `id`
                circles[circle_id] = {
                    'id': row[0],
                    'name': row[1],
                    'color': row[2],
                    'classificationText': row[3],
                    'center': {
                        'lat': row[4],
                        'lng': row[5]
                    },
                    'radius': row[6],
                    'demographics': json.loads(row[7]) if row[7] else None,
                    'places': json.loads(row[8]) if row[8] else None
                }

        return jsonify({'status': 'success', 'data': circles})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
    finally:
        if conn:
            conn.close()

@app.route('/delete_circle/<circle_id>', methods=['DELETE'])
def delete_circle(circle_id):
    try:
        conn = connect_to_database()
        with conn.cursor() as cursor:
            query = "DELETE FROM map_circles WHERE id = %s"
            cursor.execute(query, (circle_id,))
        conn.commit()
        return jsonify({'status': 'success', 'message': f'Circle with id {circle_id} deleted successfully.'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
    finally:
        if conn:
            conn.close()

@app.route('/update_circle/<circle_id>', methods=['PUT'])
def update_circle(circle_id):
    try:
        # Parse incoming JSON data
        data = request.get_json()
        if not data:
            return jsonify({'status': 'error', 'message': 'No data received'}), 400
        conn = connect_to_database()
        with conn.cursor() as cursor:
            query = """
                UPDATE map_circles
                SET name = %s,
                    color = %s,
                    classification_text = %s,
                    center_lat = %s,
                    center_lng = %s,
                    radius = %s,
                    demographics = %s,
                    places = %s
                WHERE id = %s
            """
            cursor.execute(query, (
                data['name'],
                data['color'],
                data.get('classificationText', 'Unclassified'),
                data['center']['lat'],
                data['center']['lng'],
                data['radius'],
                json.dumps(data.get('demographics', {})),
                json.dumps(data.get('places', [])),
                circle_id
            ))
        conn.commit()
        return jsonify({'status': 'success', 'message': f'Circle with id {circle_id} updated successfully.'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
      
# Fetch data from sql server
def load_csv_data():
    try:
        csv_path = os.path.join(app.static_folder, 'sample_data.csv')
        df = pd.read_csv(csv_path)
        return df
    except Exception as e:
        print(f"Error loading CSV: {e}")
        return None 

@app.route("/")
def hello_world():
    return render_template('test.html')

@app.route("/get_data", methods=["GET"])
def get_data():
    try:
        zip_code = request.args.get('zip_code')
        if not zip_code:
            return jsonify({"success": False, "error": "No ZIP code provided"})
        df = load_csv_data()
        if df is None:
            return jsonify({"success": False, "error": "Could not load CSV data"})
        zip_pattern = f"ZCTA5 {zip_code}"
        matched_data = df[df['Geographic Area Name'] == zip_pattern]
        if matched_data.empty:
            return jsonify({"success": False, "error": f"No data found for ZIP code {zip_code}"})
        row_data = matched_data.iloc[0]
        total_households = int(row_data.get('Households', 0))
        income_less_than_10k = int(row_data.get('Households Less Than $10,000', 0))
        income_10k_15k = int(row_data.get('Households $10,000 to $14,999', 0))
        income_15k_25k = int(row_data.get('Households $15,000 to $24,999', 0))
        income_25k_35k = int(row_data.get('Households $25,000 to $34,999', 0))
        income_35k_50k = int(row_data.get('Households $35,000 to $49,999', 0))
        income_50k_75k = int(row_data.get('Households $50,000 to $74,999', 0))
        income_75k_100k = int(row_data.get('Households $75,000 to $99,999', 0))
        income_100k_150k = int(row_data.get('Households $100,000 to $149,999', 0))
        income_150k_200k = int(row_data.get('Households $150,000 to $199,999', 0))
        income_200k_plus = int(row_data.get('Households $200,000 or More', 0))
        return jsonify({
            "success": True,
            "data": {
                "population": int(row_data.get('Population', 0)),
                "total_households": total_households,
                "income_less_than_10k": income_less_than_10k,
                "income_10k_15k": income_10k_15k,
                "income_15k_25k": income_15k_25k,
                "income_25k_35k": income_25k_35k,
                "income_35k_50k": income_35k_50k,
                "income_50k_75k": income_50k_75k,
                "income_75k_100k": income_75k_100k,
                "income_100k_150k": income_100k_150k,
                "income_150k_200k": income_150k_200k,
                "income_200k_plus": income_200k_plus
            }
        })
    except Exception as e:
        print("Error occurred while processing data:", e)
        return jsonify({"success": False, "error": str(e)})
@app.route("/get_state")
def get_state():
    zip_code = request.args.get('zip_code')
    if not zip_code:
        print("data not recieved as zip code for state")
    state = state_by_zipCode(zip_code)
    print(state)
    return jsonify({"success": True, "data": state})

# Write new zip codes to csv
@app.route("/save_postal", methods=["GET","POST"])
def save_postal():
    data = request.form
    new_data = list()
    for dtt in data.get('total_data'):
        
        new_data.append({'lat': dtt.get('latLng').get('lat'), 'lng': dtt.get('latLng').get('lng'),
                         'postal_code': dtt.get('postalCode'), 'place_id': dtt.get('place_id')})

    with open('postal_number.csv', 'a', newline='') as output_file:
        dict_writer = csv.DictWriter(output_file, ['lat', 'lng', 'postal_code', 'place_id'])
        dict_writer.writerows(new_data)
    return jsonify({'success':True})

# Fetch postal codes from csv
@app.route("/load_postal", methods=["GET","POST"])
def load_postal():
    data = eval(request.form.get('total_data'))
    df = pd.read_csv("postal_number.csv")
    df = df.drop_duplicates()
    count = 0
    retrieved_data = list()
    data_missed = list()
    missing_data_count = 0
    retrieve_data_count = 0
    api_new_data = list()
    for dtt in data:
        if dtt != '':
            if not df.loc[df['place_id'] == dtt].empty:
                result = df.loc[df['place_id'] == dtt].iloc[0]
                result = result.tolist()
                latlng = json.dumps({'lat':result[0],'lng':result[1]})
                retrieved_data.append([ latlng,str(result[2]),str(result[3])])
                if retrieve_data_count == 0:
                    retrieve_data_count+=1
    #         else:
    #             if missing_data_count < 10:
    #                 missing_data_count += 1
    #                 api_data = get_place_details(dtt)
    #                 latlng = json.dumps(api_data.get('lat_lng'))
    #                 postal_code = api_data.get('postal_code')
    #                 api_new_data.append({"lat":api_data.get('lat_lng').get('lat'),
    #                                      "lng":api_data.get('lat_lng').get('lng'),
    #                                      "postal_code":str(postal_code),"place_id":str(dtt)})
    #                 retrieved_data.append([latlng,str(postal_code), str(dtt)])
    #                 print( [latlng,str(postal_code), str(dtt)],'api---first'  )
    
    #     count +=1
    # with open('postal_number.csv', 'a', newline='') as output_file:
        # dict_writer = csv.DictWriter(output_file, ['lat', 'lng', 'postal_code', 'place_id'])
        # dict_writer.writerows(api_new_data)
    return jsonify({'success':True,'retrieved_data':json.dumps(retrieved_data)})


# Get detailed information places using google APIs
def get_place_details(place_id):
    api_key = 'AIzaSyCmxt9MdmhDOTDpVz3xLriP_uIe8bCTApc'
    url = "https://maps.googleapis.com/maps/api/place/details/json"
    params = {
        'place_id': place_id,
        'fields': 'address_components,geometry',
        'key': api_key
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        result = response.json()
        if result['status'] == 'OK':
            place = result['result']

            postal_component = next((component for component in place['address_components']
                                     if 'postal_code' in component['types']), None)
            if postal_component:
                postal_code = postal_component['long_name']
                lat_lng = place['geometry']['location']
                print(f"Postal Code: {postal_code}")
                print(f"Latitude/Longitude: {lat_lng}")
                return dict(postal_code=postal_code,lat_lng=lat_lng)

        else:
            print("Error:", result['status'])
    else:
        print("Failed to retrieve data:", response.status_code)


if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)
    