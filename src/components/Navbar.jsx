import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store } = useGlobalReducer();
	const favoritesCount = store.favorites.length;

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link className="text-decoration-none" to="/">
					<img className="rounded" style={{ width: "3rem" }} src="https://static.vecteezy.com/system/resources/previews/031/712/134/non_2x/jedi-symbol-star-wars-free-vector.jpg" alt="Home" />
					<span className="navbar-brand mb-0 h1 btn btn-light">Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/favorite">
						<button className="btn btn-dark">Favorites
							<strong className="badge bg-secondary ms-1">{favoritesCount}
							</strong>
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};