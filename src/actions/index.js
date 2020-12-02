import * as c from './ActionTypes';

export const addBoard = (squares) => ({
  type: c.ADD_BOARD,
  squares: squares
})

export const deleteBoard = id => ({
  type: c.DELETE_BOARD,
  stepNumber: id
})

export const toggle = () => ({
  type: c.TOGGLE
})

export const addStep = () => ({
  type: c.ADD_STEP
})

export const resetStep = (step) => ({
  type: c.RESET_STEP,
  step: step
})