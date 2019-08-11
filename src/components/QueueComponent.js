import React from 'react';

class QueueComponent extends React.Component {
  constructor() {
    super();
  }

  renderQueueItem(title, artist) {
    const key = title + artist;
    return (
      <li key={key}>{title} - {artist}</li>
    );
  }

  render() {
    const queueItems = Object.keys(this.props.songs)
      .map(key => this.renderQueueItem(this.props.songs[key]["title"], this.props.songs[key]["artist"]));
    return (
      <div>
          {queueItems}
      </div>
    );
  }
}

export default QueueComponent;