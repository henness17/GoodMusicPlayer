import React from "react";
import SongGridComponent from "./SongGridComponent.js";

class SongGrid extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SongGridComponent />
      </div>
    );
  }
}

export default SongGrid;
