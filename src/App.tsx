import React, {useEffect, useState} from "react";
import "./App.css";
import styled from "styled-components";

const BodyStyled = styled.div`
  background-color: mistyrose;
  height: 100%;
  text-align: center;
  min-height: 100vh;
`;

function App() {
    useEffect(() => {
        fetchMovies()
    })
    const [movies, setMovies] = useState([]);

  const API_KEY = "65049324";
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=star`; // s=star+wars

  const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const {Search} = await response.json()
        console.log(Search);
        setMovies(Search);
      } catch (error) {
        console.log(error);
      }
  };

  return <BodyStyled>MOBPROGRAMMERINGSTEST
      {movies.map((movie) => <li><ul></ul></li>)}
  </BodyStyled>;
}

export default App;
