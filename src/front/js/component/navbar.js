import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Demo</button>
				</Link>
				<Link to="/homeEmpresario">
					<button className="btn btn-primary">HomeEmpresario</button>
				</Link>
				<Link to="/homeUsuario">
					<button className="btn btn-primary">HomeUsuario</button>
				</Link>
				<Link to="/register">
					<button className="btn btn-primary">Register</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-primary">Login</button>
				</Link>
				<Link to="/recuperacion">
					<button className="btn btn-primary">Recuperacion</button>
				</Link>
				<Link to="/historial">
					<button className="btn btn-primary">Historial</button>
				</Link>
				<Link to="/detalles">
					<button className="btn btn-primary">Detalles</button>
				</Link>
				<Link to="/usuario">
					<button className="btn btn-primary">usuario</button>
				</Link>
			</div>
		</nav>
	);
};
