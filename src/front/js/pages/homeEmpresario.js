import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, DraggableMarker } from "react-leaflet";
import { Context } from "../store/appContext";
import { Mapa } from "../component/mapa";
import { Redirect } from "react-router-dom";

import "../../styles/demo.scss";

export const HomeEmpresario = () => {
	const { store, actions } = useContext(Context);
	const [auth, setAuth] = useState(false);

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
					<div className="card-body">
						<h5 className="card-title">Camping Montañas Azules de Heredia</h5>
						<p className="card-text">
							Descripcion del lugar: Contamos con zona de camping para 20 personas en la mejor zona de
							Heredia.{" "}
						</p>
						<ol>
							<li>Pet Friendly: Sí</li>
							<li>Transporte: Sí</li>
							<li>Baños: Sí</li>
							<li>Electricidad: No</li>
							<li>Ambiente: Adultos</li>
							<li>Actividades: Senderismo, Zona de BBQ.</li>
						</ol>
						<img
							className="card-img-top my-3"
							src="https://www.intermundial.es/blog/wp-content/uploads/2014/06/shutterstock_64920532.jpg"
							alt="Card image cap"
							width="300"
							height="700"
						/>
						<Link to="/Detalles">
							<button href="#" className="btn btn-primary">
								Detalles
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-primary my-5">Back home</button>
			</Link>
		</div>
	);
};
