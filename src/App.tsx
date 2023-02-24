import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Character} from "./model/Character";
import axios from "axios";
import * as https from "https";

function App() {

  const [characters, setCharacters] = useState<Character[]>([])

  function loadCharacters(){
    axios.get("https://hp-api.onrender.com/api/characters")
    .then((response) => {
      setCharacters(response.data)
    })
        .catch((error) => {
      console.error(error)
    })
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
