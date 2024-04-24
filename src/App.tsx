import './App.css';
import {Header} from "layout/header/Header";
import {Main} from "layout/section/main/Main";
import React from "react";
import {Skills} from "layout/section/skills/Skills";
import {Projects} from "layout/section/projects/Projects";
import {Contacts} from "layout/section/contacts/Contacts";
import {Footer} from "layout/footer/Footer";
import {MobileVersion} from "layout/header/mobileVersion/mobileVersion";



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

