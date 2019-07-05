import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../assets/img/favicon.ico";

const Head = props => {
  return (
    <Helmet>
      <title itemprop="name">{props.title}</title>
      <meta
        charSet="utf-8"
        name="description"
        content="Front-end developer looking for a job"
      />
      <meta name="theme-color" content="#d8af00" />
      <meta
        name="apple-mobile-web-app-title"
        content="Sebastian Kopiczko | Front End Developer"
      />
      <meta
        name="application-name"
        content="Sebastian Kopiczko | Front End Developer"
      />
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
  );
};
export default Head;
