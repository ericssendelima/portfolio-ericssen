import React from "react";
import "./Contacts.css";

import { FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";

const Contacts = () => {
  return (
    <div id="Contatos">
      <h1>
        <MdContactPhone style={{ marginRight: "12px", marginBottom: "9px" }} />
        Contatos
      </h1>
      <div id="iconsContainer">
        <a
          id="Links"
          href="https://wa.me/5581999204266"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <FaWhatsapp size={50} color="#25D366" />
            <p>Whatsapp</p>
          </div>
        </a>

        <a
          id="Links"
          href="mailto:ericssendelima@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <FcGoogle size={50} />
            <p>Email</p>
          </div>
        </a>

        <a
          id="Links"
          href="https://github.com/ericssendelima"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <DiGithubBadge
              size={65}
              color="#8957E5"
              viewBox="0 0 30 30"
              style={{ height: "52px" }}
            />
            <p id="github">Github</p>
          </div>
        </a>

        <a
          id="Links"
          href="https://www.linkedin.com/in/ericssendelima/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <BsLinkedin size={50} color="#0e76a8" />
            <p>Linkedin</p>
          </div>
        </a>
      </div>

    </div>
  );
};

export default Contacts;
