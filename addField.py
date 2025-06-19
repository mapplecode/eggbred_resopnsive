from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/addField', methods=['GET'])
def index():
    return render_template('AddField.html')

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)