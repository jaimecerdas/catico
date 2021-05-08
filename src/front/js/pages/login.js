import React, { useState } from "react";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [contraseña, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			Contraseña: Contraseña
		};

		// fetch de LOGIN
		fetch("https://3000-peach-reindeer-5dsbnefl.ws-us03.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				// añadir token a session
				sessionStorage.setItem("my_token", data.token);
				// let token = sessionStorage.getItem("my_token")
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="mx-auto pt-5">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
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
		</div>
	);
};
