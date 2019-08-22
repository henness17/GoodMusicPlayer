import React from "react";
import { connect } from "react-redux";
import { setStatus } from "../redux/actions.js";
import { STATUS } from "../constants.js";

class SomeButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.setStatus(STATUS.COMPLETED)}>
          Complete me... { this.props.somePropName }
        </button>
      </div>
    );
  }
}

// This is used to assign state from the store to props
// of the component. Prop names are defined here.
const mapStateToProps = state => {
  return { somePropName: state.status };
};

// setStatus is being used as our mapDispatchToProps argument.
// mapDispatchToProps is used for dispatching actions to the store,
// which triggers state change. It can be a function or object.

export default connect(
  mapStateToProps,
  { setStatus }
)(SomeButton);
