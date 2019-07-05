import React, { Component } from "react";
import SectionRowDetailed from "./SectionRowDetailed";
import SectionRow from "./SectionRow";

class Section extends Component {
  render() {
    const { number, heading, data, isDetailed } = this.props;
    const listItemClassName = isDetailed ? "section__item" : "section__row";
    console.log(listItemClassName);
    const listItems = data.map((item, index) => {
      return (
        <li key={index} className={listItemClassName}>
          {isDetailed ? (
            <SectionRowDetailed {...item} />
          ) : (
            <SectionRow content={item} />
          )}
        </li>
      );
    });
    return (
      <section
        className={`section ${heading.toString().toLowerCase()}`}
        id={heading.toString().toLowerCase()}
      >
        <h2 className="section__heading text--regular">
          <span className="text--gold">0{number}.</span> {heading}
        </h2>
        <ul className="section__list list">{listItems}</ul>
      </section>
    );
  }
}
export default Section;
