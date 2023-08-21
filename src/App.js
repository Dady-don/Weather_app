import "./App.css";
import CurrentLocation from "./Components/CurrentLocation";
import { useState, useEffect } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./Api";
import Search from "./Components/Search";
import Forecast from "./Components/Forecast";
import { bgToComponent } from "./Components/Images";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [bg, setBg] = useState("scattered clouds");

  useEffect(() => {
    if (navigator.geolocation) {
      //If user allows location service .

      navigator.geolocation.getCurrentPosition(async (position) => {
        //predefined function in react, gives the current location.

        const { latitude, longitude } = position.coords; //
        // use the latitude and longitude to get the user's location weather.
        const weatherFetch = await fetch(
          `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const forecastFetch = await fetch(
          `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
        );

        //The Promise.all method takes an array of promises and returns a single promise.
        await Promise.all([weatherFetch, forecastFetch]) //order is important here, as the order in which we send the promise, we'll get back the return/response in the same order.
          .then(async (response) => {
            const weatherResponse = await response[0].json(); //json is used to map the response. Here we will get two responses, first from the currentWeatherFetch and second from ForecastFetch.
            const forecastResponse = await response[1].json();

            setWeather(weatherResponse);
            setForecast(forecastResponse);
            setBg(weatherResponse.weather[0].description);
          })
          .catch((err) => {
            alert(
              "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
            );
          });
      });
    } else {
      alert("Geolocation not available");
    }
  }, []);

  const handleSearchChange = async (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const currentForecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    await Promise.all([currentWeatherFetch, currentForecastFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const currentForecastResponse = await response[1].json();

        setWeather(currentWeatherResponse);
        setForecast(currentForecastResponse);
        setBg(currentWeatherResponse.weather[0].description);
      })
      .catch((err) => console.log(err));
  };
  // console.log(weather);
  // console.log(forecast);
  console.log(bg);

  // const imageUrl=`./Images/${bg}.jpg`;
  // console.log(imageUrl)
  // style={{background:`url(${imageUrl})`}}

  return (
    <>
      <div
        className="app"
        style={{
          backgroundImage:
            `url('${bgToComponent[bg]}')` ||
            `url('../Images/scattered clouds.jpg')`,
        }}>
        <Search onSearchChange={handleSearchChange} />
        <CurrentLocation data={weather} />
        <Forecast data={forecast} />
      </div>
    </>
  );
}

export default App;
