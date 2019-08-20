import React from "react";
import PropTypes from "prop-types";

class SubmitComponent extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.props.title}
            onChange={this.props.handleChange}
          />
          <br />
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            value={this.props.artist}
            onChange={this.props.handleChange}
          />
          <br />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={this.props.genre}
            onChange={this.props.handleChange}
          />
          <br />
          <input
            type="text"
            name="url"
            placeholder="Url"
            value={this.props.url}
            onChange={this.props.handleChange}
          />
          <br />
          <input
            type="text"
            name="artwork_url"
            placeholder="Artwork Url"
            value={this.props.artwork_url}
            onChange={this.props.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

SubmitComponent.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  artwork_url: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SubmitComponent;
