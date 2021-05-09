import React, { Component } from "react";
import { Context } from "../store/appContext";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center" style={{ clear: "both" }}>
		<p>
			<i className="fab fa-facebook-square" />
			<a href="http://www.facebook.com">/CampingTico </a>
			<i className="fab fa-instagram" /> <a href="http://www.instagram.com">/CampingTico </a>{" "}
		</p>
		<p>CampingTico © 2021</p>
	</footer>
);
//hola//
