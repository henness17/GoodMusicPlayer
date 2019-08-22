import { SET_STATUS } from "./actionTypes.js";

// These are our action creators.
// Passing this to connect within the function as a mapDispatchToProps function,
// it will automatically dispatch when it's called.

let nextTodoId = 0
export const setStatus = status => ({
  type: SET_STATUS,
  payload: { 
    id: ++nextTodoId,
    status
  }
});
