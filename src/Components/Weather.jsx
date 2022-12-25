import React, {useState} from 'react'

const Weather = () => {
  
  const apiKey = 'a5ccbd68de38d5a7bcc55e5d630b60e5';
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const [showCelsius, setShowCelsius] = useState(false);
  const [celsius, setCelsius] = useState();

  const getWeather = event => {
    if(event.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data);
          setCity("");
        }
      )
    }
  }

  const showWeather = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data);
          setCity("");
        }
      )
  }

  const convertToCelsius = fahrenheit => {
    const cel = (fahrenheit - 32) * 5/9;
    console.log(cel);
    setShowCelsius(!showCelsius);
    setCelsius(Math.round(cel));
  }
  

  return (
    <div className='weather_container'>
      <h1>Weather</h1>
      <section>
        <input type="text" 
        className='input' 
        placeholder='enter city' 
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyDown={getWeather}/>
        <button className="weatherBtn" onClick={showWeather}>Check</button>
      </section>
        
        {typeof weatherData.main === "undefined" ? (
          <div>
            <p>Enter city name</p>
          </div>
        ): (
          <div className='weatherData'>
            <p>{weatherData.name}</p>
            <p>{showCelsius ? celsius : Math.round(weatherData.main.temp)} <span onClick={()=> convertToCelsius(Math.round(weatherData.main.temp))}>{showCelsius ? "(cel)" : "(fah)"}</span></p>
            <p>{weatherData.weather[0].main}</p>
          </div>
        )}
    </div>
  )
}

export default Weather