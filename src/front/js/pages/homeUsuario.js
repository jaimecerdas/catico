import React, { useState, useEffect, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import { Usuario } from "../pages/usuario";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/estrellas.scss";

export const HomeUsuario = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getLugares();
		//actions.getToken();
		//console.log(store.people);
	}, []);

	return (
		<div className="container">
			<h1 style={{ paddingTop: "0.7cm" }}>
				CampingTico
				<i className="fas fa-leaf" style={{ color: "rgb(106 181 123)" }} />
			</h1>
			<div className="row  mt-4 pb-4 pt-2 ">
				{store.lugares.map((item, index) => {
					return (
						<Usuario
							key={index}
							id={index}
							nombre={item.nombre}
							descripcion={item.descripcion}
							electricidad={item.electricidad}
							baños={item.baños}
							petfriendly={item.petfriendly}
							url={item.url}
						/>
					);
				})}
			</div>
			<Link to="/">
				<button className="btn btn-primary my-5">Back home</button>
			</Link>
			{sessionStorage.getItem("my_token") === null ? <Redirect to="/" /> : null}
		</div>
	);
};
