import React from "react";
import "./Greeting.css";

const Greeting = () => {
  return (
    <div id="greetingContainer">
      <div id="main">
        <h5>
          Olá, meu nome é&nbsp;&nbsp;<span id="myName">Yalê</span>
        </h5>

        <h2 id="typing">Dev Full stack</h2>

        <h5>
          Status<span id="soon">&nbsp;&nbsp;(aprendendo...)</span>
        </h5>
      </div>
    </div>
  );
};

export default Greeting;
