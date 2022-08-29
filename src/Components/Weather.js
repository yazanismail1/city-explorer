import React from "react";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Output.css";


class Weather extends React.Component {
    render() {
      return (
        <div className="output-data">
          <Card style={{ width: "700px", height: "fit-content"}}>
            <Card.Body>
              <Card.Text>
              
              <p>
             <span>Date: </span>{this.props.weatherData1}
          </p>
          <p>
          <span>Description: </span>{this.props.weatherDescription1}
          </p>
          <p>
          <span>Date: </span>{this.props.weatherData2}
          </p>
          <p>
          <span>Description: </span>{this.props.weatherDescription2}
          </p>
          <p>
          <span>Date: </span>{this.props.weatherData3}
          </p>
          <p>
          <span>Description: </span>{this.props.weatherDescription3}
          </p>
          
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
  
  export default Weather;
