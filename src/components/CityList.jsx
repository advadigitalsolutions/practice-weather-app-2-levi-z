import React from "react";
import { Link } from "react-router";

export default function CityList() {

    const cities = ["NewYork", "London", "Tokyo", "SaintLouis"];

    return (
        <div>
            <h1>Weather in Your City!</h1>
            <ul>
                {
                    cities.map(city => (
                        <li key={city}>
                            <Link to={`/forecast/${city}`}>{city}</Link>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
}