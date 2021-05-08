import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		// fetch de REGISTER
		fetch("https://3000-peach-reindeer-5dsbnefl.ws-us03.gitpod.io/register", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				// setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="mx-auto pt-5">
			<h1>Registro</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Correo Electrónico
					</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Contraseña
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>

					<div className="mb-4">
						<p>Crea un Pin de 4 dígitos en caso de que olvides la Contraseña</p>
						<label htmlFor="pin" className="form-label">
							Pin
						</label>
						<input type="pin" className="form-control" name="pin" />
					</div>
					<div>
						<p>Selecciona el tipo de usuario que sos</p>

						<input type="checkbox" name="Soy usuario" className="form-check-input" />
						<label htmlFor="Soy usuario" className="form-check-label">
							Soy Usuario
						</label>
						<div>
							<input type="checkbox" name="Soy empresario" className="form-check-input" />
							<label htmlFor="Soy empresario" className="form-check-label">
								Soy Empresario
							</label>
						</div>
					</div>
				</div>
				<button type="submit" className="btn btn-primary">
					Ingresar
				</button>
			</form>
			{auth ? <Redirect to="/login" /> : null}
		</div>
	);
};
