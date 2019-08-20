import React from "react";
import PropTypes from "prop-types";

class QueueComponent extends React.Component {
  constructor() {
    super();
  }

  renderQueueItem(title, artist, url) {
    const key = title + artist;
    return (
      <li key={key}>
        {title} - {artist}
      </li>
    );
  }

  render() {
    const queueItems = Object.keys(this.props.songs).map(key =>
      this.renderQueueItem(
        this.props.songs[key]["title"],
        this.props.songs[key]["artist"],
        this.props.songs[key]["url"]
      )
    );
    return <div>{queueItems}</div>;
  }
}

QueueComponent.propTypes = {
  songs: PropTypes.object.isRequired
};

export default QueueComponent;
