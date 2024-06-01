import React, { useState } from "react";
import "./Images.css";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Details from "../Details/Details";

const Images = ({ arrImg, position, proj }) => {
  const [isDetailsOn, setIsDetailsOn] = useState(false);
  const lastPosition = arrImg.length - 1;

  const ampliar = () => {
    setIsDetailsOn(!isDetailsOn);
  };

  return (
    <div id="imagesContainer">
      {position.positionControl > 0 && (
        <div
          className="arrowContainerLeft"
          onClick={() =>
            position.setPositionControl(position.positionControl - 1)
          }
        >
          <IoIosArrowBack className="arrowProjLeft" />
        </div>
      )}

      <div id="imgBackground" onClick={() => ampliar()}>
        <img src={arrImg[position.positionControl]} alt="proj" />
        <span id="ampliar">Ampliar[+]</span>
      </div>

      {position.positionControl < lastPosition && (
        <div
          className="arrowContainerRight"
          onClick={() =>
            position.setPositionControl(position.positionControl + 1)
          }
        >
          <IoIosArrowForward className="arrowProjRight" />
        </div>
      )}

      {isDetailsOn ? (
        <Details config={{ arrImg, lastPosition}} close={{ isDetailsOn, setIsDetailsOn }} proj={proj} />
      ) : null}
    </div>
  );
};

export default Images;
