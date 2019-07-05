import React from "react";

import Icon from "./Icon";
import github from "../assets/img/svg/gh.svg";
import linkedin from "../assets/img/svg/ln.svg";

const Contact = props => {
  const links = {
    github: "http://www.github.com/sebastian-kopiczko",
    linkedin: "http://www.linkedin.com/in/sebastian-kopiczko"
  };
  return (
    <section className="contact">
      <ul className="contact__details details">
        <li className="details__item">
          <a href="mailto:sebastian.kopiczko@gmail.com">
            <span className="text--regular">{props.email}</span>
          </a>
        </li>
        <li className="details__item details__phone">
          <span className="text--regular">{props.phone}</span>
        </li>
      </ul>
      <div className="contact__icons">
        <Icon src={github} href={links.github} alt="Github icon" />
        <Icon src={linkedin} href={links.linkedin} alt="Linkedin icon" />
      </div>
    </section>
  );
};

export default Contact;
