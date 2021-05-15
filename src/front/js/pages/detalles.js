import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

// CAMBIAR LA HOJA DE ESTILO ACA
import "../../styles/estrellas.scss";

export const Detalles = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let index = params.theid;

	useEffect(() => {
		actions.getLugares();
		//actions.getToken();
		//console.log(store.people);
	}, []);

	console.log(index);

	const ratingStars = [...document.getElementsByClassName("rating__star")];
	const ratingResult = document.querySelector(".rating__result");

	printRatingResult(ratingResult);

	function executeRating(stars, result) {
		const starClassActive = "rating__star fas fa-star";
		const starClassUnactive = "rating__star far fa-star";
		const starsLength = stars.length;
		let i;
		stars.map(star => {
			star.onclick = () => {
				i = stars.indexOf(star);

				if (star.className.indexOf(starClassUnactive) !== -1) {
					printRatingResult(result, i + 1);
					for (i; i >= 0; --i) stars[i].className = starClassActive;
				} else {
					printRatingResult(result, i);
					for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
				}
			};
		});
	}

	function printRatingResult(result, num = 0) {
		// result.textContent = [];
	}

	executeRating(ratingStars, ratingResult);
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
											<strong>Contacto:</strong>
											{store.lugares[index].contacto}
										</div>
										<div className="col">
											<strong>E-mail: </strong>
											{store.lugares[index].email}
										</div>
										<div className="col">
											<strong>Teléfono:</strong>
											{store.lugares[index].telefono}
										</div>
										<div className="col">
											<strong>Ubicación:</strong>
											{store.lugares[index].ubicacion}
										</div>
										<div className="col-sm">
											<strong>Pet-Friendly:</strong>
											{store.lugares[index].petfriendly}
										</div>
										<div className="col-sm">
											<strong>Acceso Transporte:</strong>
											{store.lugares[index].accesotransporte}
										</div>
										<div className="col-sm">
											<strong>Baños:</strong>
											{store.lugares[index].baños}
										</div>
										<div className="col-sm">
											<strong>Actividades extras:</strong>
											{store.lugares[index].actividades}
										</div>
										<div className="col-sm">
											<strong>Electricidad:</strong>
											{store.lugares[index].electricidad}
										</div>
										<div className="col-sm">
											<strong>Familiar:</strong>
											{store.lugares[index].ambiente}
										</div>{" "}
										<br />
									</div>
								</div>

								<div className="rating">
									{/* onClick=
				{() => actions.addFavorites(element.name, "nombre")}
				type="button"> */}
									<i className="rating__star far fa-star" />
									<i className="rating__star far fa-star" />
									<i className="rating__star far fa-star" />
									<i className="rating__star far fa-star" />
									<i className="rating__star far fa-star" />
								</div>
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
		</div>
	);
};

Detalles.propTypes = {
	id: PropTypes.string
};
