import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Bienvenidos a Camping Tico</h1>
			<div className="container">
				<div className="row">
					<div className="col-sm-2">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Facil de usar</h5>
							</div>
							<img
								src="https://i.pinimg.com/originals/51/50/f8/5150f8acc5b9831cda2272f568bbbd97.jpg"
								style={{ width: "50%", height: "auto" }}
							/>
						</div>
					</div>
					<div className="col-sm-2">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Conoce Costa Rica</h5>
							</div>
							<img
								src="https://i.pinimg.com/originals/31/f0/93/31f093c7c96f3b20323b849560375dfb.jpg"
								style={{ width: "50%", height: "auto" }}
							/>
						</div>
					</div>
					<div className="col-sm-2">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Apoyas al comercio local</h5>
							</div>
							<img
								src="https://fundacioncompartir.org/sites/default/files/styles/slick_600x320/public/el-comercio-todo-lo-que-necesita-al-alcance-de-una-clic.jpg?itok=ZlTfOSL6"
								style={{ width: "50%", height: "auto" }}
							/>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Apoyas al comercio local</h5>
							</div>
							<img
								src="https://i.pinimg.com/originals/31/f0/93/31f093c7c96f3b20323b849560375dfb.jpg"
								style={{ width: "50%", height: "auto" }}
							/>
							<a href="/homeUsuario" className="btn btn-primary">
								¡Visítanos!
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
		</div>
	);
};
