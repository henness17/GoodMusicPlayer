import React from "react";
import Player from "./Player.js";

class App extends React.Component {
  render() {
    var goodMusicApiUrl = "https://goodmusicapi.herokuapp.com/songs/";
    if (this.props.match.params.genre !== undefined)
      goodMusicApiUrl += "genre/" + this.props.match.params.genre;
    else if (this.props.match.params.artistName !== undefined)
      goodMusicApiUrl += "artist/" + this.props.match.params.artistName;
    return (
      <div className="App">
        <Player goodMusicApiUrl={goodMusicApiUrl} />
      </div>
    );
  }
}

export default App;
