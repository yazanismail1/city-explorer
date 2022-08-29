import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SearchForm.css";
import Output from "./Output";
import axios from "axios";
import Weather from "./Weather";
// require('dotenv').config();

const TOKEN = "pk.5b023d19d17a1fb480f7f5c4e20e6397";

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName : "",
      lon : "",
      lat : "",
      mapFlag : false,
      errFlag : false,
      weatherData1: "",
      weatherData2: "",
      weatherData3: "",
      weatherDescription1: "",
      weatherDescription2: "",
      weatherDescription3: "",
    }
  }

  getData = async (e) => {
    e.preventDefault();
    const userInput = e.target.cityName.value;
    const URL = `https://eu1.locationiq.com/v1/search?key=${TOKEN}&q=${userInput}&format=json`
    const fetchData = await axios.get(URL);
    try
    {
      this.setState({
        mapFlag : true,
        errFlag : false,
        cityName : fetchData.data[0].display_name,
        lon : fetchData.data[0].lon,
        lat : fetchData.data[0].lat,
        weatherData1: "",
        weatherData2: "",
        weatherData3: "",
        weatherDescription1: "",
        weatherDescription2: "",
        weatherDescription3: "",
      })
    }
    catch {
      this.setState({
        errFlag : true,
        mapFlag : false,
        
      })
    }
    const URL_HOST = `${process.env.REACT_APP_URL}${process.env.REACT_APP_PORT}/weather?name=${userInput}&lon=${fetchData.data[0].lon}&lat=${fetchData.data[0].lat}`;
    const weatherData = await axios.get(URL_HOST);
    try
    {
    this.setState({
      mapFlag : true,
      errFlag : false,
      cityName : fetchData.data[0].display_name,
      lon : fetchData.data[0].lon,
      lat : fetchData.data[0].lat,
      weatherData1: weatherData.data[0].date,
      weatherData2: weatherData.data[1].date,
      weatherData3: weatherData.data[2].date,
      weatherDescription1: weatherData.data[0].description,
      weatherDescription2: weatherData.data[1].description,
      weatherDescription3: weatherData.data[2].description,
    })
  }
  catch {
    this.setState({
      cityName : fetchData.data[0].display_name,
      lon : fetchData.data[0].lon,
      lat : fetchData.data[0].lat,
      weatherData1: "",
      weatherData2: "",
      weatherData3: "",
      weatherDescription1: "",
      weatherDescription2: "",
      weatherDescription3: "",
    })
  }
  }


  render() {
    return (
      <>
      <Form onSubmit={this.getData}>
      <div className="search-form">
        <div>
        <FloatingLabel
        controlId="floatingInput"
        label="City name"
        className="mb-3"
      >
        <Form.Control name="cityName" type="text" placeholder="city name" />
      </FloatingLabel>
      </div>
      <div>
          <Button className="submit" variant="primary btn-lg" type="submit">
            Explore !
          </Button>
          </div>
      </div>
        </Form>
        <Output 
        cityName={this.state.cityName}
        lon={this.state.lon}
        lat={this.state.lat}
        token={TOKEN}
        mapFlag={this.state.mapFlag}
        errFlag={this.state.errFlag}
         />
         <Weather 
         weatherData1={this.state.weatherData1}
         weatherData2={this.state.weatherData2}
         weatherData3={this.state.weatherData3}
         weatherDescription1={this.state.weatherDescription1}
         weatherDescription2={this.state.weatherDescription2}
         weatherDescription3={this.state.weatherDescription3} 
          />

        </>
    );
  }
}

export default SearchForm;
