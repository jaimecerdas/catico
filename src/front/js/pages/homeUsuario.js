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
		<div
			className="container-fluid"
			style={{
				backgroundImage: `url("https://i.pinimg.com/originals/33/6e/cc/336eccdfd0f5a053a89f8705e4561356.gif")`
			}}>
			<div className="container">
				<h1 style={{ paddingTop: "1cm", color: "white" }}>
					CampingTico
					<i className="fas fa-leaf" style={{ color: "rgb(106 181 123)" }} />
				</h1>
				<div className="row  mt-4 pb-4 pt-2" style={{ justifyContent: "center" }}>
					{store.lugares.map((item, index) => {
						return (
							<Usuario
								key={index}
								id={index}
								nombre={item.nombre}
								descripcion={item.descripcion}
								electricidad={item.electricidad}
								baños={item.baños}
								petFriendly={item.petFriendly}
								url={item.url}
							/>
						);
					})}
				</div>
				{sessionStorage.getItem("my_token") === null ? <Redirect to="/" /> : null}
			</div>
		</div>
	);
};
