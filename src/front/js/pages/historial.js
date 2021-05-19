import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Visita } from "../pages/visita";
import { Context } from "../store/appContext";

// CAMBIAR LA HOJA DE ESTILO ACA
import "../../styles/demo.scss";

export const Historial = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getMisVisitas();
		//actions.getToken();
		//console.log(store.people);
	}, []);

	return (
		<div className="container">
			<div className="row mt-4 pb-4 pt-2" style={{ justifyContent: "center" }}>
				{store.visitas.map((item, index) => {
					return <Visita key={index} nombre={item.nombre} calificacion={item.calificacion} />;
				})}
			</div>
			<Link to="/homeUsuario">
				<button className="btn btn-primary">Ver Lugares</button>
			</Link>
		</div>
	);
};
