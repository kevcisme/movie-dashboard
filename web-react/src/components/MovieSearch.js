import React, { useState, useEffect } from "react";
import Form from "./Form";
import MovieInfo from "./MovieInfo";

const [movieData, setMovieData] = useState("");
  const [movieTitle, setMovieTitle] = useState("star wars");

export default function RecentReviews(){
  useEffect(() => {
    let movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=918ab4a1`;

    const makeApiCall = async () => {
      console.log("before fetch");
      const res = await fetch(movieUrl);
      const json = await res.json();
      console.log("movieData", json);
      setMovieData(json);
      console.log("after fetch");
    };
    makeApiCall();

  }, [movieTitle]);

  const handleSubmit = (title) => {
    console.log("App - handleSubmit - title", title);
    setMovieTitle(title);
  };
}
