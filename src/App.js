import { Analytics } from "@vercel/analytics/react"
import React, { useState } from "react";
import "./App.css";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Arrows from "./components/Arrows/Arrows";
import Contacts from "./components/Contacts/Contacts";
import MenuButton from "./components/MenuButton/MenuButton";
import Subir from "./components/Subir/Subir";
import Footer from "./components/Footer/Footer";
import MoreAboutMe from "./components/MoreAboutMe/MoreAboutMe";

function App() {
  const [screenPosition, setScreenPosition] = useState(0);
  const [menuAppOpen, setMenuAppOpen] = useState(false);
  const [navbarIsOpen, setNavbarIsOpen] = useState(true);

  const [moreAboutMeIsOpen, setMoreAboutMeIsOpen] = useState(false);

  const [menuClicked, setMenuClicked] = useState(false);
  const screenWidth = window.screen.width;

  window.onscroll = () => {
    setScreenPosition(document.documentElement.scrollTop);

    if (screenPosition > 99) {
      setNavbarIsOpen(false); //Fecha a Navbar
      setMenuAppOpen(true); //O Menu Fixo foi Aberto

      setMenuClicked(false);
    } else {
      setNavbarIsOpen(true); //Abre a Navbar
      setMenuAppOpen(false); //O Menu Fixo foi Fechado
    }
    // console.log(navbarIsOpen, screenPosition);
  };

  const openMoreAboutMe = () => {
    setMoreAboutMeIsOpen(!moreAboutMeIsOpen);
  };

  return (
    <div id="App">
      {navbarIsOpen && menuClicked ? (
        <Navbar clicked={{ menuClicked }} />
      ) : navbarIsOpen ? (
        <Navbar screenPosition={screenPosition} />
      ) : null}

      <Home />
      <div id="buttonsHome">
        <a href="#Projetos">
          <button id="projetos">Ver Projetos</button>
        </a>
        <button id="about" onClick={()=>openMoreAboutMe()}>Mais sobre mim</button>
      </div>
      {moreAboutMeIsOpen ? <MoreAboutMe control={{moreAboutMeIsOpen, setMoreAboutMeIsOpen}}/> : null}
      <MenuButton
        config={{
          screenWidth,
          setMenuClicked,
          setNavbarIsOpen,
          setMenuAppOpen,
          menuAppOpen,
        }}
      />
      <Projects />
      <Skills />
      <Arrows config={screenPosition} />
      <Contacts />
      {screenPosition > 400 ? <Subir /> : null}
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
