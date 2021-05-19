const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			lugar: [],
			my_token: [],
			lugares: [],
			visitas: [],
			misLugares: [],
			imageUrl: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getMisVisitas: () => {
				let my_tokenUnique = sessionStorage.getItem("my_token");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer " + my_tokenUnique);
				myHeaders.append("Content-Type", "application/json");
				fetch("https://3001-tomato-woodpecker-kss14jqn.ws-us04.gitpod.io/api/getVisitas", {
					method: "GET",
					headers: myHeaders
				})
					.then(res => res.json())
					.then(async data => {
						let arrayResults = data;
						console.log(arrayResults);
						setStore({ visitas: arrayResults });
					});
			},
			getToken: () => {
				let my_tokenUnique = sessionStorage.getItem("my_token");
				const store = getStore();
				setStore({ my_token: my_tokenUnique });
			},
			logout: () => {
				sessionStorage.removeItem("my_token");
				window.location.reload(false);
			},
			getMisLugares: () => {
				let my_tokenUnique = sessionStorage.getItem("my_token");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer " + my_tokenUnique);
				myHeaders.append("Content-Type", "application/json");
				fetch("https://3001-tomato-woodpecker-kss14jqn.ws-us04.gitpod.io/api/getMisLugares", {
					method: "GET",
					headers: myHeaders
				})
					.then(res => res.json())
					.then(async data => {
						let arrayResults = data;
						console.log(arrayResults);
						setStore({ misLugares: arrayResults });
					});
			},
			addVisita: body => {
				let my_tokenUnique = sessionStorage.getItem("my_token");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer " + my_tokenUnique);

				fetch("https://3001-tomato-woodpecker-kss14jqn.ws-us04.gitpod.io/api/addVisitas", {
					method: "POST",
					body: JSON.stringify(body),
					headers: myHeaders
				})
					.then(res => res.json())
					.then(data => {
						index = params.theid;
						console.log(data);
						let message = data.msg;
						console.log(message);
						//setAuth(true);
					})
					.catch(err => console.log(err));
			},
			getLugares: () => {
				fetch("https://3001-tomato-woodpecker-kss14jqn.ws-us04.gitpod.io/api/getLugares")
					.then(res => res.json())
					.then(async data => {
						let arrayResults = data;
						console.log(arrayResults);
						setStore({ lugares: arrayResults });
					});
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
