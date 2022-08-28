import React from 'react';
import "../styles/Output.css";


class Output extends React.Component {

    render() {
        return (
            <div className='output-data'>
                <p><span>City Name:</span> {this.props.cityName}</p>
                <p><span>Longitude:</span> {this.props.lon}</p>
                <p><span>Latitude:</span> {this.props.lat}</p>
                {this.props.errFlag && <h4>Error : sorry something went wrong!</h4>}
                {this.props.mapFlag && <img src={`https://maps.locationiq.com/v3/staticmap?key=${this.props.token}&center=${this.props.lat},${this.props.lon}&zoom=${18}&size=610x400`} alt="map"/>}
            </div>
        )
    } 
}

export default Output;
