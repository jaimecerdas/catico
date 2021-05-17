import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { Boton } from "../component/boton";

/*
<Link to="/homeEmpresario">
					<button className="btn btn-light mx-2">HomeEmpresario</button>
				</Link>
				<Link to="/homeUsuario">
					<button className="btn btn-light mx-2">HomeUsuario</button>
				</Link>
				<Link to="/register">
					<button className="btn btn-light mx-2">Register</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-light mx-2">Login</button>
				</Link>
				<Link to="/crearLugar">
					<button className="btn btn-light mx-2">CrearLugar</button>
				</Link>
				<Link to="/recuperacion">
					<button className="btn btn-light mx-2">Recuperacion</button>
				</Link>
				<Link to="/historial">
					<button className="btn btn-light mx-2">Historial</button>
				</Link>
				<Link to="/detalles">
					<button className="btn btn-light mx-2">Detalles</button>
				</Link>
				<Link to="/usuario">
					<button className="btn btn-primary">usuario</button>
				</Link>
*/

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3" id="navbar">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					{" "}
					<img src="https://i.ibb.co/B337kMf/logo.png" alt="Star Wars" width="65" height="75" />
				</span>
			</Link>
			<div className="ml-auto">
				<Boton />
			</div>
		</nav>
	);
};
