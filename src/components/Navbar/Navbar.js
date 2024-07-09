import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { CgMenu } from "react-icons/cg";
import { FaHome } from "react-icons/fa";

import MenuNav from "../MenuNav/MenuNav";

const Navbar = ({ clicked, screenPosition }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [config, setConfig] = useState({
    home: <FaHome size={23} />,
    contact: "Contatos",
  });

  useEffect(() => {
    if (window.screen.width > 750) {
      setMenuIsOpen(true);
      setConfig({ home: "Home", contact: "Contatos" });
    } else if (window.screen.width < 750 && clicked) {
      setMenuIsOpen(true);
      setConfig({
        home: <FaHome size={23} />,
        contact: "Contatos",
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div id="navbarContainer">
      <div id="completeLogo">
        <span>
          {"<"}
          <span id="nameLogo">
            Yale id=<span id="surname">{`"Portfólio"`}</span> fuel=
            <span id="noSugar">
              <span className="keys">{"{"}</span>
              {"coffeeNoSugar"}
              <span id="parenteses">()</span>
              <span className="keys">{"}"}</span>
            </span>
          </span>
          /{">"}
        </span>
      </div>
      {menuIsOpen && (
        <MenuNav close={{ menuIsOpen, setMenuIsOpen }} config={{ config, screenPosition }} clicked={clicked}/>
      )}

      <div
        id={menuIsOpen ? "noMenu" : "menuNav"}
        onClick={() => {
          setMenuIsOpen(!menuIsOpen);
        }}
      >
        <CgMenu />
      </div>
    </div>
  );
};

export default Navbar;
