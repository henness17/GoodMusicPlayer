import React from 'react';
import SoundCloudAudio from 'soundcloud-audio'

class ControllerComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    //const player = new SoundCloudAudio('95f22ed54a5c297b1c41f72d713623ef');

    return (
      <div>
        <button onClick={() => console.log("Playing: " + this.props.currentSong["url"])}>
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