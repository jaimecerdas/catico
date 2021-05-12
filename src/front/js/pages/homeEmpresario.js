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
	const [transporte, setTransporte] = useState("");
	const [banos, setBanos] = useState("");
	const [electricidad, setElectricidad] = useState("");
	const [ambiente, setAmbiente] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [actividades, setActividades] = useState("");
	const [ubicacion, setUbicacion] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		//Creacion de boday para fetch

		const body = {
			nombre: nombre,
			petfriendly: petfriendly,
			transporte: transporte,
			banos: banos,
			electricidad: electricidad,
			ambiente: ambiente,
			descripcion: descripcion,
			actividades: actividades,
			ubicacion: ubicacion
		};

		console.log(body);

		// fetch de Creacion de Lugar
		fetch("https://TEST.com", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				//console.log(data);
				setAuth(true);
			});
		//.catch(err => console.log(err));
	};

	return (
		<div className="container">
			<br />
			<div className="jumbotron">
				<h1 className="display-4">¡Hola, (Nombre)!</h1>
				<p className="lead">Gracias por utilizar CampingTico.</p>
				<hr className="my-4" />
				<div>
					<p>
						<a className="btn btn-primary btn-lg mx-2" href="#crearlugar" role="button">
							Agregar un lugar
						</a>
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

			<div className="crearLugar" id="crearlugar">
				<h1 className="display-4 my-4">Agregar un lugar</h1>

				<form id="crearlugarform">
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea2">¿Cómo se llama tu lugar?</label>
						<input
							onChange={e => setNombre(e.target.value)}
							className="form-control"
							id="exampleFormControlTextarea2"
							placeholder="Mi lugar"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect1">¿Tu lugar es Pet Friendly?</label>
						<select
							className="form-control"
							id="exampleFormControlSelect1"
							onChange={e => setPetfriendly(e.target.value)}>
							<option>Sí</option>
							<option>No</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect2">¿Tu lugar tiene acceso por Transporte?</label>
						<select
							className="form-control"
							id="exampleFormControlSelect1"
							onChange={e => setTransporte(e.target.value)}>
							<option>Sí</option>
							<option>No</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect3">¿Tu lugar tiene baños?</label>
						<select
							className="form-control"
							id="exampleFormControlSelect1"
							onChange={e => setBanos(e.target.value)}>
							<option>Sí</option>
							<option>No</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect4">¿Tu lugar tiene electricidad?</label>
						<select
							className="form-control"
							id="exampleFormControlSelect1"
							onChange={e => setElectricidad(e.target.value)}>
							<option>Sí</option>
							<option>No</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect2">¿Qué tipo de ambiente es?</label>
						<select
							className="form-control"
							id="exampleFormControlSelect2"
							onChange={e => setAmbiente(e.target.value)}>
							<option>Familiar</option>
							<option>Adultos</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea1">Describe tu lugar:</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							onChange={e => setDescripcion(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea3">¿Qué actividades tiene tu lugar?</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							onChange={e => setActividades(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlFile1">¿Dónde queda tu lugar?</label>
						<br />
						<Mapa />
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlFile1">Selecciona imagenes:</label>

						<input type="file" className="form-control-file" id="exampleFormControlFile1" />
					</div>
					<button type="submit" className="btn btn-primary mb-2">
						Crear nuevo lugar
					</button>
				</form>
				{auth ? <Redirect to="/login" /> : null}
			</div>

			<div>
				<h1 className="display-4 my-4">Mapa</h1>
			</div>
			<Link to="/">
				<button className="btn btn-primary my-5">Back home</button>
			</Link>
		</div>
	);
};
