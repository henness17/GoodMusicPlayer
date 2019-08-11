import React from 'react';
import ControllerComponent from './ControllerComponent.js'

class Controller extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ControllerComponent currentSong={this.props.currentSong} nextSong={() => this.props.nextSong()}/>
      </div>
    );
  }
}

export default Controller;