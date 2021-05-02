from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

db = SQLAlchemy()

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique = True, nullable = False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    pin = db.Column(db.Integer(4), unique=True, nullable=False)

    def __repr__(self):
        return '<Usuario %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Empresario(db.Model):
    __tablename__ = 'empresario'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique = True, nullable = False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    pin = db.Column(db.Integer(4), unique=True, nullable=False)

    def __repr__(self):
        return '<Empresario %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        }

class Lugares(db.Model):
    __tablename__ = 'lugares'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique = True, nullable = False)
    ubicacion = db.Column(db.String(120), unique=True, nullable=False)
    petFriendly = db.Column(db.Boolean(), unique=False, nullable=False)
    accesoTransporte = db.Column(db.Boolean(), unique=False, nullable=False)
    baños = db.Column(db.Boolean(), unique=False, nullable=False)
    actividades = db.Column(db.String(120), unique=True, nullable=False)
    electricidad = db.Column(db.Boolean(), unique=False, nullable=False)
    familiar = db.Column(db.Boolean(), unique=False, nullable=False)
    descripcion =  db.Column(db.String(120), unique=True, nullable=False)

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
        }

class Visitas(db.Model):
    __tablename__ = 'visitas'
    id = db.Column(db.Integer, primary_key=True)
    lugares_id = db.Column(db.Integer, db.ForeignKey('lugares.id'), nullable=False)
    calificacion = db.Column(db.Integer(5), unique=True, nullable=False)
 
    def __repr__(self):
        return '<Visitas %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "lugares_id": self.lugares_id,
            "calificacion": self.calificacion,      
        }