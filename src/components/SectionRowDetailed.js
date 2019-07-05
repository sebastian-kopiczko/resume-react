import React from "react";

const SectionRowDetailed = props => {
  const { ...item } = props;
  return (
    <div>
      <div className="text--light text--small">
        <span>
          {item.startDate}
          {" - "}
          {item.endDate}
        </span>
        <span>
          {" / "}
          {item.location}
        </span>
      </div>
      <h3 className="section__title text--regular">{item.title}</h3>
      <p className="section__text text--light">{item.subtitle}</p>
    </div>
  );
};

export default SectionRowDetailed;
