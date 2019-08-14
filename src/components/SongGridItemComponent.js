import React from "react";

class SongGridItemComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "1px solid rgba(0, 0, 0, 0.8)",
      padding: "10px",
      textAlign: "center",
      height: "100px",
      width: "100px"
    };

    if (this.props.song != undefined) {
      return (
        <img
          style={style}
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
