import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import CityForecast from "./components/CityForecast";
import weatherData from "./assets/data.json";

function CityList() {
  const cities = Object.keys(weatherData);

  return (
    <div>
      <h1>Weather in Your City</h1>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Link to={`/forecast/${city}`}>{city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/forecast/:cityName" element={<CityForecast />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
