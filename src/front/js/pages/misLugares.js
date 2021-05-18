import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const MisLugares = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let index = params.theid;

	return (
		<div className="card" style={{ width: "250px", margin: "0.5cm" }}>
			<img src={props.url} className="card-img-top" alt="..." />

			<div key={index}>
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text">{props.descripcion}</p>
				</div>
				<div className="list-group list-group-flush">
					<li className="list-group-item">
						Electricidad:
						{props.electricidad}
					</li>
					<li className="list-group-item">
						Baños:
						{props.baños}
					</li>
					<li className="list-group-item">
						Petfriendly:
						{props.petfriendly}
					</li>
				</div>
			</div>

			<div className="card-body">
				<div className="col-sm mb-1" key={index}>
					<button className="btn btn-light mx-2" onClick={() => alert("Funcionalidad para futura version")}>
						Editar
					</button>
				</div>
				<div className="col-sm mb-1" key={index}>
					<button className="btn btn-light mx-2" onClick={() => alert("Funcionalidad para futura version")}>
						Borrar
					</button>
				</div>
				<div className="col-sm mb-1" key={index}>
					<button className="btn btn-light mx-2" onClick={() => alert("Funcionalidad para futura version")}>
						Cerrar sesión
					</button>
				</div>
			</div>
		</div>
	);
};

MisLugares.propTypes = {
	id: PropTypes.number,
	nombre: PropTypes.string,
	descripcion: PropTypes.string,
	electricidad: PropTypes.string,
	baños: PropTypes.string,
	petfriendly: PropTypes.string,
	url: PropTypes.string
};
