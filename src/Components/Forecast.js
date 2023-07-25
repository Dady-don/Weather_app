import React from "react";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItem,
  AccordionItemButton,
} from "react-accessible-accordion";

const Forecast = ({ data }) => {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const day = new Date().getDay(); //returns the current no of  day in the week
  const forecastDays = WEEK_DAYS.slice(day, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, day)
  ); //removes the current day forecast and shows the next 7 days.

  // console.log(forecastDays)

  if (data ) {
    return (
      <>
        <div className="main">
          
          <p className="title_bottom">Daily Forecast</p>
          <hr style={{width:'100%'}} />
          <Accordion allowZeroExpanded>
          {/**allows all the accordian to be closed */}

           {data.list.splice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="dailyItem">
                    <img
                      src={require(`../Images/${item.weather[0].icon}.png`)}
                      alt="weather"
                      className="forecast_img"
                    />
                    <label className="day">{forecastDays[index]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-grid-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                  <div className="daily-grid-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-grid-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-grid-item">
                    <label>Wind Speed</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-grid-item">
                    <label>Sea Level</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                  <div className="daily-grid-item">
                    <label>Feels like</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
      </>
    );
  }
};

export default Forecast;
