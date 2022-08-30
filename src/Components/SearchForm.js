import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SearchForm.css";
import Output from "./Output";
import axios from "axios";
import Weather from "./Weather";
import Movie from "./Movie"
import Row from 'react-bootstrap/Row';
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
      weatherData: [],
      movieData: [],
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
        weatherData: [],
      })
    }
    catch {
      this.setState({
        errFlag : true,
        mapFlag : false,
        
      })
    }
    const URL_HOST = `https://yazan-city-explorer.herokuapp.com/weatherData?lon=${fetchData.data[0].lon}&lat=${fetchData.data[0].lat}`;
    const weatherData = await axios.get(URL_HOST);

    try
    {
    this.setState({
      mapFlag : true,
      errFlag : false,
      cityName : fetchData.data[0].display_name,
      lon : fetchData.data[0].lon,
      lat : fetchData.data[0].lat,
      weatherData: weatherData.data,
    })
  }
  catch {
    this.setState({
      cityName : fetchData.data[0].display_name,
      lon : fetchData.data[0].lon,
      lat : fetchData.data[0].lat,
      weatherData: [],
      errFlag : true,
    })
  }
  const Movie_URL = `https://yazan-city-explorer.herokuapp.com/movie?cityName=${userInput}`;
    const movierData = await axios.get(Movie_URL);
    console.log(Movie_URL.data)
    try
    {
    this.setState({
      movieData: movierData.data,
    })
  }
  catch {
    this.setState({
      movieData: [],
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
         weatherData={this.state.weatherData}
          />
          <Row xs={1} md={2} className="g-6 row">
          <Movie 
            movieData={this.state.movieData}
          />
          </Row>
        </>
    );
  }
}

export default SearchForm;
