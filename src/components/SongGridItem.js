import React from "react";
import SongGridItemComponent from "./SongGridItemComponent.js";

class SongGridItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SongGridItemComponent
          song={this.props.song}
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}
          addSongToQueue={this.props.addSongToQueue}
        />
      </div>
    );
  }
}

export default SongGridItem;
