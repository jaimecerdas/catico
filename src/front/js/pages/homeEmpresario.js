import React, { useState, useEffect, useContext } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { MapContainer } from "../component/mapContainer";

export const HomeEmpresario = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<br />
			<MapContainer />
			<div className="jumbotron">
				<h1 className="display-4">¡Hola, (Nombre)!</h1>
				<p className="lead">Gracias por utilizar CampingTico.</p>
				<hr className="my-4" />
				<p>Ingresa un nuevo lugar:</p>
				<p className="lead">
					<a className="btn btn-primary btn-lg" href="#crearlugarform" role="button">
						Agregar un lugar
					</a>
				</p>
			</div>
			<div className="cards">
				<h1 className="display-4 my-4">Tus Lugares</h1>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Nombre del Lugar</h5>
						<p className="card-text">Descripcion del lugar</p>
						<img
							className="card-img-top my-3"
							src="https://www.intermundial.es/blog/wp-content/uploads/2014/06/shutterstock_64920532.jpg"
							alt="Card image cap"
						/>
						<a href="#" className="btn btn-primary">
							Detalles
						</a>
					</div>
				</div>

				<div className="crearLugar">
					<h1 className="display-4 my-4">Agregar un lugar</h1>

					<form id="crearlugarform">
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea2">¿Cómo se llama tu lugar?</label>
							<input className="form-control" id="exampleFormControlTextarea2" placeholder="Mi lugar" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect1">¿Tu lugar es Pet Friendly?</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Sí</option>
								<option>No</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect2">¿Tu lugar tiene acceso por Transporte?</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Sí</option>
								<option>No</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect3">¿Tu lugar tiene baños?</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Sí</option>
								<option>No</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect4">¿Tu lugar tiene electricidad?</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Sí</option>
								<option>No</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect2">¿Qué tipo de ambiente es?</label>
							<select className="form-control" id="exampleFormControlSelect2">
								<option>Familiar</option>
								<option>Adultos</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea1">Describe tu lugar:</label>
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea3">¿Qué actividades tiene tu lugar?</label>
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
						</div>

						<div className="form-group">
							<label htmlFor="exampleFormControlFile1">Example file input</label>
							<input type="file" className="form-control-file" id="exampleFormControlFile1" />
						</div>
						<button type="submit" className="btn btn-primary mb-2">
							Sube imagen
						</button>
					</form>
				</div>
			</div>
			s
			<Link to="/">
				<button className="btn btn-primary my-5">Back home</button>
			</Link>
		</div>
	);
};