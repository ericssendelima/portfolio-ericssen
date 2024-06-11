import React from "react";
import "./Home.css";

import Greeting from "../Greeting/Greeting";

const Home = () => {
  return (
    <div id="homeContainer">
      <div id="Home"></div>
      <div id="contentHome">
        <Greeting />
      </div>
      <div id="describeContainer">
        <p>
          Sou um curioso apaixonado por programação, estudando Análise e
          Desenvolvimento de Sistemas e trabalhando na produção de torres
          eólicas. Sonho em ser desenvolvedor de software.
        </p>
      </div>
      
    </div>
  );
};

export default Home;
