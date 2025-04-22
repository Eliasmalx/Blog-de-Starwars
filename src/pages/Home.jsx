import { Link } from "react-router-dom";

export const Home = () => {

	

	return (
		<div className="d-flex justify-content-around text-center">
			
			<Link className="text-decoration-none" to="/people">
			<div className="card m-1" style={{ width: "20rem" }}>
			<h1>Characters</h1>
			<img className="p-1 rounded"  src="https://wallpapers.com/images/featured/fondos-de-star-wars-vdgqv4b95q9ur6ak.jpg" alt="" />
			</div>
			</Link>

			<Link className="text-decoration-none" to="/planets">
			<div className="card m-1" style={{ width: "20rem" }}>
			<h1>Planets</h1>
			<img  className="p-1 rounded" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg" alt="" />
			</div>
			</Link>

			<Link className="text-decoration-none" to="/vehicles">
			<div className="card m-1" style={{ width: "20rem" }}>
			<h1>Vehicles</h1>
			<img className="p-1 rounded" src="https://wallpapers.com/images/hd/x-wing-fighter-2200-x-1079-wallpaper-ci4a66boayatnku4.jpg" alt="" />
			</div>
			</Link>

		</div>
	);
}; 