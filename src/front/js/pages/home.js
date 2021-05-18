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
			<div className="d-flex justify-content-center align-middle mt-5">
				<div className="col-md-6">
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
				<div className="row align-items-center justify-content-center">
					<div className="col-md-12">
						<div className="col-md-12">
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
			<div className="container-fluid three-cards-container">
				<section className="three-cards">
					<div className="container">
						<div className="row" style={{ marginBottom: "6rem", marginTop: "6rem" }}>
							<div className="text-center mt-5 col-lg-4 col-12">
								<div className="card-vertical-v2020 v2020 p-4">
									<div className="card-vertical-v2020--image mx-auto">
										<img src="https://blush.design/api/download?shareUri=pYmsQJ22H&w=800&h=800&fm=png" />
									</div>
									<div className="card-vertical-v2020--text mx-2">
										<h5>FÁCIL DE USAR</h5>
										<p>
											Ya no tendrás que buscar en multiples páginas. Desde tu perfil podrás
											encontrar muchas opciones de Camping.
										</p>
									</div>
								</div>
							</div>
							<div className="text-center mt-5 col-lg-4 col-12">
								<div className="card-vertical-v2020 v2020 p-4">
									<div className="card-vertical-v2020--image mx-auto">
										<img src="https://blush.design/api/download?shareUri=_sx6PRwkr1&w=800&h=800&fm=png" />
									</div>

									<div className="card-vertical-v2020--text mx-2">
										<h5>CONOCE COSTA RICA</h5>
										<p>
											¿Te haz preguntado si hay opciones de camping cerca de esa playa que tanto
											te gusta? Con CampingTico podrás estár mas tiempo cerca de ella ahorrando
											dinero.
										</p>
									</div>
								</div>
							</div>
							<div className="text-center mt-5 col-lg-4 col-12">
								<div className="card-vertical-v2020 v2020 p-4">
									<div className="card-vertical-v2020--image mx-auto">
										<img src="https://blush.design/api/download?shareUri=Ei62k8_IE&w=800&h=800&fm=png" />
									</div>
									<div className="card-vertical-v2020--text mx-2">
										<h5>APOYA EL COMERCIO LOCAL</h5>
										<p>
											Evitemos el cierre de empresas. CampingTico promociona empresas locales.
											Invita a más comercios a formar parte de esta aventura.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="d-flex justify-content-center align-middle mt-5">
				<div className="row align-items-center justify-content-center">
					<div>
						<h1>
							<img
								src="https://blush.design/api/download?shareUri=w2iEFrTSVGMxjnui&c=Hair_0%7Ed5bc69-0.1%7E020c1f-0.2%7E020c1f-0.3%7Eb4712e_Skin_0%7Eb69865-0.1%7Ed2b687-0.2%7E8f7240-0.3%7Eeedab7_Top_0%7E747b44-0.1%7E4a448c-0.2%7E747b44-0.3%7Eb36f2d&w=800&h=800&fm=png"
								className="img-fluid"
								alt="..."
							/>
						</h1>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center align-middle mt-5" id="acampar">
				<div className="col-md-12">
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
			<div className="d-flex justify-content-center align-middle mt-5">
				<div className="row align-items-center justify-content-center">
					<div>
						<h1>
							<img
								src="https://blush.design/api/download?shareUri=C8XlUH5BMOADtaeF&c=Bottom_0%7E89c5cc-0.1%7E2b44ff-0.2%7E393f82-0.3%7E2b44ff_Hair_0%7E181658-0.1%7Eb58143-0.2%7Eecdcbf-0.3%7Ed6b370_Skin_0%7Eeac7a8-0.1%7Eeac7a8-0.2%7Eeac7a8-0.3%7E915b3c_Top_0%7E393f82-0.1%7E89c5cc-0.2%7E43d26c-0.3%7E2b44ff&w=800&h=800&fm=png"
								className="img-fluid"
								alt="..."
							/>
						</h1>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center align-middle mt-5 mb-5">
				<div className="col-md-12">
					<div>
						<h1>¿Quienes somos?</h1>
						<p className="text-description padding-bottom-text" style={{ color: "rgb(106 181 123)" }}>
							Somos un grupo de entusiastas de la programación, quienes a través de una beca de CINDE
							(Coalición Costarricense de Iniciativas de Desarrollo)nos conocimos y desarrollamos este
							sitio web.
						</p>
						<p className="text-description padding-bottom-text" style={{ color: "rgb(106 181 123)" }}>
							{" "}
							Nuestros perfiles profesionales son muy diferentes, tenemos un abogado, una profesional de
							Ciencias del movimiento humano, un Especialista de Cumplimiento legal y un Mercadólogo
							quienes, por el interés compartido en la tecnología, unimos esfuerzos para llevar a cabo
							esta idea, la cual nació de la necesidad de promocionar el turismo en nuestro país, el cual
							se ha visto tan afectado debido a la crisis sanitaria que está viviendo el mundo.
						</p>
						<p className="text-description padding-bottom-text" style={{ color: "rgb(106 181 123)" }}>
							Nuestra intención es sumar esfuerzos para ayudar a esos pequeños emprendimientos enfocados
							en la actividad turística, específicamente los que ofrecen lugares para acampar. Queremos
							ser un canal por medio del cual, las personas que disfrutan de esta actividad puedan tener
							fácil acceso a un sitio donde se unifique la información de todos estos lugares que existen
							en nuestro país y que muchas veces pasan desapercibidos.
						</p>
						<p className="text-description padding-bottom-text" style={{ color: "rgb(106 181 123)" }}>
							Somos ticos que nos gusta el camping, por eso nombramos este sitio Camping Tico. Esperamos
							que lo disfruten.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
