import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const API_KEY = "";
  const API_URL = "http://www.omdbapi.com/?apikey=65049324&s="; // s=star+wars

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
