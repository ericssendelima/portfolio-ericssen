import React from "react";
import "./Images.css";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Images = ({ arrImg, position }) => {
  const lastPosition = arrImg.length - 1;

  return (
    <div id="imagesContainer">
      {position.positionControl > 0 && (
        <IoIosArrowBack
          className="arrowProjLeft"
          onClick={() =>
            position.setPositionControl(position.positionControl - 1)
          }
        />
      )}

      <div id="imgBackground" onClick={()=>alert("Em construção...")}>
        <img src={arrImg[position.positionControl]} alt="proj" />
        <span id="ampliar">Ampliar[+]</span>
      </div>

      {position.positionControl < lastPosition && (
        <IoIosArrowForward
          className="arrowProjRight"
          onClick={() =>
            position.setPositionControl(position.positionControl + 1)
          }
        />
      )}
    </div>
  );
};

export default Images;
