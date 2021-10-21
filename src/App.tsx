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
    const API_KEY = "65049324";
    const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`; // s=star+wars


    const handleSubmit = (e:any) =>{
        console.log(e.target.value);
    }
    return (
        <BodyStyled>
            
            MOBPROGRAMMERINGSTEST

            <form onSubmit={handleSubmit(e)}>
                <input  placeholder="skriv in din film" type='text'>

                </input>
                <input value="sök" type='button'/>
            </form>
        </BodyStyled>
    );
}

export default App;
