import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { MisLugares } from "../pages/misLugares";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/demo.scss";

export const HomeEmpresario = () => {
	const { store, actions } = useContext(Context);
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		actions.getLugares();
		actions.getMisLugares();
		//actions.getToken();
		console.log(store.misLugares);
	}, []);

	// Variables del Lugar

	// This is a new comment

	const [nombre, setNombre] = useState("");
	const [petFriendly, setPetFriendly] = useState("");
	const [accesoTransporte, setAccesoTransporte] = useState("");
	const [baños, setBaños] = useState("");
	const [electricidad, setElectricidad] = useState("");
	const [ambiente, setAmbiente] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [actividades, setActividades] = useState("");
	const [ubicacion, setUbicacion] = useState("");
	const [contacto, setContacto] = useState("");
	const [email, setEmail] = useState("");
	const [telefono, setTelefono] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		console.log(body);

		// fetch de Creacion de Lugar
		fetch(process.env.REACT_APP_BACKEND_URL + "/api/addLugar", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				//setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container">
			<br />
			<div
				className="jumbotron"
				style={{
					backgroundColor: "transparent"
				}}
				id="jumbotron">
				<h1 className="display-4">¡Hola!</h1>
				<p className="lead">Bienvenido a tu perfil de empresario</p>
				<hr className="my-4" />
				<div>
					<p>
						<Link to="/crearLugar">
							<button className="btn btn-light mx-2">Agregar un lugar</button>
						</Link>
					</p>
				</div>
			</div>

			<div
				className="cards"
				id="tueslugares"
				style={{
					backgroundColor: "transparent"
				}}>
				<h1
					className="display-4 my-4"
					style={{
						backgroundColor: "transparent"
					}}>
					Tus Lugares
				</h1>
				<div
					className="card"
					style={{
						backgroundColor: "transparent"
					}}>
					<div className="row mt-4 pb-4 pt-2 mx-3" style={{ justifyContent: "center" }}>
						{store.misLugares.map((item, index) => {
							return (
								<MisLugares
									key={index}
									id={index}
									nombre={item.nombre}
									descripcion={item.descripcion}
									electricidad={item.electricidad}
									baños={item.baños}
									url={item.url}
									petFriendly={item.petFriendly}
								/>
							);
						})}
					</div>
				</div>
			</div>
			{sessionStorage.getItem("my_token") === null ? <Redirect to="/" /> : null}
		</div>
	);
};
