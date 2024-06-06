import React, { useState } from "react";
import "./ProjectCards.css";

import { TbPointFilled } from "react-icons/tb";
import { HiExternalLink } from "react-icons/hi";
import { DiGithubBadge } from "react-icons/di";

import Images from "../Images/Images";

const ProjectCards = ({ proj }) => {
  const { titulo, descricao, tags, images, url, github } = proj;
  const [positionControl, setPositionControl] = useState(0);

  const chosenImage = (index) => {
    setPositionControl(index)
  }

  return (
    <div id="projectCardsContainer">
      <div id="headerCard">
        <Images
          arrImg={images}
          position={{ positionControl, setPositionControl }}
          proj={proj}
        />
        <div id="pointsContainer">
          {images.map((img, i) => {
            return (
              <TbPointFilled
                key={i}
                className={i === positionControl && "atualImg"}
                onClick={()=>chosenImage(i)}
              />
            );
          })}
        </div>
      </div>
      <div id="bodyCard">
        <h2 id="tituloProjeto">{titulo}</h2>
        <p>{descricao}</p>
        <div id="bodyCardsButtons">
          <a href={github} target="_blank" rel="noreferrer">
            <DiGithubBadge />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <HiExternalLink />
          </a>
        </div>
      </div>
      <div id="footerCard">{tags}</div>
    </div>
  );
};

export default ProjectCards;
