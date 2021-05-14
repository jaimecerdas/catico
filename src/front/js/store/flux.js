const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			lugar: [
				{
					nombre: "Playita",
					petfriendly: "si",
					electricidad: "si",
					descripcion:
						"En este lugar podrá encontrar un lugar tranquilo para disfrutar con su familia y mascotas",
					banos: "si",
					contacto: "Pamela Contreras",
					email: "pame@gmail.com",
					telefono: "123456",
					ubicacion: "Siquirres, 100 metros norte de la plaza de deportes",
					accesotransporte: "si",
					actvidades: "caminata por senderos",
					familiar: "si"
				}
			]
			// 	message: null,
			// 	demo: [
			// 		{
			// 			title: "FIRST",
			// 			background: "white",
			// 			initial: "white"
			// 		},
			// // 		{
			// // 			title: "SECOND",
			// 			background: "white",
			// 			initial: "white"
			// 		}
			// 	]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
