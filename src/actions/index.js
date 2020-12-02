export const addBoard = (squares) => ({
  type: 'ADD_BOARD',
  squares: squares
})

export const deleteBoard = id => ({
  type: 'DELETE_BOARD',
  stepNumber: id
})

export const toggle = () => ({
  type: 'TOGGLE'
})

export const addStep = () => ({
  type: 'ADD_STEP'
})

export const resetStep = (step) => ({
  type: 'RESET_STEP',
  step: step
})