import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/principal.scss";
import { Redirect } from "react-router-dom";

export function Boton() {
	const { store, actions } = useContext(Context);
	const [auth, setAuth] = useState(false);

	if (sessionStorage.getItem("my_token") !== null) {
		return (
			<div className="ml-auto">
				<button
					className="btn btn-light mx-2"
					onClick={e => {
						
						//window.location.reload(false);
                        setAuth(true);
                        actions.logout;
                        sessionStorage.removeItem("my_token");
					}}>
					Cerrar sesión
				</button>
                {auth == true ? <Redirect to="/" /> : null}
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
