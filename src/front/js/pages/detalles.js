import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel, Jumbotron, Button } from "react-bootstrap";

import { Context } from "../store/appContext";

// CAMBIAR LA HOJA DE ESTILO ACA
import "../../styles/estrellas.scss";

export const Detalles = () => {
	const { store, actions } = useContext(Context);

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
		// result.textContent = `${num}/5`; ME TIRA ERROR Y NO SÉ PARA QUÉ SIRVE, AL COMENTARLO ME FUNCIONÓ
	}

	executeRating(ratingStars, ratingResult);

	return (
		<div ClassName="container">
			<div className="card mb-3" style={{ maxwidth: "540px", margin: "1cm", padding: "0.5cm" }}>
				<div className="row">
					<div className="col-md-4">
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
				</div>
				<div className="col-md-8" style={{ width: "16cm", marginLeft: "13cm", marginTop: "-7cm" }}>
					<div className="card-body">
						<h5 className="card-title">NOMBRE</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer. This is a wider card with supporting text below as a
							natural lead-in to additional content. This content is a little bit longer. This is a wider
							card with supporting text below as a natural lead-in to additional content. This content is
							a little bit longer.
						</p>
						<div className="row align-items-center">
							<div className="col">Dueñ@:</div>
							<div className="col">E-mal:</div>
							<div className="col">celular:</div>
						</div>
						<p className="rating">
							<i className="rating__star far fa-star" />
							<i className="rating__star far fa-star" />
							<i className="rating__star far fa-star" />
							<i className="rating__star far fa-star" />
							<i className="rating__star far fa-star" />
						</p>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-3 col-sm-3">petFriendly:</div>
						<div className="col-3 col-sm-3">accesoTransporte:</div>
						<div className="col-3 col-sm-3">baños:</div>
						<div className="col-3 col-sm-3">actividades:</div>
					</div>
					<div className="row">
						<div className="col-3 col-sm-3">electricidad:</div>
						<div className="col-3 col-sm-3">familiar:</div>
						<div className="col-3 col-sm-3">descripcion:</div>
						<div className="col-3 col-sm-3">.col-6 .col-sm-4:</div>
					</div>
				</div>
				<div>
					<Link to="/homeUsuario">
						<img
							src="https://img1.picmix.com/output/stamp/normal/4/1/5/3/1743514_d26d4.gif"
							style={{ width: "4cm", height: "3cm", marginLeft: "1cm" }}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
