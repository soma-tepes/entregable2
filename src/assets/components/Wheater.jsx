import React from 'react'
import "./slyles/Weather.css"
const Wheater = ({weather,temps,isCelsius,change}) => {
  return (
    <section className='weathercard'>

         <h1 className='weather_title'>Weather App</h1>

        <h2 className='weather_place'>{weather?.name},{weather?.sys.country}</h2>
        <div className='weather_img'>
            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon weather" />
        </div>
         <h3 className='weather_temp'>{isCelsius ? temps?.celsius + "  ºC" : temps?.fahrenheit +"  ºF"} </h3>
       
        <ul className='weather_list'>
            <li className='weather_description'>{weather?.weather[0].main},{weather?.weather[0].description}</li>
            <li><span>Wind Speed:</span> {weather?.wind.speed} m/sec</li>
            <li><span>Clouds:</span>{weather?.clouds.all} %</li>
            <li><span>Pressure:</span>{weather?.main.pressure}hPA</li>
        </ul>
     
        <button className='weather_btn' onClick={change}>&deg;F / &deg;C</button>
    </section>
  )
}

export default Wheater