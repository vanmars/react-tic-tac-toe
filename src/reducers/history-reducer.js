import * as c from './../actions/ActionTypes';

export default (state = [{squares: Array(9).fill(null)}], action) => {
  const { type, squares } = action;
  switch(type) {

    case c.ADD_BOARD:
      const newObject = {
        squares: squares
      }
      return Array(...state, newObject)

    case c.DELETE_BOARD:
      const newState = state.slice(0, action.stepNumber + 1)
      return newState;

    default:
      return state;  
  };
}