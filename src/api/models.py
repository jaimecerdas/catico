from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.String(120), unique=False, nullable=False)
    nombre = db.Column(db.String(120), unique = False, nullable = False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    pin = db.Column(db.Integer, unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.id,
            "email": self.email,
            "tipo": self.tipo
            # do not serialize the password, its a security breach
        }

class Empresario(db.Model):
    __tablename__ = 'empresario'
    id = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.String(120), unique=False, nullable=False)
    nombre = db.Column(db.String(120), unique = False, nullable = False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    pin = db.Column(db.Integer, unique=False, nullable=False)

    def __repr__(self):
        return '<Empresario %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.id,
            "email": self.email,
            "tipo": self.tipo
        }

class Lugares(db.Model):
    __tablename__ = 'lugares'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique = False, nullable = False)
    ubicacion = db.Column(db.String(120), unique=False, nullable=False)
    petFriendly = db.Column(db.String(120), unique=False, nullable=False)
    accesoTransporte = db.Column(db.String(120), unique=False, nullable=False)
    baños = db.Column(db.String(120), unique=False, nullable=False)
    actividades = db.Column(db.String(120), unique=False, nullable=False)
    electricidad = db.Column(db.String(120), unique=False, nullable=False)
    ambiente = db.Column(db.String(120), unique=False, nullable=False)
    descripcion =  db.Column(db.String(120), unique=False, nullable=False)
    contacto =  db.Column(db.String(120), unique=False, nullable=False)
    email =  db.Column(db.String(120), unique=False, nullable=False)
    telefono =  db.Column(db.String(120), unique=False, nullable=False)
    empresario_email = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<Lugares %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "ubicacion": self.ubicacion,
            "petFriendly": self.petFriendly,
            "accesoTransporte": self.accesoTransporte,
            "baños": self.baños,
            "actividades": self.actividades,
            "electricidad": self.electricidad,
            "descripcion": self.descripcion,
            "ambiente": self.ambiente,
            "contacto":self.contacto,
            "email":self.email,
            "telefono":self.telefono
        }

class Visitas(db.Model):
    __tablename__ = 'visitas'
    id = db.Column(db.Integer, primary_key=True)
    user_email = db.Column(db.String(250), nullable=False)
    nombre = db.Column(db.String(250), nullable=False)
    calificacion = db.Column(db.Integer, unique=False, nullable=False)
 
    def __repr__(self):
        return '<Visitas %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_email":  self.user_email,
            "nombre": self.nombre,
            "calificacion": self.calificacion
        }