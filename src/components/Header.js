import React from "react";
import Contact from "./Contact";
const Header = props => {
  return (
    <header className="header" id="header">
      <div className="header__inner">
        <h1 className="header__title text--regular" id="header_me">
          {props.firstName} <span className="text--gold">{props.lastName}</span>
        </h1>
        <p className="header__subtitle">{props.title}</p>
      </div>
      <Contact
        email="contact@sebastiankopiczko.pl"
        // phone="+48 739 069 669"
        hasIcons={true}
      />
    </header>
  );
};
export default Header;
