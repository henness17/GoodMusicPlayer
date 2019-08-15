import React from "react";

class SongGridItemComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.song != undefined) {
      return (
        <img
          className="gridItem"
          src={this.props.song["artwork_url"]}
          onMouseOver={() => this.props.onMouseOver()}
          onMouseOut={() => this.props.onMouseOut()}
          onClick={() => this.props.addSongToQueue(this.props.song)}
        />
      );
    } else {
      return <div></div>;
    }
  }
}

export default SongGridItemComponent;
