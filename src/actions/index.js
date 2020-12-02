export const addBoard = (board) => ({
  type: 'ADD_BOARD',
  squares: board.squares
})

export const deleteBoard = id => ({
  type: 'DELETE_BOARD',
  stepNumber: id
})

export const toggle = () => ({
  type: 'TOGGLE'
})
// TOGGLE
// ADD_STEP
// RESET_STEP