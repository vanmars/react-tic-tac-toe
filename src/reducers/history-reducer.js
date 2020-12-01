export default (state = {}, action) => {
  const { type, squares } = action;
  switch(type) {
    case 'ADD_BOARD':
      const newObject = {
        squares: squares
      }
      return Array(...state, newObject)
    default:
      return state;
  };
}