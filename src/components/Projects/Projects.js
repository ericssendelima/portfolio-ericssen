import React from "react";
import "./Projects.css";
import ProjectCards from "../ProjectCards/ProjectCards";

import { data } from "../../Data/data";

import { DiTerminal } from "react-icons/di";

const Projects = () => {
  return (
    <div id="Projetos">
      <h1>
        <DiTerminal style={{ marginRight: "9px", marginBottom: "9px" }} />
        Projetos{" "}
      </h1>
      <ul>
        {data.map((proj) => (
          <li key={proj.titulo}>
            <ProjectCards proj={proj} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
