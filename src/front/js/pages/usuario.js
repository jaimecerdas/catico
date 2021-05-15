import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Usuario = props => {
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
				<Link to={"/detalles/" + props.id} key={index}>
					<div className="col-sm" key={index}>
						<a href="#" className="btn btn-warning">
							Ver Más
						</a>
					</div>
				</Link>
			</div>
		</div>
	);
};

Usuario.propTypes = {
	id: PropTypes.number,
	nombre: PropTypes.string,
	descripcion: PropTypes.string,
	electricidad: PropTypes.string,
	baños: PropTypes.string,
	petfriendly: PropTypes.string
};
