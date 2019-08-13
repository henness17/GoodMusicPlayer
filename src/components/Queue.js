import React from "react";
import QueueComponent from "./QueueComponent.js";

class Queue extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <QueueComponent songs={this.props.songs} />
      </div>
    );
  }
}

export default Queue;
