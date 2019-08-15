import React from "react";
import SubmitComponent from "./SubmitComponent.js";

class Submit extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      artist: "",
      genre: "",
      url: "",
      artwork_url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    fetch("https://goodmusicapi.herokuapp.com/songs/song/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        artist: this.state.artist,
        genre: this.state.genre,
        url: this.state.url,
        artwork_url: this.state.artwork_url
      })
    });
    event.preventDefault();
  }

  render() {
    return (
      <SubmitComponent
        title={this.state.title}
        artist={this.state.artist}
        url={this.state.url}
        artwork_url={this.state.artwork_url}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Submit;
