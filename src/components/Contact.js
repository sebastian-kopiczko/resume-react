import React from "react";
import Icon from "./Icon";
import GithubIcon from "../assets/img/svg/gh.svg";
import LinkedinIcon from "../assets/img/svg/ln.svg";

const Contact = props => {
  const links = [
    {
      name: "github",
      href: "http://www.github.com/sebastian-kopiczko",
      src: GithubIcon
    },
    {
      name: "linkedin",
      href: "http://www.linkedin.com/in/sebastian-kopiczko",
      src: LinkedinIcon
    }
  ];
  return (
    <section className="contact">
      {props.hasIcons && (
        <div className="contact__icons">
          {links.map((link, index) => (
            <Icon
              key={index}
              name={link.name}
              href={link.href}
              src={link.src}
            />
          ))}
        </div>
      )}
      <a href={`mailto:${props.email}`} style={{ textAlign: "right" }}>
        {props.email}
      </a>
    </section>
  );
};

export default Contact;
