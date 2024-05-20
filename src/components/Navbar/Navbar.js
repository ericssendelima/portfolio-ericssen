import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { CgMenu } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

import MenuNav from "../MenuNav/MenuNav";

const Navbar = ({ clicked }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [config, setConfig] = useState({
    home: <FaHome size={23} />,
    contact: <MdContactPhone size={23} />,
  });

  useEffect(() => {
    if (window.screen.width > 450) {
      setMenuIsOpen(true);
      setConfig({ home: "Home", contact: "Contatos" });
    } else if (window.screen.width < 450 && clicked) {
      setMenuIsOpen(true);
      setConfig({
        home: <FaHome size={23} />,
        contact: <MdContactPhone size={23} />,
      });
    }
  }, []);

  return (
    // <div id={navIsOpen ? "navbarContainer" : "navbarHidden"}>
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
        <MenuNav close={{ menuIsOpen, setMenuIsOpen }} config={{ config }} clicked={clicked}/>
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
