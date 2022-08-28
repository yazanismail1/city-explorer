import React from "react";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Output.css";

class Output extends React.Component {
  render() {
    return (
      <div className="output-data">
        <Card style={{ width: "700px", height: "520px"}}>
          <Card.Body>
            <Card.Text>
            <p>
          <span>City Name:</span> {this.props.cityName}
        </p>
        <p>
          <span>Longitude:</span> {this.props.lon}
        </p>
        <p>
          <span>Latitude:</span> {this.props.lat}
        </p>
        <hr/>
        {this.props.errFlag && <h4>Error : sorry something went wrong!</h4>}
            </Card.Text>
        {this.props.mapFlag && (
          <Card.Img
            src={`https://maps.locationiq.com/v3/staticmap?key=${
              this.props.token
            }&center=${this.props.lat},${
              this.props.lon
            }&zoom=${18}&size=610x300`}
            alt="map"
          />
        )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Output;
