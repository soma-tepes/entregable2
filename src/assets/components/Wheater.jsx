import React from 'react'
import "./slyles/Weather.css"
import a from './img/1.jpg'
import b from './img/2.jpg'
import c from './img/3.jpg'
import d from './img/4.webp'
import e from './img/5.jpg'
import f from './img/6.jpg'
import g from './img/7.jpg'
import h from './img/8.jpg'
import i from './img/3.jpg'



const Wheater = ({weather,temps,isCelsius,change}) => {

  const backgrounds = {
Clear: a, // Despejado
Clouds: b, // Nublado
Rain: c ,// Lluvia
Thunderstorm: d, // Tormenta eléctrica
Snow: e, // Nieve
Mist:  f,// Niebla
Smoke: g ,// Humo
Haze: h,// Neblina
Dust: i ,// Polvo
Sand:a, // Arena
Ash: a,// Ceniza
Squall: a, // Ráfaga de viento
Tornado: a, // Tornado
Drizzle:a , // Llovizna
    
  }

  const backgroundImage = backgrounds[weather?.weather[0].main] || backgrounds.Clear;


  return (
    <section className='weathercard' style={{ backgroundImage: `url(${backgroundImage})` , backgroundSize: 'cover'}}>

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