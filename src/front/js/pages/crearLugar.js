import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Mapa } from "../component/mapa";
import { Redirect } from "react-router-dom";

import "../../styles/demo.scss";

export const CrearLugar = () => {
	const { store, actions } = useContext(Context);
	const [auth, setAuth] = useState(false);

	// Variables del Lugar

	const [nombre, setNombre] = useState(null);
	const [petFriendly, setPetFriendly] = useState(null);
	const [accesoTransporte, setAccesoTransporte] = useState(null);
	const [baños, setBaños] = useState(null);
	const [electricidad, setElectricidad] = useState(null);
	const [ambiente, setAmbiente] = useState(null);
	const [descripcion, setDescripcion] = useState(null);
	const [actividades, setActividades] = useState(null);
	const [ubicacion, setUbicacion] = useState(null);
	const [contacto, setContacto] = useState(null);
	const [email, setEmail] = useState(null);
	const [telefono, setTelefono] = useState(null);
	const [fileLocation, setFileLocation] = useState(null);
	const [url, setUrl] = useState(null);
	let link = "";

	// API EXTERNO PARA CARGAR IMAGENES

	const loadImages = e => {
		var formdata = new FormData();
		formdata.append("image", exampleFormControlFile1.files[0], fileLocation);

		var requestOptions = {
			method: "POST",
			body: formdata,
			redirect: "follow"
		};

		// API EXTERNO www.imgbb.com

		fetch("https://api.imgbb.com/1/upload?expiration=600&key=395488d1f5e90435f61b5884f29e02f7", requestOptions)
			.then(response => response.json())
			.then(result => {
				//console.log(result.data.url);
				link = result.data.url;
				console.log(link);
			})
			.catch(error => console.log("error", error));
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("Image uploaded");
			}, 1500);
		});
	};

	// fetch para crear lugar

	const crearLugar = e => {
		//Creacion de boday para fetch
		if (nombre === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: nombre");
		} else if (ubicacion === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: ubicacion");
		} else if (accesoTransporte === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: transporte");
		} else if (baños === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: baños");
		} else if (actividades === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: actividades");
		} else if (electricidad === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: electricidad");
		} else if (ambiente === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: ambiente");
		} else if (descripcion === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: descripcion");
		} else if (contacto === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: contacto");
		} else if (email === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: email");
		} else if (telefono === null) {
			window.alert("Por favor revisar la información. No ingresó el campo: telefono");
		}
		const body = {
			nombre: nombre,
			ubicacion: ubicacion,
			petFriendly: petFriendly,
			accesoTransporte: accesoTransporte,
			baños: baños,
			actividades: actividades,
			electricidad: electricidad,
			ambiente: ambiente,
			descripcion: descripcion,
			contacto: contacto,
			email: email,
			telefono: telefono,
			url: link
		};

		console.log(body);

		let my_tokenUnique = sessionStorage.getItem("my_token");
		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + my_tokenUnique);
		myHeaders.append("Content-Type", "application/json");

		fetch(process.env.REACT_APP_BACKEND_URL + "/api/addLugar", {
			method: "POST",
			body: JSON.stringify(body),
			headers: myHeaders
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				let message = data.msg;
				console.log(message);
				if (message === "El Lugar se creo con éxito") {
					// añadir token a session
					setAuth(true);
				} else {
					window.alert("El Lugar no se creó:" + message);
				}
			})
			.catch(err => console.log(err));

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("Fetch sent");
			}, 500);
		});
	};

	async function handlingAllPromises() {
		var first = await loadImages();
		var second = await crearLugar();
	}

	const handleSubmit = e => {
		e.preventDefault();
		handlingAllPromises();
	};

	return (
		<div className="container">
			<br />

			<div
				className="jumbotron"
				style={{
					backgroundColor: "transparent"
				}}>
				<h1 className="display-4">¡Hola!</h1>
				<p className="lead">Desde esta página puedes agregar un nuevo lugar de camping.</p>
				<hr className="my-4" />
				<div>
					<p>
						<Link to="/homeEmpresario">
							<button className="btn btn-light mx-2">Regresar</button>
						</Link>
					</p>
				</div>
			</div>
			<div className="crearLugar" id="crearlugar">
				<h3 className="display-5 my-5">Ingresa la información del lugar</h3>

				<form id="crearlugarform" className="mb-3" onSubmit={handleSubmit}>
					<div className="form-group mb-3">
						<label htmlFor="exampleFormControlTextarea2">¿Cómo se llama tu lugar?</label>
						<input
							onChange={e => setNombre(e.target.value)}
							className="form-control mb-3"
							id="exampleFormControlTextarea2"
							placeholder="Mi lugar"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea2">Nombre del contacto</label>
						<input
							onChange={e => setContacto(e.target.value)}
							className="form-control"
							id="exampleFormControlTextarea2"
							placeholder="Nombre del Contacto"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea2">Teléfono</label>
						<input
							onChange={e => setTelefono(e.target.value)}
							className="form-control"
							id="exampleFormControlTextarea2"
							placeholder="Teléfono de contacto"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea2">Correo electrónico</label>
						<input
							onChange={e => setEmail(e.target.value)}
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Correo electrónico"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea2">Ubicación</label>
						<input
							onChange={e => setUbicacion(e.target.value)}
							className="form-control"
							id="exampleFormControlTextarea2"
							placeholder="Ubicación"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect20">¿Tu lugar es Pet Friendly?</label>
						<select
							className="form-control"
							id="exampleFormControlSelect10"
							onChange={e => setPetFriendly(e.target.value)}>
							<option value="">Seleccione una opción</option>
							<option value="Sí">Sí</option>
							<option value="No">No</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect2">¿Tu lugar tiene acceso por Transporte?</label>
						<select
							className="form-control"
							id="exampleFormControlSelect1"
							onChange={e => setAccesoTransporte(e.target.value)}>
							<option value="">Seleccione una opción</option>
							<option value="Sí">Sí</option>
							<option value="No">No</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect3">¿Tu lugar tiene baños?</label>
						<select
							className="form-control"
							id="exampleFormControlSelect1"
							onChange={e => setBaños(e.target.value)}>
							<option value="">Seleccione una opción</option>
							<option value="Sí">Sí</option>
							<option value="No">No</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect4">¿Tu lugar tiene electricidad?</label>
						<select
							className="form-control"
							id="exampleFormControlSelect1"
							onChange={e => setElectricidad(e.target.value)}>
							<option value="">Seleccione una opción</option>
							<option value="Sí">Sí</option>
							<option value="No">No</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect2">¿Qué tipo de ambiente es?</label>
						<select
							className="form-control"
							id="exampleFormControlSelect2"
							onChange={e => setAmbiente(e.target.value)}>
							<option value="">Seleccione una opción</option>
							<option value="Familiar">Familiar</option>
							<option value="Adultos">Adultos</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea1">Describe tu lugar:</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							onChange={e => setDescripcion(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea3">¿Qué actividades tiene tu lugar?</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							onChange={e => setActividades(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlFile1">Agrega una imagen</label>
						<input
							type="file"
							className="form-control-file"
							id="exampleFormControlFile1"
							onChange={e => setFileLocation(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-light mb-2">
						Crear nuevo lugar
					</button>
				</form>
				{auth ? <Redirect to="/homeEmpresario" /> : null}
			</div>
		</div>
	);
};
