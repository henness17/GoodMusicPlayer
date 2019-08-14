import React from "react";
import SongGridComponent from "./SongGridComponent.js";

class SongGrid extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SongGridComponent
          songs={this.props.songs}
          addSongToQueue={this.props.addSongToQueue}
        />
      </div>
    );
  }
}

export default SongGrid;
