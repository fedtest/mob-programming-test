import React from "react";
import "./App.css";
import styled from "styled-components";

const BodyStyled = styled.div`
  background-color: mistyrose;
  height: 100%;
  text-align: center;
  min-height: 100vh;
`;

function App() {
  const API_KEY = "65049324";
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=star`; // s=star+wars

  const fetchMovies = async () => {
    const response = await fetch(API_URL);

  };

  return <BodyStyled>MOBPROGRAMMERINGSTEST</BodyStyled>;
}

export default App;
