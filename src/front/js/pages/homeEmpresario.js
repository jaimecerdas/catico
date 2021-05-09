import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Context } from "../store/appContext";
import "leaflet/dist/leaflet.css";

import "../../styles/demo.scss";

export const HomeEmpresario = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<br />
			<div className="jumbotron">
				<h1 className="display-4">¡Hola, (Nombre)!</h1>
				<p className="lead">Gracias por utilizar CampingTico.</p>
				<hr className="my-4" />
				<p>Ingresa un nuevo lugar:</p>
				<p className="lead">
					<a className="btn btn-primary btn-lg mx-2" href="#tueslugares" role="button">
						Ver tus lugares
					</a>
					<a className="btn btn-primary btn-lg mx-2" href="#crearlugar" role="button">
						Agregar un lugar
					</a>
				</p>
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
							<a href="#" className="btn btn-primary">
								Detalles
							</a>
						</Link>
					</div>
				</div>

				<div className="crearLugar" id="crearlugar">
					<h1 className="display-4 my-4">Agregar un lugar</h1>

					<form id="crearlugarform">
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea2">¿Cómo se llama tu lugar?</label>
							<input className="form-control" id="exampleFormControlTextarea2" placeholder="Mi lugar" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect1">¿Tu lugar es Pet Friendly?</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Sí</option>
								<option>No</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect2">¿Tu lugar tiene acceso por Transporte?</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Sí</option>
								<option>No</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect3">¿Tu lugar tiene baños?</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Sí</option>
								<option>No</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect4">¿Tu lugar tiene electricidad?</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Sí</option>
								<option>No</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect2">¿Qué tipo de ambiente es?</label>
							<select className="form-control" id="exampleFormControlSelect2">
								<option>Familiar</option>
								<option>Adultos</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea1">Describe tu lugar:</label>
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea3">¿Qué actividades tiene tu lugar?</label>
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlFile1">¿Dónde queda tu lugar?</label>
							<br />
							<img src="https://i.ibb.co/sj9RQ0B/mapa.png" alt="mapa" width="878" height="314" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlFile1">Selecciona imagenes:</label>

							<input type="file" className="form-control-file" id="exampleFormControlFile1" />
						</div>
						<button type="submit" className="btn btn-primary mb-2">
							Crear nuevo lugar
						</button>
					</form>
				</div>
			</div>
			<div>
				<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
					<TileLayer
						attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[51.505, -0.09]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
			<Link to="/">
				<button className="btn btn-primary my-5">Back home</button>
			</Link>
		</div>
	);
};
