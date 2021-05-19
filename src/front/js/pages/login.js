import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [auth, setAuth] = useState(false);
	const [tipo, setTipo] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password,
			tipo: tipo
		};

		if (email === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: email");
		} else if (password === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: password");
		} else if (tipo === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: tipo de usuario");
		}
		// fetch de LOGIN
		fetch("https://3001-tomato-woodpecker-kss14jqn.ws-us04.gitpod.io/api/login", {
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
				if (message === "Login successfull") {
					// añadir token a session
					sessionStorage.setItem("my_token", data.token);
					//da authorizacion
					setAuth(true);
				} else {
					window.alert("El ingreso falló: " + message);
				}
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="mx-auto pt-5">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
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
						Correo electrónico
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
						type="Contraseña"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Ingresar
				</button>
			</form>
			<div className="mx-auto pt-5">
				<p>
					¿Olvidaste tu contraseña?
					<Link to="/recuperacion">
						<a> Podés recuperarla aquí.</a>
					</Link>
				</p>
			</div>
			{tipo === "usuario" && auth == true ? <Redirect to="/homeUsuario" /> : null}
			{tipo === "empresario" && auth == true ? <Redirect to="/homeEmpresario" /> : null}
		</div>
	);
};
