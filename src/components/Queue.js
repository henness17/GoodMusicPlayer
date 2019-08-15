import React from "react";
import QueueComponent from "./QueueComponent.js";

class Queue extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <QueueComponent songs={this.props.songs} />;
  }
}

export default Queue;
