import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import  useGlobalReducer  from "../hooks/useGlobalReducer";  

export const People = () => {
        const [people, setPeople] = useState([]);
        const [loading, setLoading] = useState(true);
        const { store, dispatch } = useGlobalReducer();
    
        useEffect(() => {
            fetchPeople();
        }, []);
        
        const fetchPeople = async () => {
            try {
                const response = await fetch("https://swapi.tech/api/people/");
                const data = await response.json();
                setPeople(data.results);
            } catch (error) {
                console.error("Error fetching people:", error);
            } finally {
                setLoading(false);
            }
        };
        
        return (
            <div className="container">
                <h1>Star Wars Characters</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="d-flex flex-wrap justify-content-around">
                       
                        {people.map((person, index) => (
                            <Card key={index} name={person.name} dispatch={dispatch} link={`/person/${person.uid}`} />
                        ))}

                    </div>
                    
                )}
            </div>
        );
    
    
   
    
};
