export default (state = [{squares: Array(9).fill(null)}], action) => {
  const { type, squares } = action;
  switch(type) {

    case 'ADD_BOARD':
      const newObject = {
        squares: squares
      }
      return Array(...state, newObject)

    case 'DELETE_BOARD':
      return state;

    default:
      return state;  
  };
}