import React from 'react';
import './Subir.css'
import { PiArrowLineUpBold } from "react-icons/pi";

const Subir = () => {
    const subir = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      };
    return (
        <div id="subir" onClick={subir}>
          <PiArrowLineUpBold />
        </div>
    );
}

export default Subir;
