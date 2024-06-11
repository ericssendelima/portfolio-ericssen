import React from "react";
import "./Arrows.css";

import { TbArrowBadgeDown } from "react-icons/tb";

const Arrows = ({config}) => {
  return (
    <div id={config < 99 ? "centerArrows" : "arrows"}>
      <span>Scroll Down</span>
      <TbArrowBadgeDown id="arrow1" />
      <TbArrowBadgeDown id="arrow2" />
      {config > 99 && <TbArrowBadgeDown id="arrow1" />}
    </div>
  );
};

export default Arrows;
