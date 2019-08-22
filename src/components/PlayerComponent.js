import React from "react";
import PropTypes from "prop-types";
import Controller from "./Controller.js";
import Details from "./Details.js";
import Queue from "./Queue.js";
import Cover from "./Cover.js";
import SongGrid from "./SongGrid.js";
import SomeButton from "./SomeButton.js";

class PlayerComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="left">
          <Cover image={this.props.currentSong["artwork_url"]} />
          <Details currentSong={this.props.currentSong} />
          <Controller
            currentSong={this.props.currentSong}
            nextSong={this.props.nextSong}
            filtered={this.props.filtered}
          />
        </div>
        <div className="right">
          <Queue songs={this.props.songs} />
        </div>
        <div>
          <SongGrid
            songs={this.props.initialSongs}
            addSongToQueue={this.props.addSongToQueue}
          />
          <SomeButton></SomeButton>
        </div>
      </div>
    );
  }
}

PlayerComponent.propTypes = {
  songs: PropTypes.object.isRequired,
  currentSong: PropTypes.object.isRequired,
  nextSong: PropTypes.func.isRequired,
  filtered: PropTypes.func.isRequired,
  initialSongs: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  addSongToQueue: PropTypes.func.isRequired
};

export default PlayerComponent;
