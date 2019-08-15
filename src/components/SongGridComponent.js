import React from "react";
import SongGrid from "./SongGrid";
import SongGridItem from "./SongGridItem";

class SongGridComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const gridItems = Object.keys(this.props.songs).map(key => (
      <SongGridItem
        key={Math.random()}
        song={this.props.songs[key]}
        onMouseOver={() => window.playSnippet(this.props.songs[key]["url"])}
        onMouseOut={() => window.pause()}
        addSongToQueue={this.props.addSongToQueue}
      />
    ));
    const grid = <div className="gridContainer">{gridItems}</div>;
    return <div>{grid}</div>;
  }
}

export default SongGridComponent;
