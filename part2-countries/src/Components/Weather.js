
import React, { useState, useEffect } from "react"
import axios from "axios"

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState("KO")
  const apiKey = "55ebdb20208d05898526f7d8d4c52b42"

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}&units=m`)
      .then(response => {
        setWeather(response.data)
      })
    }, [])

  console.log("Weather", weather);

  if (weather === 'KO')
  {
    return <div>Cargando datos ... </div>
  } 
  else if (weather.success === false)
  {
    return <div>Datos no disponibles ({weather.error.type})</div>
  } 
  else
  {
    return (
      <div>
        <h3>Weather in {capital}</h3>
        <p>
        <strong>Temperatura: </strong> {weather.current.temperature} celsius / {weather.current.weather_descriptions}
        </p>
        <img
            src={weather.current.weather_icons}
            alt={weather.current.weather_descriptions + ' icon'}
            width='50' height='50'
        />
        <p>
          <strong>Viento: </strong> {weather.current.wind_speed} mph - dirección {weather.current.wind_dir}
        </p>
      </div>
    )
  }
}

export default Weather;