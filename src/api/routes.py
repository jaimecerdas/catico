"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from .models import db, User, Visitas, Empresario, Lugares
from api.utils import generate_sitemap, APIException
api = Blueprint('api', __name__)
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity, create_access_token

# Handle/serialize errors like a JSON object
@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@api.route('/')
def sitemap():
    return generate_sitemap(app)
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }
    return jsonify(response_body), 200

#POST Visitas
@api.route('/addVisitas', methods=['POST'])
def post_visitas():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    user_email = user.email
    visitas_nombre = request.json.get("visitas_nombre")
    nueva_visita = Visitas()
    nueva_visita.visitas_nombre = visitas_nombre
    nueva_visita.user_email = user_email
    # crea registro de nueva visita
    db.session.add(nueva_visita)
    db.session.commit()
    return jsonify({"msg": "La Visita se registro exitosamente"}), 200

#GET Visitas
@api.route('/getVisitas', methods=['GET', 'POST'])
def get_visitas():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    user_email = user.email
    allvisitas = Visitas.query.filter_by(user_email=user_email)
    allvisitas = list(map(lambda x: Visitas.serialize(x), allvisitas))
    return  jsonify(allvisitas), 200

#DELETE Visitas
@api.route('/delVisitas', methods=['DELETE'])
def del_visitas():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    user_email = user.email
    visitas_name = request.json.get("visitas_name")
    delVisitas = Visitas.query.filter_by(user_email=user_email).filter_by(visitas_name=visitas_name).first()
    db.session.delete(delvisitas)
    db.session.commit()
    return jsonify({"msg": "La visita se borro exitosamente"}), 400

#POST Lugar
@api.route('/addLugar', methods=['POST'])
@jwt_required()
def post_lugar():
    current_id = get_jwt_identity()
    empresario = Empresario.query.get(current_id)
    empresario_email = empresario.email
    nombre = request.json.get("nombre", None)
    ubicacion = request.json.get("ubicacion", None)
    petFriendly = request.json.get("petFriendly", None)
    accesoTransporte = request.json.get("accesoTransporte", None)
    baños = request.json.get("baños", None)
    actividades = request.json.get("actividades", None)
    electricidad = request.json.get("electricidad", None)
    ambiente = request.json.get("ambiente", None)
    descripcion =  request.json.get("descripcion", None)
    contacto =  request.json.get("contacto", None)
    email =  request.json.get("email", None)
    telefono =  request.json.get("telefono", None)
    # crea usuario nuevo
    new_lugar = Lugares()
    new_lugar.empresario_email = empresario_email
    new_lugar.nombre = nombre
    new_lugar.ubicacion = ubicacion
    new_lugar.petFriendly = petFriendly
    new_lugar.accesoTransporte = accesoTransporte
    new_lugar.baños = baños
    new_lugar.actividades = actividades
    new_lugar.electricidad = electricidad
    new_lugar.ambiente = ambiente
    new_lugar.descripcion = descripcion
    new_lugar.contacto = contacto 
    new_lugar.email = email
    new_lugar.telefono = telefono
    # crea registro nuevo en BBDD de 
    db.session.add(new_lugar)
    db.session.commit()
    return jsonify({"msg": "El Lugar se creo con éxito"}), 200

#GET Lugares
@api.route('/getLugares', methods=['GET'])
def bring_visitas():
    alllugares = Lugares.query.all()
    alllugares = list(map(lambda x: Lugares.serialize(x), alllugares))
    return  jsonify(alllugares), 200

#GET Lugares
@api.route('/getMisLugares', methods=['GET'])
@jwt_required()
def bring_visitas2():
    current_id = get_jwt_identity()
    empresario = Empresario.query.get(current_id)
    empresario_email = empresario.email
    mislugares = Lugares.query.filter_by(empresario_email=empresario_email)
    mislugares = list(map(lambda x: Lugares.serialize(x), mislugares))
    return  jsonify(mislugares), 200

#Falta hacerlo por usuario
@api.route('/register', methods=['POST'])
def register_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    pin = request.json.get("pin", None)
    tipo = request.json.get("tipo", None)
    nombre = request.json.get("nombre", None)
    # valida si estan vacios los ingresos
    if email is None:
        return jsonify({"msg": "No se proveyo email"}), 400
    if password is None:
        return jsonify({"msg": "No se proveyo password"}), 400
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

@api.route('/login', methods=['GET', 'POST']) 
# @jwt_required()
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    tipo = request.json.get("tipo", None)
    # valida si estan vacios los ingresos
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400
    if tipo is None:
        return jsonify({"msg": "No tipo was provided"}), 400
    # para proteger contraseñas usen hashed_password
    # busca usuario en BBDD
    if tipo == 'usuario':
            user = User.query.filter_by(email=email, password=password).first()
            if user is None:
                return jsonify({"msg": "Invalid username or password"}), 401
            else:
                # crear token
                my_token = create_access_token(identity=user.id)
                return jsonify({"token": my_token,"msg": "Login successfull"})
    if tipo == 'empresario':
            empresario = Empresario.query.filter_by(email=email, password=password).first()
            if empresario is None:
                return jsonify({"msg": "Invalid username or password"},), 401
            else:
                # crear token
                my_token = create_access_token(identity=empresario.id)
                return jsonify({"token": my_token,"msg": "Login successfull"})
                
@api.route('/recuperacion', methods=['POST']) 
# @jwt_required()
def recuperacion():
    email = request.json.get("email", None)
    tipo = request.json.get("tipo", None)
    pin = request.json.get("pin", None)
    newPassword = request.json.get("newPassword", None)
    if tipo == 'usuario':
            user = User.query.filter_by(email=email, pin=pin).first()
            if user is None:
                return jsonify({"msg": "El Usuario o el pin es inválido"}), 401
            else:
                # cambio de contrasena
                user.password = newPassword
                db.session.commit()
                return jsonify({"msg": "Su contraseña fue modificada"})
    if tipo == 'empresario':
            empresario = Empresario.query.filter_by(email=email, pin=pin).first()
            if empresario is None:
                return jsonify({"msg": "El empresario o el pin es inválido"}), 401
            else:
                # crear token
                empresario.password = newPassword
                db.session.commit()
                return jsonify({"msg": "Su contraseña fue modificada"})