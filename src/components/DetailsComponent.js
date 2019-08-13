import React from "react";

class DetailsComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>{this.props.currentSong["title"]}</h1>
        <h3>{this.props.currentSong["artist"]}</h3>
      </div>
    );
  }
}

export default DetailsComponent;
