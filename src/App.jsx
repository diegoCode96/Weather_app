
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "a20740ccc5c5e2793ce25c739675d3b2";

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(URL)
    .then(({data}) => setWeatherInfo(data))
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className='min-h-screen font-["Lato"]'>
      <Weather weatherInfo={weatherInfo}/>
    </main>
  )
}

export default App
