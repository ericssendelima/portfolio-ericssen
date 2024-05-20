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
    </div>
  );
};

export default Home;
