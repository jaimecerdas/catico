import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Usuario } from "../pages/usuario";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const HomeUsuario = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container ">
			<h1 style={{ paddingTop: "0.7cm" }}>Limón</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 ">
				<div>{/* <People name={element.name} url={peoplePics[element.uid]} /> */}</div>
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
			<h1 style={{ paddingTop: "0.7cm" }}>San José</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				<div>
					<Usuario text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
				</div>
				<div>
					<Usuario text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
				</div>
				<div>
					<Usuario text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
				</div>
			</div>
			<a className="btn btn-primary" href="/" role="button">
				Back home
			</a>
		</div>
	);
};
