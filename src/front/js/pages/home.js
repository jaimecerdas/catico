import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/demo.scss";
import { Usuario } from "../pages/usuario";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		// <div className="container">
		// 	<div className="justify-content-start">
		// 		<div className="card border-primary mb-3" style={{ maxWidth: "25rem", marginLeft: "2cm" }}>
		// 			<div className="card-header">Header</div>
		// 			<img
		// 				src="https://i.ibb.co/s5g3wN6/Summer-Camp-amico.png"
		// 				alt="Summer-Camp-amico"
		// 				border="0"
		// 				style={{ width: "3cm" }}
		// 			/>
		// 			<div className="card-body text-primary">
		// 				<p className="card-text">
		// 					Some quick example text to build on the card title and make up the bulk of the card content.
		// 				</p>
		// 			</div>
		// 		</div>

		// 		<div className="card border-primary mb-3" style={{ maxWidth: "25rem" }}>
		// 			<div className="card-header">Header</div>
		// 			<img
		// 				src="https://i.ibb.co/HHNz6gR/Mobile-Marketing-pana.png"
		// 				alt="Mobile-Marketing-pana"
		// 				border="0"
		// 				style={{ width: "3cm" }}
		// 			/>
		// 			<div className="card-body text-primary">
		// 				<p className="card-text">
		// 					Some quick example text to build on the card title and make up the bulk of the card content.
		// 				</p>
		// 			</div>
		// 		</div>
		// 		<div className="card border-primary mb-3" style={{ maxWidth: "25rem", marginLeft: "2cm" }}>
		// 			<div className="card-header">Header</div>
		// 			<img
		// 				src="https://i.ibb.co/tpjf30G/Collaboration-cuate.png"
		// 				alt="Collaboration-cuate"
		// 				border="0"
		// 				style={{ width: "3cm" }}
		// 			/>
		// 			<div className="card-body text-primary">
		// 				<p className="card-text">
		// 					Some quick example text to build on the card title and make up the bulk of the card content.
		// 				</p>
		// 			</div>
		// 		</div>
		// 	</div>

		// 	<div
		// 		className="row justify-content-end"
		// 		style={{ marginTop: "-22cm", marginLeft: "70%", maxWidth: "10rem" }}>
		// 		<div>
		// 			<Usuario
		// 				text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
		// 				style={{ maxWidth: "10rem" }}
		// 			/>
		// 		</div>
		// 	</div>
		// </div>
		<div className="container">
			<div
				className="right-content"
				style={{
					width: "12cm",
					marginLeft: "2cm",
					marginTop: "2cm",
					backgroundImage: `url("https://www.govisitcostarica.co.cr/images/photos/mob-arenal-volcano-smoking.jpg")`
				}}>
				<div className="main-content">
					<h1 className="main-tittle" style={{ color: "brown" }}>
						Camping Tico
					</h1>
					<p className="text-description padding-bottom-text">
						Lorem ipsum dolor sit amet, consectetur lobortis adipiscing elit. Mauris vitae nunc sit amet
						libero congue malesuada. Morbi suscipit congue.
					</p>
					<button type="button" className="btn btn-outline-success">
						Success
					</button>
				</div>
			</div>
			<div className="left-content">
				<div className="img-background-container" />
				<img
					className="img-camaleon"
					src="https://kanakyterraria.com/wp-content/uploads/2016/09/PSedit-120116-CM-6971-21-e1474634959167.jpg"
					style={{ marginLeft: "20cm", marginBottom: "-8cm" }}
				/>
			</div>
		</div>
	);
};
