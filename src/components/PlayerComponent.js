import React from "react";
import Controller from "./Controller.js";
import Details from "./Details.js";
import Queue from "./Queue.js";
import Cover from "./Cover.js";
import SongGrid from "./SongGrid.js";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class PlayerComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const leftStyle = {
      float: "left",
      textAlign: "center",
      marginRight: "20px",
      width: "350px"
    };
    const rightStyle = {
      float: "left",
      width: "500px"
    };

    return (
      <div>
        <div style={leftStyle}>
          <Cover image={this.props.currentSong["artwork_url"]} />
          <Details currentSong={this.props.currentSong} />
          <Controller
            currentSong={this.props.currentSong}
            nextSong={this.props.nextSong}
            filtered={this.props.filtered}
          />
        </div>
        <div style={rightStyle}>
          <Queue songs={this.props.songs} />
        </div>
        <div>
          <SongGrid
            songs={this.props.initialSongs}
            addSongToQueue={this.props.addSongToQueue}
          />
        </div>
      </div>
    );
  }
}

export default PlayerComponent;
