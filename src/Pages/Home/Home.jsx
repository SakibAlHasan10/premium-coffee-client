import { useState } from "react";
import {useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
const Home = () => {
    const loadedCoffee = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffee)
    console.log(loadedCoffee)
    return (
        <div className="max-w-6xl mx-auto px-8">
            <h2>Coffee: {loadedCoffee.length}</h2>
            <div className="grid md:grid-cols-2 gap-5 mb-8">

            {
                (coffees.length > 0) && coffees?.map(coffee => <Coffee 
                    key={coffee._id}
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></Coffee>)
            }
            </div>
        </div>
    );
};

export default Home;