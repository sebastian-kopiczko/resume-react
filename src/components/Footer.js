import React from "react";

const Footer = props => {
  const { clause, year, author } = props;
  return (
    <footer className="footer text--superlight">
      <p className="footer__clause text--small" id="clause">
        {clause}
      </p>
      <div className="footer__author text--small ">
        &copy; {year} {author}
      </div>
    </footer>
  );
};
export default Footer;
