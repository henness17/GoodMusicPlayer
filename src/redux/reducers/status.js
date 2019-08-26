import { SET_STATUS } from "../actionTypes.js";

const initialState = 100;
var count = initialState;

function status(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS: {
      return ++count;
    }
    default: {
      return state;
    }
  }
};

export default status;
