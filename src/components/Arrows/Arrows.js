import React from "react";
import "./Arrows.css";

import { TbArrowBadgeDown } from "react-icons/tb";

const Arrows = () => {
  return (
    <div id="arrows">
      <span>Scroll Down</span>
      <TbArrowBadgeDown id="arrow1" />
      <TbArrowBadgeDown id="arrow2" />
      <TbArrowBadgeDown id="arrow1" />
    </div>
  );
};

export default Arrows;
