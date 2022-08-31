import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Output.css";
import "../styles/Weather.css";

class WeatherDay extends React.Component {
  render() {
    return (
        <div className="output-data">
          <Card style={{ width: "700px", height: "fit-content" }}>
            <Card.Body>
              <Card.Text>
                <p>
                  <span>Date: </span>{this.props.item.datetime}
                </p>
                <p>
                  <span>Description: </span>low of {this.props.item.low_temp}, high of {this.props.item.max_temp} with {this.props.item.description} 
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    }
  };

export default WeatherDay;
