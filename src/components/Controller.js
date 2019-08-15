import React from "react";
import ControllerComponent from "./ControllerComponent.js";

class Controller extends React.Component {
  constructor() {
    super();
    this.state = {
      playing: false
    };
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "player-bundle.js";
    if (this.props.filtered) script.src = "../../player-bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentSong !== prevProps.currentSong) {
      if (this.state.playing) window.play(this.props.currentSong["url"]);
      else window.pause();
    }
  }

  togglePlay() {
    if (this.state.playing) window.pause();
    else window.play(this.props.currentSong["url"]);
    this.setState({ playing: !this.state.playing });
  }

  render() {
    return (
        <ControllerComponent
          togglePlay={this.togglePlay}
          nextSong={this.props.nextSong}
          playing={this.state.playing}
        />
    );
  }
}

export default Controller;
