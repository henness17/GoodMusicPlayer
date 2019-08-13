import React from "react";
import Controller from "./Controller.js";
import Details from "./Details.js";
import Queue from "./Queue.js";
import Cover from "./Cover.js";

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
            nextSong={() => this.props.nextSong()}
          />
        </div>
        <div style={rightStyle}>
          <Queue songs={this.props.songs} />
        </div>
      </div>
    );
  }
}

export default PlayerComponent;
