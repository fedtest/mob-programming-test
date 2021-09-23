import React from "react";
import "./App.css";
import styled from 'styled-components';

const BodyStyled = styled.div`
    background-color: mistyrose;
    height: 100%;
    text-align: center;
    min-height: 100vh;
`

function App() {
    const API_KEY = "";
    const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`; // s=star+wars

    return (
        <BodyStyled>
            MOBPROGRAMMERINGS TEST
        </BodyStyled>
    );
}

export default App;
