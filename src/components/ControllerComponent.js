import React from "react";
import PropTypes from "prop-types";

class ControllerComponent extends React.Component {
  render() {
    var playButtonText = "Play";
    if (this.props.playing) playButtonText = "Pause";

    return (
      <div>
        <button onClick={() => this.props.togglePlay()}>
          {playButtonText}
        </button>
        <button onClick={() => this.props.nextSong()}>>></button>
      </div>
    );
  }
}

ControllerComponent.propTypes = {
  togglePlay: PropTypes.func.isRequired,
  nextSong: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired
};

export default ControllerComponent;
