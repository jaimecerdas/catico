import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/principal.scss";
import { Usuario } from "../pages/usuario";
import { Carousel } from "react-bootstrap";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="col-sm-6">
				<Carousel fade>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://photo620x400.mnstatic.com/1d3dc3ff4d96add7c0d4d49b1f74d8b7/playa-manzanillo.jpg"
							alt="First slide"
							style={{ width: "731px", height: "270px" }}
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
							style={{ width: "731px", height: "270px" }}
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
							style={{ width: "731px", height: "270px" }}
						/>
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};
