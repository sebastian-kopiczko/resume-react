import React from "react";

const Header = props => {
  return (
    <header className="header" id="header">
      <div className="header__inner">
        <h1 className="header__heading" id="header_me">
          {props.firstName} <span className="text--gold">{props.lastName}</span>
        </h1>
        <p>Front-end developer</p>
      </div>
    </header>
  );
};
export default Header;
