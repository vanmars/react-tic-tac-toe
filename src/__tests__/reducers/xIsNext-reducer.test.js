import xIsNextReducer from '../../reducers/xIsNext-reducer';

describe('xIsNextReducer', () => {
  test('Should succesfully test return state if no action is given', () => {
    expect(xIsNextReducer(false, {type: null})).toEqual(false)
  });
})