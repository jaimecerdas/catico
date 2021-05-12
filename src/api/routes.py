"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from .models import db, User, Visitas, Empresario, Lugares
from api.utils import generate_sitemap, APIException
api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    pin = request.json.get("pin", None)
    tipo = request.json.get("tipo", None)
    nombre = request.json.get("nombre", None)

    # valida si estan vacios los ingresos
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400
    if pin is None:
        return jsonify({"msg": "No se proveyo un PIN"}), 400
    if nombre is None:
        return jsonify({"msg": "No se proveyo un Nombre"}), 400

    if tipo == 'usuario':
        
        user = User.query.filter_by(email=email).first()
        if user:
            # the user was not found on the database
            return jsonify({"msg": "El usuario ya existe"}), 401
        else:
            # crea usuario nuevo
            new_user = User()
            new_user.email = email
            new_user.password = password
            new_user.pin = pin
            new_user.tipo = tipo
            new_user.nombre = nombre
            # crea registro nuevo en BBDD de 
            db.session.add(new_user)
            db.session.commit()
            return jsonify({"msg": "El Usuario se creo con éxito"}), 200
    else:
        empresario = Empresario.query.filter_by(email=email).first()
        if empresario:
            # the user was not found on the database
            return jsonify({"msg": "El empresario ya existe"}), 401
        else:
            # crea usuario nuevo
            new_empresario = Empresario()
            new_empresario.email = email
            new_empresario.password = password
            new_empresario.pin = pin
            new_empresario.tipo = tipo
            new_empresario.nombre = nombre
            # crea registro nuevo en BBDD de 
            db.session.add(new_empresario)
            db.session.commit()
            return jsonify({"msg": "El Empresario se creo con éxito"}), 200

@api.route('/login', methods=['POST']) 
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # valida si estan vacios los ingresos
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400

    # para proteger contraseñas usen hashed_password
    # busca usuario en BBDD
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Invalid username or password"}), 401
    else:
        # crear token
        my_token = create_access_token(identity=user.id)
        return jsonify({"token": my_token})
