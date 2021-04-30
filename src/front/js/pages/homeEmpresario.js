import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const HomeEmpresario = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<br />
			<p>HOME EMPRESARIO</p>

			<p>MIS LUGARES</p>
			<p>Aqui van mis lugares</p>
			<p>CREAR UN NUEVO LUGAR</p>
			<p>Aqui va el form</p>

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
