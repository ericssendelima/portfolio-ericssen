import React from "react";

import "./Details.css";

import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { HiExternalLink } from "react-icons/hi";
import { DiGithubBadge } from "react-icons/di";

const Details = ({ close, proj, config }) => {
  const chosenImage = (index) => {
    config.position.setPositionControl(index)
  }
  return (
    <div id="detailsContainer">
      <div id="detailsHeader">
        <h1>{proj.titulo}</h1>
        <IoClose
          className="closeDetails"
          onClick={() => close.setIsDetailsOn(!close.isDetailsOn)}
        />
      </div>

      <div id="detailsBody">
        <div id="teste">
          <div id="detailsImages">
            {config.position.positionControl > 0 && (
              <div
                className="arrowDetailsContainerLeft"
                onClick={() =>
                  config.position.setPositionControl(
                    config.position.positionControl - 1
                  )
                }
              >
                <IoIosArrowBack className="arrowDetailsProjLeft" />
              </div>
            )}

            <div id="imgDetailsBackground">
              <img
                src={config.arrImg[config.position.positionControl]}
                alt="proj"
              />
            </div>

            {config.position.positionControl < config.lastPosition && (
              <div
                className="arrowDetailsContainerRight"
                onClick={() =>
                  config.position.setPositionControl(
                    config.position.positionControl + 1
                  )
                }
              >
                <IoIosArrowForward className="arrowDetailsProjRight" />
              </div>
            )}
          </div>
          <div id="pointsDetailsContainer">
            {proj.images.map((img, i) => {
              return (
                <TbPointFilled
                  key={i}
                  className={
                    i === config.position.positionControl && "atualDetailsImg"
                  }
                  onClick={()=>chosenImage(i)}
                />
              );
            })}
          </div>
        </div>
        <div id="detailsDescriptions">
          <div id="completeDescription">
            <h3>
              Descrição{" "}
              <div id="detailsButtons">
                <div id="externalLink">
                  <a href={proj.github} target="_blank" rel="noreferrer">
                    <DiGithubBadge size={32} />
                  </a>
                </div>
                <div id="externalLink">
                  <a href={proj.url} target="_blank" rel="noreferrer">
                    <HiExternalLink size={22} />
                  </a>
                </div>
              </div>
            </h3>
            <p>{proj.descricaocompleta}</p>
          </div>
          <div id="footerDetailsDescriptions">
            <div id="tagsDetails">
              em construção...
              {/* {proj.tags.map((tag) => {
                <li>{tag}</li>;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
