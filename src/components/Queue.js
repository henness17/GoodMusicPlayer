import React from "react";
import PropTypes from "prop-types";
import QueueComponent from "./QueueComponent.js";

class Queue extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <QueueComponent songs={this.props.songs} />;
  }
}

Queue.propTypes = {
  songs: PropTypes.object.isRequired
};

export default Queue;
