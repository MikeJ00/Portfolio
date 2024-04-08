import './App.css';
import {Header} from "../src/layout/header/Header";
import {Main} from "../src/layout/section/main/Main";
import React from "react";
import {Skills} from "../src/layout/section/skills/Skills";
import {Projects} from "../src/layout/section/projects/Projects";
import {Contacts} from "../src/layout/section/contacts/Contacts";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;

