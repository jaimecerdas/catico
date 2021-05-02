import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

// CAMBIAR LA HOJA DE ESTILO ACA
import "../../styles/demo.scss";

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
		// result.textContent = `${num}/5`;
	}

	executeRating(ratingStars, ratingResult);

	return (
		<div
			className="jumbotron"
			style={{
				backgroundImage: `url("https://primercanjedeuda.org/wp-content/uploads/2016/05/Nature-Costa-Rica-bk.jpg")`,
				backgroundSize: "cover"
			}}>
			<h1 className="display-4" style={{ color: "white" }}>
				Nombre del Camping
			</h1>{" "}
			<hr className="my-4" />
			<div className="card mb-3" style={{ width: "25cm", height: "8.5cm" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src="https://media-cdn.tripadvisor.com/media/photo-p/13/ab/fa/93/nature-costa-rica-tours.jpg"
							style={{ width: "8cm", height: "8cm" }}
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="" />
							<p className="card-text">
								Este es un pequeño emprendimiento que busca brindar un espacio seguro para que pueda
								venir con su familia y pasar un momento bonito.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container" style={{ height: "2cm", padding: "0.5cm", color: "yellow" }}>
				<div className="row">
					<div className="col-sm-2">
						<strong>Petfriendly: </strong>
						{/* {store.people[params.theid].name} */}
					</div>
					<div className="col-sm-2">
						<strong>Bathroom: </strong>
					</div>
					<div className="col-sm-2">
						<strong>Food: </strong>
					</div>
					<div className="col-sm-2">
						<strong>Parking: </strong>
					</div>
					<div className="col-sm-2">
						<strong>Actvidades recreativas: </strong>
					</div>
					<div className="col-sm-2">
						<strong>Acceso buses:</strong>
					</div>
				</div>
			</div>
			<div className="rating">
				<i className="rating__star far fa-star" />
				<i className="rating__star far fa-star" />
				<i className="rating__star far fa-star" />
				<i className="rating__star far fa-star" />
				<i className="rating__star far fa-star" />
			</div>
			<div>
				<a className="btn btn-primary" href="/" role="button">
					Back home
				</a>
			</div>
		</div>
	);
};
