import React, { Component } from "react";

class GridLines extends Component {
  createLines = () => {
    let lines = [];
    for (let i = 0; i < this.props.lines; i++) {
      lines.push(<span key={i} className="lines__item" />);
    }
    return lines;
  };
  render() {
    return (
      <div className="lines" id="lines">
        {this.createLines()}
      </div>
    );
  }
}
export default GridLines;
