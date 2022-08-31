import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Movie.css";
import Movie from "./Movie"

class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.movieData.map((item) => {
          return (
            <Movie item={item}/>
          );
        })}
      </>
    );
  }
}

export default Movies;
