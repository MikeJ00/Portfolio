import './App.css';
import {Header} from "../src/layout/header/Header";
import {Main} from "../src/layout/section/main/Main";
import React from "react";
import {Skills} from "../src/layout/section/skills/Skills";
import {Projects} from "../src/layout/section/projects/Projects";
import {Contacts} from "../src/layout/section/contacts/Contacts";
import {Footer} from "../src/layout/footer/Footer";
import {AboutMe} from "../src/layout/section/aboutMe/AboutMe";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      {/*<AboutMe/>*/}
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;

