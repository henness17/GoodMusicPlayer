import React from 'react';
import ControllerComponent from './ControllerComponent.js'

class Controller extends React.Component {
  constructor() {
    super();
  }


  componentDidMount() {
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