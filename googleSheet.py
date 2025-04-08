import requests

def access_token():
    url = "https://accounts.google.com/o/oauth2/token"
    payload = 'client_id=740646132987-0iogdghhegamsj8v3ukdnpimqcq1eqb5.apps.googleusercontent.com&client_secret=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&refresh_token=1%2F%2F0g1FQfjNhgP4ACgYIARAAGBASNwF-L9IruUijtbtAxL2xgNwQPlQfHNyoUgt_-jvAn3cPBvpY8R7o96DCi2kf1KXqSIVuGhuXA5U&grant_type=refresh_token'
    headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    if response.status_code == 200:
        token = response.json().get('access_token')
        return token
    else:
        print(response.status_code, "❌ Failed to get access token:", response.text)
        return None

def write_headers_if_needed(sheet_id, sheet_name, headers_row):
    url = f"https://sheets.googleapis.com/v4/spreadsheets/{sheet_id}/values/{sheet_name}!A1?valueInputOption=RAW"

    headers_dict = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {access_token()}'
    }

    # Check if sheet is empty
    check_url = f"https://sheets.googleapis.com/v4/spreadsheets/{sheet_id}/values/{sheet_name}?majorDimension=ROWS"
    check_response = requests.get(check_url, headers=headers_dict)
    
    if check_response.status_code == 200:
        data = check_response.json()
        if 'values' not in data or len(data['values']) == 0:
            # Write headers
            payload = {
                "range": f"{sheet_name}!A1",  # ✅ Match the URL's range
                "majorDimension": "ROWS",
                "values": [headers_row]
            }
            put_response = requests.put(url, headers=headers_dict, json=payload)
            if put_response.status_code != 200:
                print(f"❌ Failed to write headers to {sheet_name}:", put_response.text)
            else:
                print(f"✅ Headers added to sheet: {sheet_name}")
    else:
        print("❌ Failed to check sheet:", check_response.text)


def append_rows_to_google_sheet(sheet_id, sheet_name, rows):
    url = f"https://sheets.googleapis.com/v4/spreadsheets/{sheet_id}/values/{sheet_name}!A1:append?valueInputOption=RAW"
    payload = {
        "values": rows
    }
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {access_token()}'
    }
    response = requests.post(url, headers=headers, json=payload)
    if response.status_code != 200:
        print("❌ Failed to send to Google Sheets:", response.text)
    else:
        print("✅ Data sent to Google Sheets:", sheet_name)
        
