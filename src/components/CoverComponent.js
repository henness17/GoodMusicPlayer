import React from 'react';

class CoverComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src={this.props.image} width="300"/>
      </div>
    );
  }
}

export default CoverComponent;