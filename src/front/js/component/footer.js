import React, { Component } from "react";
import { Context } from "../store/appContext";
import footerImage from "/workspace/Proyecto_final_2021/src/front/img/footer.gif";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			<i className="fab fa-facebook-square" />
			<a href="http://www.facebook.com">/CampingTico </a>
			<i className="fab fa-instagram" /> <a href="http://www.instagram.com">/CampingTico </a>{" "}
		</p>
		<p>CampingTico © 2021</p>
	</footer>
);
