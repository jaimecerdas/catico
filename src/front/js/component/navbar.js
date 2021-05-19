import React from "react";
import { Link } from "react-router-dom";
import "../../styles/principal.scss";
import { Boton } from "../component/boton";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<span className="navbar-brand mb-0 h1">
				{" "}
				<img src="https://i.ibb.co/QMhJvTz/Camping-White-Logo.png" alt="Star Wars" width="110" height="100" />
			</span>

			<div className="ml-auto">
				<Boton />
			</div>
		</nav>
	);
};
