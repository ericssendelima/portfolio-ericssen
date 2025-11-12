import React from "react";
import "./Greeting.css";

const Greeting = () => {
  return (
    <div id="greetingContainer">
      <div id="main">
        <h5>
          Olá, meu nome é&nbsp;&nbsp;<span id="myName">Yalê</span>
        </h5>

        <h2 id="typing">Dev Full Stack</h2>

        <h5>
          Evoluindo<span id="soon">&nbsp;&nbsp;(e aprendendo...)</span>
        </h5>
      </div>
    </div>
  );
};

export default Greeting;
