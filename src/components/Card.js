import React from 'react'
import Spinner from './Spinner'

const Card = ({ weather, forecast, loadingData, showData }) => {

  var today = new Date()
  var day = today.getDate()
  var month = today.getMonth() + 1
  var year = today.getFullYear()
  var date = day + '/' + month + '/' + year 


  var URL = ""
  var iconURL = ""


  var iconURL3 = ""
  var iconURL6 = ""
  var iconURL9 = ""

  var forecastDate3 = ""
  var forecastDate6 = ""
  var forecastDate9 = ""


  if (loadingData) {
    return <Spinner />
  }

  if (showData) {
    URL = "https://openweathermap.org/img/w/"
    iconURL = URL + weather.weather[0].icon + ".png"
    
    iconURL3 = URL + forecast.list[1].weather[0].icon + ".png"
    iconURL6 = URL + forecast.list[2].weather[0].icon + ".png"
    iconURL9 = URL + forecast.list[3].weather[0].icon + ".png"

  
    forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0 ,4) +  '/  '  + forecast.list[1].dt_txt.substring(11, 13)
    forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) +  '/  '  + forecast.list[2].dt_txt.substring(11, 13)
    forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) +  '/  '  + forecast.list[3].dt_txt.substring(11, 13)
  }

  return (
    <div className='mt-5'>

      {
        showData === true ? (
          <div className='container'>
            <div className='card mb-3 mx-auto text-light'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <h3 className='card-title'>{weather.name}</h3>
                  <p className='card-date'>{date}</p>
                  <h1 className='card-temp'>{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                  <p className='card-desc'><img src={iconURL} alt='icon'/>{weather.weather[0].description} </p>
                  <img src='https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='bg img-fluid rounded-start' alt='...'/>
                </div>
                <div className='col-md-8'>
                  <div className='card-body text-start mt-2'>
                    <h5 className='card-text'>Temperatura maxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                    <h5 className='card-text'>Temperatura minima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                    <h5 className='card-text'>Sensacion termica: {(weather.main.feels_like - 273.15).toFixed(1)}ºC</h5>
                    <h5 className='card-text'>Humedad: {weather.main.humidity}%</h5>
                    <h5 className='card-text'>Velocidad del viento: {weather.wind.speed}m/s</h5>
                  </div>
                  <hr />
                  
                  <div className='row mt-4'>
                    <div className='col'>
                      <p>{forecastDate3}h</p>
                      <p className='description'><img src={iconURL3} alt='icon' />{forecast.list[1].weather[0].description}</p>
                      <p className='temp'>{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                    </div>
                    <div className='col'>
                      <p>{forecastDate6}h</p>
                      <p className='description'><img src={iconURL6} alt='icon' />{forecast.list[2].weather[0].description}</p>
                      <p className='temp'>{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                    </div>
                    <div className='col'>
                      <p>{forecastDate9}h</p>
                      <p className='description'><img src={iconURL9} alt='icon' />{forecast.list[3].weather[0].description}</p>
                      <p className='temp'>{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        </div>
        
            ):(<h2 className='text-light'>Sin datos </h2>)
            
      }

    </div>
  )
}

export default Card