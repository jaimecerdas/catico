import React, { Component } from "react";
import { Context } from "../store/appContext";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			<i className="fab fa-facebook fa-2x fa-lg" style={{ margin: "0.5cm" }} />
			<a href="http://www.facebook.com">/CampingTico </a>
			<i className="fab fa-instagram fa-2x " style={{ margin: "0.5cm" }} />
			<a href="http://www.instagram.com">/CampingTico </a>{" "}
		</p>
		<p>CampingTico © 2021</p>
	</footer>
);
//hola//
