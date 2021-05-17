import React, { useState, useEffect, useContext } from "react";

import { Link, useParams, Redirect } from "react-router-dom";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

// CAMBIAR LA HOJA DE ESTILO ACA
import "../../styles/estrellas.scss";

export const Detalles = props => {
	const { store, actions } = useContext(Context);
	const [nombre, setNombre] = useState("");
	const [calificacion, setCalificacion] = useState("");
	const [auth, setAuth] = useState(false);

	const params = useParams();
	let index = params.theid;

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			nombre: email,
			calificacion: calificacion
		};
		actions.addVisita(body);
	};

	return (
		<div ClassName="container">
			<div
				className="card mb-3 border border-primary align-middle"
				style={{ maxwidth: "540px", margin: "1cm", padding: "0.5cm" }}>
				<div className="row border border-primary align-items-center">
					<div className="col-md-4 border border-warning">
						<Carousel fade>
							<Carousel.Item>
								<img
									className="d-block w-100 "
									src="https://photo620x400.mnstatic.com/1d3dc3ff4d96add7c0d4d49b1f74d8b7/playa-manzanillo.jpg"
									alt="First slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 "
									src="https://photo620x400.mnstatic.com/1d3dc3ff4d96add7c0d4d49b1f74d8b7/playa-manzanillo.jpg"
									alt="First slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>

							<Carousel.Item>
								<img
									className="d-block w-100"
									src="https://www.govisitcostarica.co.cr/images/photos/mob-under-wild-almond-tree-manzanillo-caribbean.jpg"
									alt="Second slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="https://photo620x400.mnstatic.com/1d3dc3ff4d96add7c0d4d49b1f74d8b7/playa-manzanillo.jpg"
									alt="Third slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
						</Carousel>
					</div>
					<div className="col-md-8 border border-success">
						<div className="col-md-8" key={index}>
							<div className="card-body">
								<h5 className="card-title">{store.lugares[index].nombre}</h5>
								<p className="card-text">
									<tr>
										<strong>¿Quiénes somos?</strong>
									</tr>
									{store.lugares[index].descripcion}
								</p>
								<div className="container">
									<div className="col">
										<div className="col">
											<strong>Contacto: </strong>
											{store.lugares[index].contacto}
										</div>
										<div className="col">
											<strong>E-mail: </strong>
											{store.lugares[index].email}
										</div>
										<div className="col">
											<strong>Teléfono: </strong>
											{store.lugares[index].telefono}
										</div>
										<div className="col">
											<strong>Ubicación: </strong>
											{store.lugares[index].ubicacion}
										</div>
										<div className="col-sm">
											<strong>Pet-Friendly: </strong>
											{store.lugares[index].petFriendly}
										</div>
										<div className="col-sm">
											<strong>Acceso Transporte: </strong>
											{store.lugares[index].accesoTransporte}
										</div>
										<div className="col-sm">
											<strong>Baños: </strong>
											{store.lugares[index].baños}
										</div>
										<div className="col-sm">
											<strong>Actividades extras: </strong>
											{store.lugares[index].actividades}
										</div>
										<div className="col-sm">
											<strong>Electricidad: </strong>
											{store.lugares[index].electricidad}
										</div>
										<div className="col-sm">
											<strong>Familiar: </strong>
											{store.lugares[index].ambiente}
										</div>{" "}
										<br />
									</div>
								</div>
								<form>
									<div className="form-check form-check-inline">
										<input
											onChange={e => setCalificacion(e.target.value)}
											className="form-check-input"
											type="radio"
											id="inlineRadio1"
											value="1"
										/>
										<label className="form-check-label" htmlFor="inlineRadio1">
											1<i className="rating__star far fa-star" />
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											onChange={e => setCalificacion(e.target.value)}
											className="form-check-input"
											type="radio"
											id="inlineRadio2"
											value="2"
										/>
										<label className="form-check-label" htmlFor="inlineRadio2">
											2<i className="rating__star far fa-star" />
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											onChange={e => setCalificacion(e.target.value)}
											className="form-check-input"
											type="radio"
											id="inlineRadio3"
											value="3"
										/>
										<label className="form-check-label" htmlFor="inlineRadio3">
											3<i className="rating__star far fa-star" />
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											onChange={e => setCalificacion(e.target.value)}
											className="form-check-input"
											type="radio"
											id="inlineRadio3"
											value="4"
										/>
										<label className="form-check-label" htmlFor="inlineRadio4">
											4<i className="rating__star far fa-star" />
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											onChange={e => setCalificacion(e.target.value)}
											className="form-check-input"
											type="radio"
											id="inlineRadio3"
											value="5"
										/>
										<label className="form-check-label" htmlFor="inlineRadio5">
											5<i className="rating__star far fa-star" />
										</label>
									</div>
									<button type="submit" className="btn btn-primary">
										Calificar
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mariposa">
				<Link to="/homeUsuario">
					<img
						src="https://i.pinimg.com/originals/94/ef/8c/94ef8cbd183d0cb15829512cbd5a1015.gif"
						style={{ width: "4cm", height: "3cm", marginLeft: "1cm", WebkitMaskPositionX: "2cm" }}
					/>
				</Link>
			</div>
			{auth ? <Redirect to="/historial" /> : null}
		</div>
	);
};

Detalles.propTypes = {
	id: PropTypes.string
};
