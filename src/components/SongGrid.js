import React from "react";
import SongGridComponent from "./SongGridComponent.js";

class SongGrid extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SongGridComponent
        songs={this.props.songs}
        addSongToQueue={this.props.addSongToQueue}
      />
    );
  }
}

export default SongGrid;
