import React, { Component } from "react";
import SectionRowDetailed from "./SectionRowDetailed";
import SectionRow from "./SectionRow";
import SectionItem from "./SectionItem";

class Section extends Component {
  render() {
    const { number, heading, data, isDetailed } = this.props;
    // const listItemClassName = isDetailed
    //   ? "section__item section__item--detailed"
    //   : "section__item";
    const sectionClassName = `section ${heading.toString().toLowerCase()}`;
    const sectionId = sectionClassName.split(" ")[1];
    const sectionItems = data;

    return (
      <section className={sectionClassName} id={sectionId}>
        <h3 className="section__title text--light">
          <span className="text--gold text--regular">0{number}.</span> {heading}
        </h3>
        <div className="section__body">
          {sectionItems && sectionItems.length > 0 ? (
            <ul className="section__list list">
              {sectionItems.map((sectionItem, index) => {
                return (
                  <li key={index} className="section__item">
                    <SectionItem item={sectionItem} isDetailed={isDetailed} />
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </section>
    );
  }
}
export default Section;
