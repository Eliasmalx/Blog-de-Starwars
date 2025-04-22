import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Vehicle = () => {
    const [vehicle, setVehicles] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        try {
            const response = await fetch(`https://swapi.tech/api/vehicles/${id}`);
            const data = await response.json();
            setVehicles(data.result.properties);
        } catch (error) {
            console.error("Error fetching vehicle:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="d-flex ">
                    <div>
                    <h1>{vehicle.name}</h1>
                    <p>Model : {vehicle.model}</p>
                    <p>Cost in Credits : {vehicle.cost_in_credits}</p>
                    <p>Length : {vehicle.length}</p>
                    <p>Passengers : {vehicle.passengers}</p>
                    <p>Cargo Capacity : {vehicle.cargo_capacity}</p>
                    <p>Vehicle Class : {vehicle.vehicle_class}</p>
                    
                    </div>

                    <div>
                    <img className="mx-5 rounded" style={{ width: "30rem" }} src="https://wallpapers.com/images/hd/x-wing-fighter-2200-x-1079-wallpaper-ci4a66boayatnku4.jpg" alt="Vehicles" />
                    </div>

                    <div>
                    <Link to="/vehicles">
                        <button className="btn btn-light my-1 ">Back</button>
                    </Link>
                    </div>

                </div>
            )}
        </div>
    );
};
