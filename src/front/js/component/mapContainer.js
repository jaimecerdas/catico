import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

export class MapContainer extends Component {
	render() {
		return (
			<Map
				google={props.google}
				zoom={14}
				style={mapStyles}
				initialCenter={{
					lat: -1.2884,
					lng: 36.8233
				}}
			/>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyAzlnwgSwZvbgwXZlYQdLkh_NJMNiyttPU"
})(MapContainer);
