import React from "react";
import PropTypes from "prop-types";
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

SongGridComponent.propTypes = {
  songs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  addSongToQueue: PropTypes.func.isRequired
};

export default SongGridComponent;
