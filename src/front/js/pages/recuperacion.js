import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const Recuperacion = () => {
	const [email, setEmail] = useState(null);
	const [tipo, setTipo] = useState(null);
	const [pin, setPin] = useState(null);
	const [newPassword, setNewPassword] = useState(null);
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		if (newPassword === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: nueva contraseña");
		} else if (email === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: email");
		} else if (pin === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: pin");
		} else if (tipo === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: tipo de usuario");
		}

		const body = {
			email: email,
			tipo: tipo,
			pin: pin,
			newPassword: newPassword
		};

		// fetch de REGISTER
		fetch("https://3001-pink-asp-ngdvnli9.ws-us04.gitpod.io/api/recuperacion", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				let message = data.msg;
				console.log(message);
				if (message === "Su contraseña fue modificada") {
					// añadir token a session
					//da authorizacion
					window.alert("Su contraseña fue modificada. Se redireccionará al login.");
					setAuth(true);
				} else {
					window.alert("No se realizó el cambio: " + message);
				}
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="mx-auto pt-5">
			<h1>Recuperación de Contraseña</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="form-group">
					<label htmlFor="exampleFormControlSelect4">Elige tu tipo de usuario</label>
					<select
						className="form-control"
						id="exampleFormControlSelect1"
						onChange={e => setTipo(e.target.value)}>
						<option value="">Selecciona tipo de cuenta</option>
						<option value="usuario">Usuario</option>
						<option value="empresario">Empresario</option>
					</select>
				</div>
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
						Pin
					</label>
					<input
						onChange={e => setPin(e.target.value)}
						type="text"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Ingresa una nueva contraseña
					</label>
					<input
						onChange={e => setNewPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Cambiar contraseña
				</button>
			</form>
			{auth ? <Redirect to="/login" /> : null}
		</div>
	);
};
