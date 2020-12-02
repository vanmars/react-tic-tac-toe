export default (state = 0, action) => {
  switch(action.type) {
    case 'ADD_STEP':
      return state + 1;
    case 'RESET_STEP':
      return action.step;
    default:
      return state;
  }
};