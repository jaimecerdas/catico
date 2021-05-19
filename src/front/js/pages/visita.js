import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Visita = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let index = params.theid;

	return (
		<div className="card" style={{ width: "250px", margin: "0.5cm" }}>
			<img
				src="https://media-cdn.tripadvisor.com/media/photo-p/13/ab/fa/93/nature-costa-rica-tours.jpg"
				className="card-img-top"
				alt="..."
			/>

			<div key={index}>
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
				</div>
				<div className="list-group list-group-flush">
					<li className="list-group-item">
						<strong>Calificacion: </strong>
						{props.calificacion}
					</li>
				</div>
			</div>
		</div>
	);
};

Visita.propTypes = {
	key: PropTypes.number,
	id: PropTypes.number,
	nombre: PropTypes.string,
	calificacion: PropTypes.number
};
