import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import Loader from './assets/components/Loader'
import Wheater from './assets/components/Wheater'

const API_KEY = "f155df79a2db83ff58e1c3008e86cf26"

function App() {
  const [coords, setCoords] = useState()
  const [weather,setWeather] = useState()
  const [temps,setTemps] =useState()
  const [isCelsius,setCelsius] =useState(true)
  const success =(e)=>{
   console.log(e)
   const newCoord = {
     lat: e.coords.latitude,
     lon: e.coords.longitude

   }
   setCoords(newCoord)
  }

  useEffect(()=>
  {
    navigator.geolocation.getCurrentPosition(success)
  },[])

  const change =()=> setCelsius(!isCelsius)

  useEffect(()=>
  {
   if(coords){
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      axios.get(URL)
      .then(res =>{
        setTimeout(()=>{
        setWeather(res.data)
          const celsius = (res.data.main.temp -273.15).toFixed(2)
          const fahrenheit = (celsius *(9/5)+32).toFixed(2)
          const newTempes = {celsius,fahrenheit }
             setTemps(newTempes)   },1000)
      })
       .catch(err=> console.log(err))
         } 
          },[coords])
  
 

  return (
    <div className="App">
    {
      weather ? (
    <Wheater  weather ={weather} temps={temps} isCelsius={isCelsius} change={change}/>
    ):<Loader/>
    }
    </div>
  )
}

export default App
