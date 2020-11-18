import React from "react";

function MovieInfo(props) {
  return (
    <div className="movie-data">
      {/* <h2>Year: {props.movie.Year}</h2> */}
      <img src={props.movie.Poster} alt="movie" />
      <h4>{props.movie.Title} </h4>
      {/* <h3>Genre: {props.movie.Genre} </h3>
      <h4>Plot: {props.movie.Plot}</h4> */}
    </div>
  );
}

export default MovieInfo;
