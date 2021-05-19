import React from "react";
import { Link } from "react-router-dom";
import "../../styles/principal.scss";
import { Boton } from "../component/boton";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					{" "}
					<img
						src="https://i.ibb.co/QMhJvTz/Camping-White-Logo.png"
						alt="Star Wars"
						width="110"
						height="100"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Boton />
			</div>
			<Link to="/homeUsuario">
				<button className="btn btn-light mx-2">HomeUsuario</button>
			</Link>
		</nav>
	);
};
