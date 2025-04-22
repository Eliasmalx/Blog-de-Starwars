import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card";

export const Favorite = () => {
  const { store } = useGlobalReducer();

    
  return (
    <div className="container">
      <h1>Favorites</h1>

      <div className="row">
        {store.favorites.length > 0 ? (
          store.favorites.map((item, index) => (
            <div className="col-4" key={index}>
              <Card name={item.name} link={item.link} />
            </div>
          ))
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>

      <Link to="/">
        <button className="btn btn-light mt-4">Back home</button>
      </Link>
    </div>
  );
};
