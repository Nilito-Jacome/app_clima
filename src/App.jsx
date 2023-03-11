import "./App.css";
import CardWeather from "./components/CardWeather";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.longitude);
      console.log(position.coords.latitude);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=1c0066bcdbd042f0f5757e610fbc336d`
        )
        .then((resp) => setWeatherData(resp.data))
        .catch((error) => console.error(error));
    });
  }, []);

  const searchCity = () => {
    console.log(city);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1c0066bcdbd042f0f5757e610fbc336d`
      )
      .then((resp) => setWeatherData(resp.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <h1 className="Titulo">Weather Description App</h1>
      <h1 className="Contenedor_Busqueda">
        <i class='bx bx-search-alt-2'></i>
        <input
          placeholder="Buscar pais o ciudad"
          type="Text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="Buscar" onClick={searchCity}>
          Buscar
        </button>
      </h1>
      <div className="Contenedor">
        <CardWeather pasar={weatherData} />
      </div>
    </div>
  );
}

export default App;
