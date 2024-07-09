import React from "react";
import "./MenuNav.css";

import { IoCloseOutline } from "react-icons/io5";

const MenuNav = ({ close, config, clicked }) => {
  // const [className, setClassName] = useState("");

  return (
    <nav id="menuContainer">
      {config.screenPosition < 105 ? null : <a href="#Home">{config.config.home}</a>}

      {/* <a href="#Sobre">Sobre</a> */}
      <a href="#Projetos">Projetos</a>
      <a href="#Skills">Habilidades</a>
      <a href="#Contatos">{config.config.contact}</a>

      {clicked ? (
        <div id="fechar" style={{ color: "transparent" }}></div>
      ) : (
        <div id="fechar" onClick={() => close.setMenuIsOpen(!close.menuIsOpen)}>
          <IoCloseOutline />
        </div>
      )}
    </nav>
  );
};

export default MenuNav;
