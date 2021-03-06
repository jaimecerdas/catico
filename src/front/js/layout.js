import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { Historial } from "./pages/historial";
import { Detalles } from "./pages/detalles";
import { Register } from "./pages/register";
import { Recuperacion } from "./pages/recuperacion";
import { HomeEmpresario } from "./pages/homeEmpresario";
import { HomeUsuario } from "./pages/homeUsuario";
import { Usuario } from "./pages/usuario";
import { CrearLugar } from "./pages/crearLugar";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Boton } from "./component/boton";
import { Footer } from "./component/footer";

import { homeEmpresario } from "./pages/homeEmpresario";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/crearLugar">
							<CrearLugar />
						</Route>
						<Route exact path="/homeEmpresario">
							<HomeEmpresario />
						</Route>
						<Route exact path="/homeUsuario">
							<HomeUsuario />
						</Route>
						<Route exact path="/usuario">
							<Usuario />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>

						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/historial">
							<Historial />
						</Route>
						<Route exact path="/detalles/:theid">
							<Detalles />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/recuperacion">
							<Recuperacion />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
