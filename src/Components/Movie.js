import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Movie.css";

class Movie extends React.Component {
  render() {
    return (
      <>
        {this.props.movieData.map((item) => {
          return (
            
              <Card className="card" style={{ width: "18rem"  }}>
                <Card.Img className="img" variant="top" src={item.poster_path} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <p><span>Overview:</span> {item.overview}</p>
                    <p><span>Release Date:</span>  {item.release_date}</p>
                    <p><span>Average Vote:</span>  {item.vote_average}</p>
                    <p><span>Total Votes:</span>  {item.vote_count}</p>
                    <p><span>Popularity:</span>  {item.popularity}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              
          );
        })}
      </>
    );
  }
}

export default Movie;
