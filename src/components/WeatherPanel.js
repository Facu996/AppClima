import React, { useState } from "react";
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {
  

  let URLweather = "https://api.openweathermap.org/data/2.5/weather?appid=529b817e919c9bee26ca9fbd881bc21b&lang=es"

  let cityUrl = "&q="

  let URLforecast = "https://api.openweathermap.org/data/2.5/forecast?appid=529b817e919c9bee26ca9fbd881bc21b&lang=es"

  const [weather, setWeather] = useState([])
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [location, setLocation] = useState("")

  const getLocation = async (location) => {
    setLoading(true)
    setLocation(location)

    //weather

    URLweather = URLweather + cityUrl + location;

    await fetch(URLweather).then((response) =>{
      if (!response.ok) throw { response }
      return response.json()
    }).then((weatherData) => {
      setWeather(weatherData)
    }).catch((error) => {
      console.log(error)
      setLoading(false)
      setShow(false)
    })

    //Forecast

    URLforecast = URLforecast + cityUrl + location;
    await fetch(URLforecast).then((response) =>{
      if (!response.ok) throw { response }
      return response.json()
    }).then((forecastData) => {
      setForecast(forecastData)

      setLoading(false)
      setShow(true)

    }).catch((error) => {
      console.log(error)
      setLoading(false)
      setShow(false)
    }) 
  }

  return (
    <React.Fragment>
      <Form
        newLocation={getLocation}
      />
      <Card
        weather={weather}
        forecast={forecast}
        loadingData={loading}
        showData={show}
      />
    </React.Fragment>
  )
}

export default WeatherPanel