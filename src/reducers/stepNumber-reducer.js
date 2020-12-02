import * as c from './../actions/ActionTypes';

export default (state = 0, action) => {
  switch(action.type) {
    case c.ADD_STEP:
      return state + 1;
    case c.RESET_STEP:
      return action.step;
    default:
      return state;
  }
};