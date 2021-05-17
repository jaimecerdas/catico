import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const Register = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [pin, setPin] = useState(null);
	const [tipo, setTipo] = useState(null);
	const [nombre, setNombre] = useState(null);
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		if (nombre === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: nombre");
		} else if (password === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: password");
		} else if (email === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: email");
		} else if (pin === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: pin");
		} else if (tipo === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: tipo de usuario");
		}

		const body = {
			email: email,
			password: password,
			pin: pin,
			tipo: tipo,
			nombre: nombre
		};

		// fetch de REGISTER
		fetch("https://3001-coral-bonobo-s5olftyf.ws-us04.gitpod.io/api/register", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="mx-auto pt-5">
			<h1>Registro</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Escribe tu nombre:
					</label>
					<input
						onChange={e => setNombre(e.target.value)}
						type="text"
						className="form-control"
						id="exampleInputEmail2"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text" />
				</div>
				<div>
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
						Contraseña
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
					<div id="emailHelp" className="form-text" />

					<div className="mb-3">
						<label htmlFor="text" className="form-label">
							Pin
						</label>
						<input onChange={e => setPin(e.target.value)} type="text" className="form-control" name="pin" />
						<p>Crea un pin en caso de que olvides la contraseña</p>
					</div>
				</div>
				<button type="submit" className="btn btn-primary">
					Crear cuenta
				</button>
			</form>

			{tipo === "usuario" && auth == true ? <Redirect to="/login" /> : null}
			{tipo === "empresario" && auth == true ? <Redirect to="/loginempresario" /> : null}
		</div>
	);
};
