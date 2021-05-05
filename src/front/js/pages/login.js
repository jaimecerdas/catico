import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

// CAMBIAR LA HOJA DE ESTILO ACA
import "../../styles/demo.scss";

export const Login = () => {
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
				<h2 className="fw-bold text-center py-5">Login</h2>

				<form action="#">
					<div className="mb-4">
						<label htmlFor="correo electronico" className="form-label">
							Correo electrónico
						</label>
						<input type="correo electronico" className="form-control" name="correo electronico" />
					</div>

					<div className="mb-4">
						<label htmlFor="contraseña" className="form-label">
							Contraseña
						</label>
						<input type="contraseña" className="form-control" name="contraseña" />
					</div>

					<p>Selecciona el tipo de usuario que sos</p>

					<input type="checkbox" name="Soy usuario" className="form-check-input" />
					<label htmlFor="Soy usuario" className="form-check-label">
						Soy Usuario
					</label>

					<input type="checkbox" name="Soy empresario" className="form-check-input" />
					<label htmlFor="Soy empresario" className="form-check-label">
						Soy Empresario
					</label>

					<div className="d-grid">
						<button type="submit" className="btn btn-primary">
							Sign In
						</button>
					</div>

					<div className="my-3">
						<span>
							No tienes cuenta? <a href="#">Regístrate</a>
						</span>
						<span>
							Olvidaste la contarseña? <a href="#">Recupera la contraseña</a>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};
