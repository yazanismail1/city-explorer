import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SearchForm.css";
import Output from "./Output";
import axios from "axios";
import Weather from "./Weather";
import Movies from "./Movies"
import Row from 'react-bootstrap/Row';


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
      movieData: []
    }
  }

  getData = async (e) => {
    e.preventDefault();
    const userInput = e.target.cityName.value;
    const URL = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY}&q=${userInput}&format=json`
    try
    {
      const fetchData = await axios.get(URL);
      this.getWeatherData(fetchData.data[0]);
      this.getMovieData(userInput);
      this.setState({
        mapFlag : true,
        errFlag : false,
        cityName : fetchData.data[0].display_name,
        lon : fetchData.data[0].lon,
        lat : fetchData.data[0].lat
      })}
    catch {
      this.setState({
        cityName : "",
        lon : "",
        lat : "",
        errFlag : true,
        mapFlag : false,
        weatherData: [],
        movieData: []
      })}
    
  }

  getWeatherData = async (data) => {
    const URL_HOST = `${process.env.REACT_APP_SERVER_LINK}weatherData?lon=${data.lon}&lat=${data.lat}`;
    try
    {
    const weatherData = await axios.get(URL_HOST);
    this.setState({
      cityName : data.display_name,
      lon : data.lon,
      lat : data.lat,
      weatherData: weatherData.data,
    })}
    catch {
    this.setState({
      weatherData: []
      })}
  }

  getMovieData = async (data) => {
    const Movie_URL = `${process.env.REACT_APP_SERVER_LINK}movie?cityName=${data}`;
    try
    {
      const movierData = await axios.get(Movie_URL);
      this.setState({
        movieData: movierData.data,
      })
    }
    catch {
      this.setState({
        movieData: []
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
        mapFlag={this.state.mapFlag}
        errFlag={this.state.errFlag}
         />
         <Weather 
         weatherData={this.state.weatherData}
          />
          <Row xs={1} md={2} className="g-6 row">
          <Movies 
            movieData={this.state.movieData}
          />
          </Row>
        </>
    );
  }
}

export default SearchForm;
