import React, { useState } from "react";

import "./Details.css";

import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
// import { HiExternalLink } from "react-icons/hi";

const Details = ({ close, proj, config }) => {
  const [detailsPositionControl, setDetailsPositionControl] = useState(0);
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
            {detailsPositionControl > 0 && (
              <div
                className="arrowDetailsContainerLeft"
                onClick={() =>
                  setDetailsPositionControl(detailsPositionControl - 1)
                }
              >
                <IoIosArrowBack className="arrowDetailsProjLeft" />
              </div>
            )}

            <div id="imgDetailsBackground">
              <img src={config.arrImg[detailsPositionControl]} alt="proj" />
            </div>

            {detailsPositionControl < config.lastPosition && (
              <div
                className="arrowDetailsContainerRight"
                onClick={() =>
                  setDetailsPositionControl(detailsPositionControl + 1)
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
                  className={i === detailsPositionControl && "atualDetailsImg"}
                />
              );
            })}
          </div>
        </div>
        <div id="detailsDescriptions">
          <div id="completeDescription">
            <p>{proj.descricaocompleta}</p>
          </div>
          <div id="footerDetailsDescriptions">
            <div id="tagsDetails">em construção...</div>
            <div id="externalLink"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
