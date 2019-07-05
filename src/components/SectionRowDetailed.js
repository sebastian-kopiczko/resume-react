import React from "react";

const SectionRowDetailed = props => {
  const { ...item } = props;
  return (
    <div>
      <div className="section__item__heading ">
        <h5 className="text--regular">{item.title}</h5>
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
      </div>
      <p className="section__text text--light">{item.subtitle}</p>
    </div>
  );
};

export default SectionRowDetailed;
