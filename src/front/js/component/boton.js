import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/principal.scss";

export function Boton() {
	const { store, actions } = useContext(Context);

	if (sessionStorage.getItem("my_token") !== null) {
		return (
			<div className="ml-auto">
				<button className="btn btn-light mx-2" onClick={actions.logout}>
					Cerrar sesión
				</button>
			</div>
		);
	} else {
		return (
			<div className="ml-auto">
				<Link to="/register">
					<button className="btn btn-light mx-2">Registrarse</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-light mx-2">Ingreso</button>
				</Link>
			</div>
		);
	}
}
