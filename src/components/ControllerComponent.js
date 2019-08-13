import React from "react";
import SoundCloudAudio from "soundcloud-audio";

class ControllerComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const playButtonText = "Play";
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

export default ControllerComponent;
