import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/principal.scss";
import { Usuario } from "../pages/usuario";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
export const Home = () => {
	const { store, actions } = useContext(Context);
	//border-primary
	return (
		<div className="container">
			<div className="border border-warning d-flex justify-content-center align-middle mt-5">
				<div className="col-md-6 border border-warning ">
					<Carousel fade>
						<Carousel.Item>
							<img
								className="d-block w-100 "
								src="https://photo620x400.mnstatic.com/1d3dc3ff4d96add7c0d4d49b1f74d8b7/playa-manzanillo.jpg"
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://www.govisitcostarica.co.cr/images/photos/mob-under-wild-almond-tree-manzanillo-caribbean.jpg"
								alt="Second slide"
							/>
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://photo620x400.mnstatic.com/1d3dc3ff4d96add7c0d4d49b1f74d8b7/playa-manzanillo.jpg"
								alt="Third slide"
							/>
							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="row border border-primary align-items-center justify-content-center">
					<div className="col-md-12 border border-warning ">
						<div className="col-md-12 border">
							<h1>
								CampingTico
								<i
									className="fas fa-leaf"
									style={({ color: "rgb(106 181 123)" }, { color: "rgb(106 181 123)" })}
								/>
							</h1>
							<p>Bienvenido a CampingTico! Tu lugar de Camping de Costa Rica.</p>
							<p>
								<Button
									className="btn-light"
									variant="primary"
									href="#acampar"
									id="boton"
									style={{ backgroundColor: "rgb(106 181 123)" }}>
									Más información
								</Button>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="border border-warning d-flex justify-content-center align-middle mt-5">
				<div className="row border border-primary align-items-center justify-content-center">
					<div>
						<h1>
							<i className="fas fa-leaf" style={{ color: "rgb(106 181 123)" }} />
						</h1>
					</div>
				</div>
			</div>
			<div className="border border-warning d-flex justify-content-center align-middle mt-5" id="acampar">
				<div className="col-md-12 border border-warning ">
					<div>
						<h1>¿Porqué acampar?</h1>
						<p className="text-description padding-bottom-text" style={{ color: "rgb(106 181 123)" }}>
							Ir a acampar es una de las actividades más divertidas que podés hacer. Salir y disfrutar,
							conocer, explorar y vivir para conectarte con la naturaleza y tener aventuras nuevas. Tantos
							lugares increíbles que visitar es lo que nos ha motivado a ofrecer a todas aquellas personas
							amantes del camping, un punto de encuentro con todos esos lugares mágicos que están ahí,
							esperando a ser visitados.
						</p>
						<p className="text-description padding-bottom-text" style={{ color: "rgb(106 181 123)" }}>
							Este es un esfuerzo para que nos salgamos de la rutina y disfrutemos del camino, del momento
							y del lugar que hacen que la vida se llene de experiencias e historias que compartir.
							Acampar al aire libre es salud mental, el espíritu se relaja y se experimenta la libertad
							que el contacto con la naturaleza nos ofrece.
						</p>
						<p className="text-description padding-bottom-text" style={{ color: "rgb(106 181 123)" }}>
							Ir de camping para disfrutar los paisajes de las montañas, volcanes, playas, valles y
							llanuras es lo que nos mueve. Nuestro principal objetivo es ser una guía para mostrar esos
							espacios abiertos maravillosos a todos esos viajeros y viajeras que están ahí, esperando por
							su nueva aventura.
						</p>
					</div>
				</div>
			</div>
			<div className="border border-warning d-flex justify-content-center align-middle mt-5">
				<div className="row border border-primary align-items-center justify-content-center">
					<div>
						<h1>
							<i className="fas fa-leaf" style={{ color: "rgb(106 181 123)" }} />
						</h1>
					</div>
				</div>
			</div>
			<div className="border border-warning d-flex justify-content-center align-middle mt-5 mb-5">
				<div className="col-md-12 border border-warning ">
					<div>
						<h1>¿Quienes somos?</h1>
						<p className="text-description padding-bottom-text" style={{ color: "rgb(106 181 123)" }}>
							Ir a acampar es una de las actividades más divertidas que podés hacer. Salir y disfrutar,
							conocer, explorar y vivir para conectarte con la naturaleza y tener aventuras nuevas. Tantos
							lugares increíbles que visitar es lo que nos ha motivado a ofrecer a todas aquellas personas
							amantes del camping, un punto de encuentro con todos esos lugares mágicos que están ahí,
							esperando a ser visitados.
						</p>
						<p className="text-description padding-bottom-text" style={{ color: "rgb(106 181 123)" }}>
							Este es un esfuerzo para que nos salgamos de la rutina y disfrutemos del camino, del momento
							y del lugar que hacen que la vida se llene de experiencias e historias que compartir.
							Acampar al aire libre es salud mental, el espíritu se relaja y se experimenta la libertad
							que el contacto con la naturaleza nos ofrece.
						</p>
						<p className="text-description padding-bottom-text" style={{ color: "rgb(106 181 123)" }}>
							Ir de camping para disfrutar los paisajes de las montañas, volcanes, playas, valles y
							llanuras es lo que nos mueve. Nuestro principal objetivo es ser una guía para mostrar esos
							espacios abiertos maravillosos a todos esos viajeros y viajeras que están ahí, esperando por
							su nueva aventura.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
