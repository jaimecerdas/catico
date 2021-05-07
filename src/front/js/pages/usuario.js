import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
// import { Button } from "react-bootstrap"; no lo usé

import "../../styles/demo.scss";

export function Usuario(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://media-cdn.tripadvisor.com/media/photo-p/13/ab/fa/93/nature-costa-rica-tours.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Nombre campamento</h5>
				<p className="card-text">{props.text}</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Ubicación:</li>
				<li className="list-group-item">Correo:</li>
				<li className="list-group-item">Contacto:</li>
			</ul>
			<div className="card-body">
				<a href="/detalles" className="btn btn-primary">
					Ver más
				</a>
			</div>
		</div>
	);
}
Usuario.propTypes = {
	text: PropTypes.string
};
