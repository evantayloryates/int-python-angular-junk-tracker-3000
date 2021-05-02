# coding=utf-8

from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from database import Database
from vehicle_registration_service import register_vehicle

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
database = Database()

@app.route('/vehicles')
@cross_origin()
def get_vehicles():
  return jsonify(database.list())

@app.route('/vehicles', methods=['POST'])
@cross_origin()
def create_vehicle():
  data = request.get_json()
  vehicle = database.create(data)

  vehicle['registration_number'] = register_vehicle(vehicle)

  return (jsonify(vehicle), 201)

@app.route('/vehicles/<id>')
@cross_origin()
def get_vehicle(id):
  return jsonify(database.find(int(id)))

@app.route('/vehicles/<id>', methods=['PATCH'])
@cross_origin()
def update_vehicle(id):
  data = request.get_json()
  return jsonify(database.update(int(id), data))

@app.route('/vehicles/<id>', methods=['DELETE'])
def delete_vehicle(id):
  database.destroy(int(id))
  return ('', 204)
