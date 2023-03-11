import axios from "axios";
import { useState } from "react";

const CardWeather = ({ pasar }) => {
  const [celcius, setCelcius] = useState(true);

  return (
    <div className="Contenedor2">
      <div className="Icono">
        <span></span>
        <img src={`/${pasar.weather?.[0].icon}.svg`} />
      </div>
      <div className="Weather-Card2"></div>
      <div className="Weather-Card">
        <h3 className="Temperatura">
          <span></span>
          {celcius
            ? `${pasar.main?.temp}` + " " + "°K"
            : Math.round(pasar.main?.temp - 273.15) + " " + "°C"}
        </h3>
        <h3 className="Viento">
          <span>Wind: </span>
          {pasar.wind?.speed} m/s
        </h3>
        <h3 className="Nubes">
          <span>Clouds: </span>
          {pasar.clouds?.all}
        </h3>
        <h3 className="Presion">
          <span>Pressure: </span>
          {pasar.main?.pressure} hPa
        </h3>
        <h3 className="Humedad">
          <span>Humidity: </span>
          {pasar.main?.humidity} %
        </h3>
        <h3 className="Lugar">
          <span></span>
          {pasar.name}, {pasar.sys?.country}
        </h3>
        <h3 className="Clima">
          <span></span>
          {pasar.weather?.[0].description}
        </h3>
      </div>
      <div className="Transformacion">
        <button className="Cambiar_Unidad" onClick={() => setCelcius(!celcius)}>
          {" "}
          Grados Kelvin / Celcius
        </button>
      </div>
    </div>
  );
};

export default CardWeather;
