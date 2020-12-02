import xIsNextReducer from '../../reducers/xIsNext-reducer';

describe('xIsNextReducer', () => {
  test('Should succesfully test return state if no action is given', () => {
    expect(xIsNextReducer(false, {type: null})).toEqual(false)
  });

  test('should toggle x is next state to true', () => {
    expect(xIsNextReducer(false, {type: 'TOGGLE'})).toEqual(true)
  });
})