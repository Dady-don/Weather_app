import React from "react";
import loader from '../Images/WeatherIcons.gif'
// import ReactAnimatedWeather from 'react-animated-weather'


const CurrentLocation = ({ data }) => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednseday",
      "Thurstday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month},${year}`;
  };

 

  if (data) {
    //  console.log(data.name)
    return (
      <div className="weather"   >
      <div className="top">
        <div>
          <p className="city">{data.name}</p>
          <p className="city">{dateBuilder(new Date())}</p>
          <p className="weather_desc">{data.weather[0].description}</p>
        </div>
        <img src={require(`../Images/${data.weather[0].icon}.png`)} alt="weather" className="weather_icon" />

        {/* <ReactAnimatedWeather 
        icon={data.weather[0].icon}
        animate={true}
        className='weather_icon'
        /> */}

      </div>



      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}°C</p>
        <div className="details">
            <div className="parameter_row">
                <span className="label top">Details</span>
            </div>
            <div className="parameter_row">
                <span className="label">Feels like</span>
                <span className="value">{Math.round(data.main.feels_like)}°C</span>
            </div>
            <div className="parameter_row">
                <span className="label">Wind</span>
                <span className="value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter_row">
                <span className="label">Humidity</span>
                <span className="value">{data.main.humidity} %</span>
            </div>
            <div className="parameter_row">
                <span className="label">Pressure</span>
                <span className="value">{data.main.pressure} hPa</span>
            </div>
        </div>
      </div>
    </div>


    )
  }else {
    return (
      <>
      <div className="false_case" style={{height:'100vh', width:'100vw',display:"flex", flexDirection:'column', alignItems:'center', justifyContent:'center',color:'black'}}>
        <img src={loader} style={{ width: "20%", WebkitUserDrag: "none" }} />
        <h3 style={{ color: "black", fontSize: "22px", fontWeight: "600" }}>
          Detecting your location
        </h3>
        <h3 style={{ color: "black", marginTop: "10px",marginLeft:'20px',marginRight:'20px', fontWeight:'400' }}>
          Your current location wil be displayed on the App  & used for calculating Real time weather.
        </h3>
        </div>
      </>
    );
  }
};

export default CurrentLocation;
