import React from "react";
import PropTypes from "prop-types";

class CoverComponent extends React.Component {
  render() {
    return (
      <div>
        <img alt="Song Cover" src={this.props.image} width="300" />
      </div>
    );
  }
}

CoverComponent.propTypes = {
  image: PropTypes.string
};

export default CoverComponent;
