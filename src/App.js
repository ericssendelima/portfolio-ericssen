import React, { useState } from "react";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Arrows from "./components/Arrows/Arrows";
import Contacts from "./components/Contacts/Contacts";
import MenuButton from "./components/MenuButton/MenuButton";
import Subir from "./components/Subir/Subir";
import Footer from "./components/Footer/Footer";

function App() {
  const [screenPosition, setScreenPosition] = useState(0);
  const [menuAppOpen, setMenuAppOpen] = useState(false);
  const [navbarIsOpen, setNavbarIsOpen] = useState(true);

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
    };
    // console.log(navbarIsOpen, screenPosition);
  };

  return (
    <div>
      {navbarIsOpen && menuClicked ? (
        <Navbar clicked={{ menuClicked }} />
      ) : navbarIsOpen ? (
        <Navbar />
      ) : null}

      <Home />
      <MenuButton
        config={{
          screenWidth,
          setMenuClicked,
          setNavbarIsOpen,
          setMenuAppOpen,
          menuAppOpen,
        }}
      />
      <About screen={screenPosition} />
      <Skills />
      <Projects />
      <Arrows config={screenPosition}/>
      <Contacts />
      {screenPosition > 400 ? <Subir /> : null}
      <Footer />
    </div>
  );
}

export default App;
