import React, {useEffect} from "react";
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

  const API_KEY = "65049324";
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=star`; // s=star+wars

  const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const body = await response.json()
        console.log(body);

      } catch (error) {
        console.log(error);
      }
  };

  return <BodyStyled>MOBPROGRAMMERINGSTEST</BodyStyled>;
}

export default App;
