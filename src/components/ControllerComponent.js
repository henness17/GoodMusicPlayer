import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';

class ControllerComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.play()}>
          Play
        </button>
        <button onClick={() => console.log("Pausing: " + this.props.currentSong["url"])}>
          Pause
        </button>
        <button onClick={() => this.props.nextSong()}>
          >>
        </button>
      </div>
    );
  }
}

export default ControllerComponent;