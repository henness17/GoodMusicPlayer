import React from 'react';
import ControllerComponent from './ControllerComponent.js'

class Controller extends React.Component {
  constructor() {
    super();
  }


  componentDidMount() {
    // Would attach a script to the document here for the player (which would be in the public folder).
    // Then pass the component () => window.play().
    // The SoundCloud stream API is not working for some reason.

    const script = document.createElement("script");
    script.src = "player-bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    console.log((this.props.currentSong["url"]));
    return (
      <div>
        <ControllerComponent 
          currentSong={this.props.currentSong} 
          play={() => window.play(this.props.currentSong["url"])} 
          nextSong={() => this.props.nextSong()}
        />
      </div>
    );
  }
}

export default Controller;