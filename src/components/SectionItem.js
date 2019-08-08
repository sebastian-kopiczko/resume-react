import React, { Fragment } from "react";

const SectionItem = props => {
  const { item, isDetailed } = props;
  return (
    <Fragment>
      {!isDetailed ? (
        <span className="section__row text--light">{item}</span>
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </Fragment>
  );
};

export default SectionItem;
