import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Usuario } from "../pages/usuario";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="justify-content-start">
				<div className="card border-primary mb-3" style={{ maxWidth: "25rem", marginLeft: "2cm" }}>
					<div className="card-header">Header</div>
					<img
						src="https://i.ibb.co/s5g3wN6/Summer-Camp-amico.png"
						alt="Summer-Camp-amico"
						border="0"
						style={{ width: "3cm" }}
					/>
					<div className="card-body text-primary">
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the card content.
						</p>
					</div>
				</div>

				<div className="card border-primary mb-3" style={{ maxWidth: "25rem" }}>
					<div className="card-header">Header</div>
					<img
						src="https://i.ibb.co/HHNz6gR/Mobile-Marketing-pana.png"
						alt="Mobile-Marketing-pana"
						border="0"
						style={{ width: "3cm" }}
					/>
					<div className="card-body text-primary">
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the card content.
						</p>
					</div>
				</div>
				<div className="card border-primary mb-3" style={{ maxWidth: "25rem", marginLeft: "2cm" }}>
					<div className="card-header">Header</div>
					<img
						src="https://i.ibb.co/tpjf30G/Collaboration-cuate.png"
						alt="Collaboration-cuate"
						border="0"
						style={{ width: "3cm" }}
					/>
					<div className="card-body text-primary">
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the card content.
						</p>
					</div>
				</div>
			</div>

			<div
				className="row justify-content-end"
				style={{ marginTop: "-22cm", marginLeft: "70%", maxWidth: "10rem" }}>
				<div>
					<Usuario
						text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
						style={{ maxWidth: "10rem" }}
					/>
				</div>
			</div>
		</div>
	);
};
