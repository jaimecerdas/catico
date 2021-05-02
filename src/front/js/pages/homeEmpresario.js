import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const HomeEmpresario = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<br />
			<div className="jumbotron">
				<h1 className="display-4">¡Hola, (Nombre)!</h1>
				<p className="lead">Gracias por utilizar CampingTico.</p>
				<hr className="my-4" />
				<p>Ingresa un nuevo lugar:</p>
				<p className="lead">
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Agregar un lugar
					</a>
				</p>
			</div>

			<div className="cards">
				<h1 className="display-4">Tus Lugares</h1>
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
					<h1 className="display-4">Agregar un lugar</h1>

					<form>
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea2">Nombre</label>
							<input className="form-control" id="exampleFormControlTextarea2" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect1">Provincia</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Alajuela</option>
								<option>Cartago</option>
								<option>Heredia</option>
								<option>Limón</option>
								<option>Guanacaste</option>
								<option>San José</option>
								<option>Puntarenas</option>
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea1">Descripción</label>
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect2">Ambiente</label>
							<select className="form-control" id="exampleFormControlSelect2">
								<option>Familiar</option>
								<option>Adultos</option>
							</select>
						</div>
					</form>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-primary my-5">Back home</button>
			</Link>
		</div>
	);
};
