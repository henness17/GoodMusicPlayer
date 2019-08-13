import React from "react";
import PlayerComponent from "./PlayerComponent.js";

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      songs: {},
      currentSong: {}
    };
  }

  componentDidMount() {
    this.fetchSongs();
  }

  nextSong() {
    if (this.state.songs[0] !== undefined) {
      this.setState({ currentSong: this.state.songs[0] });
      var newSongs = this.shiftSongs();
      this.setState({ songs: newSongs });
    }
  }

  render() {
    const wrapperStyle = {
      display: "flex",
      justifyContent: "center"
    };

    if (!this.state.loading) {
      return (
        <div style={wrapperStyle}>
          <PlayerComponent
            songs={this.state.songs}
            currentSong={this.state.currentSong}
            nextSong={() => this.nextSong()}
          />
        </div>
      );
    } else {
      return (
        <div style={wrapperStyle}>
          <h1>Loading...</h1>
        </div>
      );
    }
  }

  fetchSongs() {
    this.setState({ loading: true });
    var newSongs;
    fetch("https://goodmusicapi.herokuapp.com/songs")
      .then(response => response.json())
      .then(fetchedSongs => (newSongs = fetchedSongs))
      .then(() =>
        this.setState({
          currentSong: newSongs[0],
          songs: newSongs
        })
      )
      .then(() => this.shiftSongs())
      .then(shiftedSongs =>
        this.setState({
          songs: shiftedSongs,
          loading: false
        })
      );
  }

  shiftSongs() {
    const songTitles = Object.keys(this.state.songs).map(
      key => this.state.songs[key]["title"]
    );
    songTitles.shift();
    const songArtists = Object.keys(this.state.songs).map(
      key => this.state.songs[key]["artist"]
    );
    songArtists.shift();
    const songUrls = Object.keys(this.state.songs).map(
      key => this.state.songs[key]["url"]
    );
    songUrls.shift();
    const songArtworkUrls = Object.keys(this.state.songs).map(
      key => this.state.songs[key]["artwork_url"]
    );
    songArtworkUrls.shift();
    const songIds = Object.keys(this.state.songs).map(
      key => this.state.songs[key]["_id"]
    );
    songIds.shift();
    const newSongs = Array(songTitles.length).fill({});
    var i = 0;
    songTitles.forEach(function() {
      newSongs[i] = {
        title: songTitles[i],
        artist: songArtists[i],
        url: songUrls[i],
        artwork_url: songArtworkUrls[i],
        _id: songIds[i]
      };
      i++;
    });
    return newSongs;
  }
}

export default Player;
