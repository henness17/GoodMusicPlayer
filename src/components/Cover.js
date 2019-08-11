import React from 'react';
import CoverComponent from './CoverComponent.js'

class Cover extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <CoverComponent image={this.props.image}/>
      </div>
    );
  }
}

export default Cover;