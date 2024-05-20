import React from "react";
import "./MenuButton.css";
import { CgMenu } from "react-icons/cg";

const MenuButton = ({ config }) => {
  const {
    screenWidth,
    setMenuClicked,
    setNavbarIsOpen,
    setMenuAppOpen,
    menuAppOpen,
  } = config;

  const handleClick = () => {
    if (screenWidth < 750) {
      setMenuClicked(true); 
      //O Menu fixo foi clicado num celular
    }
    setNavbarIsOpen(true); //Abre a Navbar
    setMenuAppOpen(false); //O Menu Fixo foi fechado
  };

  return (
    <div id="MenuButtonContainer">
      <CgMenu
        id={menuAppOpen ? "menuAppOpen" : "menuAppClose"}
        onClick={handleClick}
      />
    </div>
  );
};

export default MenuButton;
