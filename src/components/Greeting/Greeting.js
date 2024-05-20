import React from "react";
import "./Greeting.css";

const Greeting = () => {
  return (
    <div id="greetingContainer">
      <div id="main">
        <h4>
          Olá, meu nome é <span id="myName">Yalê</span>
        </h4>

        <h1 id="typing">Desenvolvedor Web</h1>

        <h4>
          Full Stack<span id="soon">&nbsp;&nbsp;(Carregando...)</span>
        </h4>
      </div>
    </div>
  );
};

export default Greeting;
