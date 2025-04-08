import json
from flask import Flask, jsonify
import mysql.connector
from googleSheet import append_rows_to_google_sheet, write_headers_if_needed

app = Flask(__name__)

 # Send to Google Sheets
SHEET_ID = '1oX-U0NXIkyOg33B5os8UeCAo11bKwKfH_NUjcP7hqbU'

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
    
def load_regions_recruitment():
    connection = connect_to_database()
    if not connection:
        return jsonify({'status': 'error', 'message': 'Failed to connect to the database'})
    try:
        with connection.cursor(dictionary=True) as cursor:
            cursor.execute("SELECT id, name, color, demographics, classificationText, label, recruitmentArea, PotStoreCount, category, zipCodesRecruitment, stateRecruitment FROM selectedRegionGroupsRecruitment")
            region_groups = cursor.fetchall()
            demographic_keys = set()
            for g in region_groups:
                g['demographics'] = json.loads(g['demographics']) if g['demographics'] else {}
                demographic_keys.update(g['demographics'].keys())
            demographic_keys = sorted(demographic_keys)
            region_group_headers = [
                'id', 'name', 'color', 'classificationText', 'label', 'recruitmentArea',
                'PotStoreCount', 'category', 'zipCodesRecruitment', 'stateRecruitment'
            ] + demographic_keys
            region_group_rows = []
            for g in region_groups:
                row = [
                    g['id'], g['name'], g['color'], g['classificationText'], g['label'],
                    g['recruitmentArea'], g['PotStoreCount'], g['category'],
                    g['zipCodesRecruitment'], g['stateRecruitment']
                ]
                row.extend([g['demographics'].get(k, '') for k in demographic_keys])
                region_group_rows.append(row)
            cursor.execute("SELECT displayName, placeId, featureType, lat, lng, groupId, color, postalCode, classificationText, coordinates FROM selectedRegionsRecruitment")
            regions = cursor.fetchall()
            for r in regions:
                r['coordinates'] = json.loads(r['coordinates']) if r['coordinates'] else []
            region_headers = [
                'displayName', 'placeId', 'featureType', 'lat', 'lng',
                'groupId', 'color', 'postalCode', 'classificationText', 'coordinates'
            ]
            region_rows = [
                [
                    r['displayName'], r['placeId'], r['featureType'], r['lat'], r['lng'],
                    r['groupId'], r['color'], r['postalCode'], r['classificationText'],
                    json.dumps(r['coordinates'])
                ] for r in regions
            ]
        write_headers_if_needed(SHEET_ID, 'RegionGroups', region_group_headers)
        append_rows_to_google_sheet(SHEET_ID, 'RegionGroups', region_group_rows)

        write_headers_if_needed(SHEET_ID, 'Regions', region_headers)
        append_rows_to_google_sheet(SHEET_ID, 'Regions', region_rows)
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

load_regions_recruitment()