import './App.css';
import styled from 'styled-components';
import {Header} from "../src/layout/header/Header";
import {Main} from "../src/layout/section/main/Main";
import React from "react";
import {Skills} from "../src/layout/section/skills/Skills";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;