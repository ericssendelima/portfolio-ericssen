import React from "react";
import "./About.css";

import Eu from "../../images/teste04.png";

const About = ({ screen }) => {
  const screenWidth = window.screen.width;

  return (
    <div id="Sobre">
      <h1>Sobre</h1>
      <div id="about1">
        {/* <div id="text"> */}
        <div id={screen > 250 && screen < 1600 && screenWidth > 1000 ? "text" : "noText"}>
          <p>
            Sou uma pessoa movida pela curiosidade. Gosto de aprender, explorar
            e, especialmente, colocar em prática tudo o que descubro. Por muito
            tempo procurei algo que realmente me motivasse, o que me levou a uma
            formação de nível técnico e uma 1ª graduação, em áreas diferentes,
            além de algumas habilidades extras. No entanto, foi ao aprender a
            programar, inicialmente com Python e Java, e por fim, minha favorita
            JavaScript, que encontrei minha verdadeira vocação.
          </p>
          <p>
            Agora, estou concluindo o curso de Análise e Desenvolvimento de
            Sistemas, enquanto faço cursos de Desenvolvimento Web e Back-end
            para aprofundar meus conhecimentos. Paralelamente, trabalho com
            metalização e jateamento industrial na fabricação de torres eólicas
            e, um dos meus maiores sonhos é iniciar carreira como desenvolvedor
            de software, para continuar aprendendo e aprimorando minhas
            habilidades.
          </p>
          <p>
            Por fim, sou fã de tecnologia, games, ficção científica, música,
            filmes e séries, sushi e sem esquecer do café – puro e sem açúcar.
          </p>
          <p>
            Essa é minha jornada até agora. Estou ansioso para aplicar meu
            entusiasmo e habilidades em um ambiente de trabalho onde eu possa
            continuar crescendo e aprendendo com outros profissionais.
          </p>
        </div>
      </div>
      <div
        id={screen > 550 && screen < 1250 && screenWidth > 1000 ? "retangulo1" : "noRetangulo1"}
      ></div>
      <div
        id={screen > 550 && screen < 1250 && screenWidth > 1000 ? "retangulo2" : "noRetangulo2"}
      ></div>
      

      {/* <div id="about2">
        
      </div> */}

      <div id="fotosSobre1">
        <img
          src={Eu}
          alt="Eu"
          id={screen > 550 && screen < 1250 && screenWidth > 1000 ? "eu" : "noEu"}
        />
      </div>
    </div>
  );
};

export default About;
