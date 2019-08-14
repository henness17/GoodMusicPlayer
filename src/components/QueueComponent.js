import React from "react";

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

export default QueueComponent;
