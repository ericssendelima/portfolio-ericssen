import React from "react";
import "./Greeting.css";

const Greeting = () => {
  return (
    <div id="greetingContainer">
      <div id="main">
        <h5>
          Olá, meu nome é&nbsp;&nbsp;<span id="myName">Yalê</span>
        </h5>

        <h2 id="typing">Desenvolvedor Web</h2>

        <h5>
          Full Stack<span id="soon">&nbsp;&nbsp;(Carregando...)</span>
        </h5>
      </div>
    </div>
  );
};

export default Greeting;
