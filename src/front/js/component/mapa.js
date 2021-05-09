import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, DraggableMarker } from "react-leaflet";
import { Context } from "../store/appContext";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import "../../styles/demo.scss";

export const Mapa = () => {
	const { store, actions } = useContext(Context);
	const center = [9.7551, -82.8677];

	return (
		<div className="container">
			<div>
				<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
					<TileLayer
						attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[51.505, -0.09]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
};
