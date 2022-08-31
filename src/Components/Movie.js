import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Movie.css";

class Movie extends React.Component {
  render() {
          return (
            
              <Card className="card" style={{ width: "18rem"  }}>
                <Card.Img className="img" variant="top" src={this.props.item.poster_path} />
                <Card.Body>
                  <Card.Title>{this.props.item.title}</Card.Title>
                  <Card.Text>
                    <p><span>Overview:</span> {this.props.item.overview}</p>
                    <p><span>Release Date:</span>  {this.props.item.release_date}</p>
                    <p><span>Average Vote:</span>  {this.props.item.vote_average}</p>
                    <p><span>Total Votes:</span>  {this.props.item.vote_count}</p>
                    <p><span>Popularity:</span>  {this.props.item.popularity}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              
          );
  }
}

export default Movie;
