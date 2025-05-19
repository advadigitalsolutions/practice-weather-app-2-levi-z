import React, { useRef, useState } from "react";
import { useParams } from "react-router";
import weatherData from "../assets/data.json"
import { Link } from "react-router";

export default function CityForecast() {

    const { cityName } = useParams();
    const detailsRef = useRef(null);

    // Find matching city name regardless of capitalization
    const normalizedCityName = cityName.toLowerCase();
    const matchedEntry = Object.entries(weatherData).find(
      ([key]) => key.toLowerCase() === normalizedCityName
    );

    if (!matchedEntry) {
      return (
        <div>
          <h2>{cityName}</h2>
          <p>Weather Information is unavailable.</p>
          <Link to="/">Find Weather in another City!</Link>
        </div>
      );
    }

    const [actualCityName, weatherInfo] = matchedEntry;

    
    /*useEffect(() => {
        fetch("/data.json")
        .then((response) => response.json())
        .then((data) => getWeather(data)         
        );
    }, []);*/    

    const scrollToDetails = () => {
        detailsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <h1>Weather Information</h1>
            <h2>{actualCityName}</h2>
            <p>{weatherInfo.summary}</p>
            <button onClick={scrollToDetails}>Weather Details</button>
            <div ref={detailsRef} className= "details">
            <p>{weatherInfo.details}</p>
            <Link to="/">Find Weather in another City!</Link>
            </div>
        </div>

    );
}

