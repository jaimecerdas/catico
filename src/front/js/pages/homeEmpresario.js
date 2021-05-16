import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Usuario } from "../pages/usuario";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/demo.scss";

export const HomeEmpresario = () => {
	const { store, actions } = useContext(Context);
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		actions.getMisLugares();
		//actions.getToken();
		console.log(store.misLugares);
	}, []);

	// Variables del Lugar

	const [nombre, setNombre] = useState("");
	const [petfriendly, setPetfriendly] = useState("");
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

		//Creacion de boday para fetch

		const body = {
			nombre: nombre,
			petfriendly: petfriendly,
			accesoTransporte: accesoTransporte,
			baños: baños,
			electricidad: electricidad,
			ambiente: ambiente,
			descripcion: descripcion,
			actividades: actividades,
			ubicacion: ubicacion,
			contacto: contacto,
			email: email,
			telefono: telefono
		};

		console.log(body);

		// fetch de Creacion de Lugar
		fetch("https://3001-pink-asp-ngdvnli9.ws-us04.gitpod.io/api/addLugar", {
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
			<div className="jumbotron" id="jumbotron">
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

			<div className="cards" id="tueslugares">
				<h1 className="display-4 my-4">Tus Lugares</h1>
				<div className="card">
					<div className="row mt-4 pb-4 pt-2" style={{ justifyContent: "center" }}>
						{store.lugares.map((item, index) => {
							return (
								<Usuario
									key={index}
									id={index}
									nombre={item.nombre}
									descripcion={item.descripcion}
									electricidad={item.electricidad}
									baños={item.baños}
									petfriendly={item.petfriendly}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
