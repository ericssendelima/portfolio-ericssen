import React, { useState } from "react";
import "./ProjectCards.css";

import { TbPointFilled } from "react-icons/tb";
import { HiExternalLink } from "react-icons/hi";

import Images from "../Images/Images";

const ProjectCards = ({ proj }) => {
  const { titulo, descricao, tags, images, url } = proj;
  const [positionControl, setPositionControl] = useState(0);

  return (
    <div id="projectCardsContainer">
      <div id="headerCard">
        <Images
          arrImg={images}
          position={{ positionControl, setPositionControl }}
        />
        <div id="pointsContainer">
          {images.map((img, i) => {
            return (
              <TbPointFilled
                key={i}
                className={i === positionControl && "atualImg"}
              />
            );
          })}
        </div>
      </div>
      <div id="bodyCard">
        <h2 id="tituloProjeto">
          {titulo}
          <a href={url} target="_blank" rel="noreferrer">
            <HiExternalLink />
          </a>
        </h2>
        <p>{descricao}</p>
      </div>
      <div id="footerCard">{tags}</div>
    </div>
  );
};

export default ProjectCards;
