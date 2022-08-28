import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SearchForm.css";
import Output from "./Output";
import axios from "axios";

const TOKEN = "pk.5b023d19d17a1fb480f7f5c4e20e6397";

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName : "",
      lon : "",
      lat : "",
      mapFlag : false,
      errFlag : false
    }
  }

  getData = async (e) => {
    e.preventDefault();
    const userInput = e.target.cityName.value;
    console.log(userInput);
    const URL = `https://eu1.locationiq.com/v1/search?key=${TOKEN}&q=${userInput}&format=json`

    try
    {
    const fetchData = await axios.get(URL);
    this.setState({
      cityName : fetchData.data[0].display_name,
      lon : fetchData.data[0].lon,
      lat : fetchData.data[0].lat,
      mapFlag : true,
      errFlag : false
    })
    }
    catch {
      this.setState({
        errFlag : true,
        mapFlag : false,
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
        </>
    );
  }
}

export default SearchForm;
