import './App.css';
import {Header} from "../src/layout/header/Header";
import {Main} from "../src/layout/section/main/Main";
import React from "react";
import {Skills} from "../src/layout/section/skills/Skills";
import {Projects} from "../src/layout/section/projects/Projects";
import {Contacts} from "../src/layout/section/contacts/Contacts";
import {Footer} from "../src/layout/footer/Footer";
import {MobileVersion} from "../src/layout/header/mobileVersion/mobileVersion";



function App() {
  return (
    <div className="App">
      <MobileVersion/>
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;

