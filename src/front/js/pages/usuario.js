import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export function Usuario() {
	const { store, actions } = useContext(Context);

	return (
		<div className="card" style={{ width: "18rem", margin: "0.5cm" }}>
			<img
				src="https://media-cdn.tripadvisor.com/media/photo-p/13/ab/fa/93/nature-costa-rica-tours.jpg"
				className="card-img-top"
				alt="..."
			/>
			{store.lugar.map((item, index) => {
				return (
					<div className="container" key={index}>
						<div className="card-body">
							<h5 className="card-title">{item.nombre}</h5>
							<p className="card-text">{item.descripcion}</p>
						</div>
						<div className="list-group list-group-flush">
							<li className="list-group-item">
								Electricidad:
								{item.electricidad}
							</li>
							<li className="list-group-item">
								Baños:
								{item.banos}
							</li>
							<li className="list-group-item">
								Petfriendly:
								{item.petfriendly}
							</li>
						</div>
					</div>
				);
			})}
			<div className="card-body">
				<a href="/detalles" className="btn btn-primary">
					Ver más
				</a>
			</div>
		</div>
	);
}
