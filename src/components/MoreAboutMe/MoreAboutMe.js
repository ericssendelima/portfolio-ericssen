import React from "react";
import "./MoreAboutMe.css";

import { IoClose } from "react-icons/io5";

const MoreAboutMe = ({ control }) => {
  return (
    <div id="moreAboutMeContainer">
      <div id="moreAboutMeHeader">
        <h1>Sobre</h1>
        <IoClose
          className="closeMoreAboutMeContainer"
          onClick={() =>
            control.setMoreAboutMeIsOpen(!control.moreAboutMeIsOpen)
          }
        />
      </div>
      <div id="moreAboutMeBody">
        <p>
          Sou uma pessoa movida pela curiosidade. Gosto de aprender, explorar e,
          especialmente, colocar em prática tudo o que descubro. Por muito tempo
          procurei algo que realmente me motivasse, o que me levou a uma
          formação de nível técnico e uma 1ª graduação, em áreas diferentes do mundo da programação,
          além de algumas habilidades extras. No entanto, foi ao aprender a
          programar, inicialmente com Python e Java, e por fim, minha favorita
          JavaScript, e posteriormente C#, que encontrei minha verdadeira vocação.
        </p>
        <p>
          Agora, após concluir o curso de Análise e Desenvolvimento de
          Sistemas, faço cursos de Desenvolvimento Web e Back-end para
          aprofundar meus conhecimentos, como Node.js, Bancos de Dados(Relacionais e Não Relacionais), Typescript, C# e .NET. Paralelamente, trabalho com metalização
          e jateamento industrial na fabricação de torres eólicas e, um dos meus
          maiores sonhos é iniciar carreira como desenvolvedor de software, para
          continuar aprendendo e aprimorando minhas habilidades.
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
  );
};

export default MoreAboutMe;
