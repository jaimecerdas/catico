import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

// CAMBIAR LA HOJA DE ESTILO ACA
import "../../styles/demo.scss";

export const Recuperacion = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col" />

				<div className="col">
					<div className="text-center">
						<img src="https://i.ibb.co/B337kMf/logo.png" width="120px" alt="" />
					</div>
				</div>
				<h2 className="fw-bold text-center py-5">Recuperación de Contraseña</h2>

				<form action="#">
					<p>Ingresa tu correo electrónico</p>
					<div className="mb-4">
						<label htmlFor="correo electronico" className="form-label">
							Correo electrónico
						</label>
						<input type="correo electronico" className="form-control" name="correo electronico" />
					</div>

					<p>Ingresa tu Pin</p>
					<div className="mb-4">
						<label htmlFor="pin" className="form-label">
							Pin
						</label>
						<input type="pin" className="form-control" name="pin" />
					</div>

					<div className="d-grid">
						<button type="submit" className="btn btn-primary">
							Obtener Contraseña
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
