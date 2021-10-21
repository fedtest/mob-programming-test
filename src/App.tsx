import React, { useState } from 'react';

import './App.css';
import styled from 'styled-components';

const BodyStyled = styled.div`
  background-color: mistyrose;
  height: 100%;
  text-align: center;
  min-height: 100vh;
`;

function App() {
  const API_KEY = '65049324';
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`; // s=star+wars

  const [search, setSearch] = useState('');

  const handleClick = (input: string) => {
    console.log(input);

    fetch('http://example.com/movies.json')
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <BodyStyled>
      MOBPROGRAMMERINGSTEST
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='skriv in din film' type='text'></input>
        <input value='sök' type='button' onClick={() => handleClick(search)} />
      </div>
    </BodyStyled>
  );
}

export default App;
