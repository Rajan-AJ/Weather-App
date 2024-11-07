import {useState} from "react";
import axios from "axios";

function Weather (){

    const [ecity,setecity] = useState("")
    const [weather,setweather]=useState("")
    const [temp,settemp]=useState("")
    const [desc,setdesc]=useState("")

//   function handleCity(evt){
//     setecity(evt.target.value)}
console.log(ecity)
function getWeather(){
    let weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${ecity}&appid=a7bca5c04416b8a527101692897dab36`)
        weatherData.then(function(success){
            console.log (success.data)
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
        })
}  

    return(
        <div className="bg-black p-10 ">
      <div className="bg-[#4BDE81] p-10 border rounded-md border-none ">

        <h1 className="text-3xl font-medium">Weather Report</h1>
        <p>I can give you a weather report about your city!</p>

        <input type="text" placeholder="Enter your City Name" onChange={(evt)=>setecity(evt.target.value)}
        className="rounded-md p-1 border-black my-2"></input>
        <br></br>

        <button onClick={getWeather} className="bg-black text-white p-2 rounded-md">Get Report</button>

        <div className="mt-5">
          <h2><b>Weather: </b>{weather}</h2>
          <h2><b>Temperature: </b>{temp}</h2>
          <h2><b>Description: </b>{desc}</h2>
        </div>

      </div>
    </div>
    )
}

export default Weather