import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Usuario } from "../pages/usuario";

import { Context } from "../store/appContext";

import "../../styles/estrellas.scss";

export const HomeUsuario = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-warning ">
			<h1 style={{ paddingTop: "0.7cm" }}>Camping Tico</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				<div>
					<Usuario />
				</div>
				<div>
					<Usuario />
				</div>
				<div>
					<Usuario />
				</div>
				<div>
					<Usuario />
				</div>
				<div>
					<Usuario />
				</div>
				<div>
					<Usuario />
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-primary my-5">Back home</button>
			</Link>
		</div>
	);
};
