# coding=utf-8

from flask import Flask, jsonify, request
from database import Database
from vehicle_registration_service import register_vehicle

app = Flask(__name__)
database = Database()

@app.route('/vehicles')
def get_vehicles():
  return jsonify(database.list())

@app.route('/vehicles', methods=['POST'])
def create_vehicle():
  data = request.get_json()
  vehicle = database.create(data)

  vehicle['registration_number'] = register_vehicle(vehicle)

  return (jsonify(vehicle), 201)

@app.route('/vehicles/<id>')
def get_vehicle(id):
  return jsonify(database.find(int(id)))

@app.route('/vehicles/<id>', methods=['PATCH'])
def update_vehicle(id):
  data = request.get_json()
  return jsonify(database.update(int(id), data))

@app.route('/vehicles/<id>', methods=['DELETE'])
def delete_vehicle(id):
  database.destroy(int(id))
  return ('', 204)
