import React, { useState } from "react";
import "./MenuNav.css";

import { IoCloseOutline } from "react-icons/io5";

const MenuNav = ({ close, config, clicked }) => {
  const [className, setClassName] = useState("");

  return (
    <nav id="menuContainer">
      <a
        href="#Home"
        className={className === "Home" ? "active" : ""}
        onClick={() => {
          setClassName("Home");
          setTimeout(() => {
            setClassName("");
          }, 1500);
        }}
      >
        {config.config.home}
      </a>
      <a
        href="#Sobre"
        className={className === "Sobre" ? "active" : ""}
        onClick={() => {
          setClassName("Sobre");
          setTimeout(() => {
            setClassName("");
          }, 1500);
        }}
      >
        Sobre
      </a>
      <a
        href="#Skills"
        className={className === "Skills" ? "active" : ""}
        onClick={() => {
          setClassName("Skills");
          setTimeout(() => {
            setClassName("");
          }, 1500);
        }}
      >
        Habilidades
      </a>
      <a
        href="#Projetos"
        className={className === "Projetos" ? "active" : ""}
        onClick={() => {
          setClassName("Projetos");
          setTimeout(() => {
            setClassName("");
          }, 1500);
        }}
      >
        Projetos
      </a>
      <a
        href="#Contatos"
        className={className === "Contatos" ? "active" : ""}
        onClick={() => {
          setClassName("Contatos");
          setTimeout(() => {
            setClassName("");
          }, 1500);
        }}
      >
        {config.config.contact}
      </a>

      {clicked ? <div id="fechar" style={{color: "transparent"}}></div> : (
        <div id="fechar" onClick={() => close.setMenuIsOpen(!close.menuIsOpen)}>
          <IoCloseOutline />
        </div>
      )}
    </nav>
  );
};

export default MenuNav;
