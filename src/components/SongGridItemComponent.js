import React from "react";
import PropTypes from "prop-types";

class SongGridItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "gridItem"
    };
  }

  mouseOver() {
    this.props.onMouseOver();
    this.setState({ className: "gridItemPlaying" });
  }

  mouseOut() {
    this.props.onMouseOut();
    this.setState({ className: "gridItem" });
  }

  render() {
    if (this.props.song !== undefined) {
      return (
        <img
          alt="Artwork"
          className={this.state.className}
          src={this.props.song["artwork_url"]}
          onMouseOver={() => this.mouseOver()}
          onMouseOut={() => this.mouseOut()}
          onClick={() => this.props.addSongToQueue(this.props.song)}
        />
      );
    } else {
      return <div></div>;
    }
  }
}

SongGridItemComponent.propTypes = {
  song: PropTypes.object.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  addSongToQueue: PropTypes.func.isRequired
};

export default SongGridItemComponent;
