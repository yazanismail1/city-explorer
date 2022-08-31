import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Output.css";
import "../styles/Weather.css";
import WeatherDay from "./WeatherDay"

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-cards">
      {this.props.weatherData.map(item => {
      return (
        <WeatherDay item={item}/>
      )
    })
  }
  <br></br>
  </div>
)}
}

export default Weather;
