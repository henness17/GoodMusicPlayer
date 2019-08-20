import React from "react";
import PropTypes from "prop-types";
import PlayerComponent from "./PlayerComponent.js";

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      songs: {},
      currentSong: {},
      initialSongs: {}
    };
    this.nextSong = this.nextSong.bind(this);
    this.addSongToQueue = this.addSongToQueue.bind(this);
  }

  componentDidMount() {
    this.fetchSongs();
    this.setState({ initialSongs: this.state.songs });
  }

  nextSong() {
    if (this.state.songs[0] !== undefined) {
      this.setState({ currentSong: this.state.songs[0] });
      var newSongs = this.shiftSongs();
      this.setState({ songs: newSongs });
    }
  }

  addSongToQueue(song) {
    if (Object.keys(this.state.currentSong).length == 0) {
      this.setState({ currentSong: song });
    } else {
      var songs = this.state.songs;
      var index = Object.keys(this.state.songs).length;
      songs[index] = song;
      this.setState({ songs: songs });
    }
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="wrapper">
          <PlayerComponent
            songs={this.state.songs}
            currentSong={this.state.currentSong}
            nextSong={this.nextSong}
            filtered={() =>
              this.props.goodMusicApiUrl !=
              "https://goodmusicapi.herokuapp.com/songs/"
            }
            initialSongs={this.state.initialSongs}
            addSongToQueue={this.addSongToQueue}
          />
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <h1>Loading...</h1>
        </div>
      );
    }
  }

  fetchSongs() {
    this.setState({ loading: true });
    var newSongs;
    fetch(this.props.goodMusicApiUrl)
      .then(response => response.json())
      .then(fetchedSongs => (newSongs = fetchedSongs))
      .then(() =>
        this.setState({
          initialSongs: newSongs,
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

Player.propTypes = {
  goodMusicApiUrl: PropTypes.string.isRequired
};

export default Player;
