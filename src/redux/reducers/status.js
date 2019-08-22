import { SET_STATUS } from "../actionTypes.js";
import { STATUS } from "../../constants.js";

const initialState = STATUS.INCOMPLETE;

function status(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS: {
      return action.payload.status;
    }
    default: {
      return state;
    }
  }
};

export default status;
