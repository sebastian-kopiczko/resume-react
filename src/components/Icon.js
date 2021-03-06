import React from "react";

const Icon = props => {
  return (
    <a href={props.href} className="contact__item icon">
      <img src={props.src} alt={props.name} />
    </a>
  );
};

export default Icon;
