import React from "react";

class SongGridItemComponent extends React.Component {
  constructor() {
    super();
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
    if (this.props.song != undefined) {
      return (
        <img
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

export default SongGridItemComponent;
