import React from "react";
import "./Skills.css";

import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { VscIndent } from "react-icons/vsc";
import { SiVercel } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";


const Contacts = () => {
  return (
    <div id="Skills">
      <h1>Habilidades</h1>
      <div id="skillIconsContainer">
        <div>
          <FaNode size={90} color="#7AB462"/>
          <p>Node JS</p>
        </div>
        <div>
          <BiLogoTypescript size={90} color="#2F74C0"/>
          <p>Typescript</p>
        </div>
        <div>
          <img
            alt="csharp"
            style={{ width: "50px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
          />

          <p>C#</p>
        </div>
        <div id="box">
          <IoLogoJavascript size={65} color="#EFD81D" />
          <p>Javascript</p>
        </div>
        <div id="box">
          <FaReact size={50} color="#5ED3F3" />
          <p>React JS</p>
        </div>
        <div id="box">
          <IoLogoHtml5 size={50} color="#DD4B25" />
          <p>Html5</p>
        </div>
        <div id="box">
          <IoLogoCss3 size={50} color="#1965A5" />
          <p>Css3</p>
        </div>
      </div>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <VscIndent />
        Ferramentas
      </h2>
      <div id="toolsIconsContainer">
        <div>
          <DiGithubBadge size={90} color="#4680B2"/>
          <p>Github Pages</p>
        </div>
        <div>
          <SiVercel size={50} />
          <p>Vercel</p>
        </div>
        <div>
          <IoLogoFirebase size={50} color="#F5810A"/>
          <p>Realtime Database</p>
        </div>
        <div>
          <FaBootstrap size={50} color="#8512F5"/>
          <p>Bootstrap</p>
        </div>
        <div>
          <img
            alt="vscode"
            style={{ width: "50px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
          />

          <p>Vs Code</p>
        </div>
      </div>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <VscIndent />
        Estudando...
      </h2>
      <div id="leaningIconsContainer">
        {/* <div>
          <FaGitAlt size={50} color="#E84E31"/>
          <p>Git</p>
        </div> */}
        <div >
          <img
            alt="dotnet"
            style={{width: "50px"}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
          />
          <p>.NET Core</p>
        </div>
        <div>
          <TbBrandReactNative size={90} color="#5ED3F3"/>
          <p>React Native</p>
        </div>
        <div >
          <img
            alt="SQLServer"
            style={{ width: "58px"}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"
          />
          <p>SQL Server</p>
        </div>
        <div>
          <BiLogoPostgresql size={90} color="#31648C"/>
          <p>PostgreSQL</p>
        </div>
        <div>
          <SiMongodb size={90} color="#00EE64"/>
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
