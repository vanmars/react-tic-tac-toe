import rootReducer from '../../reducers/index';
import xIsNextReducer from '../../reducers/xIsNext-reducer';

describe('rootReducer', () => {
  test('should return default state if no action type given', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      xIsNext: true,
      history: [{ squares: [ null, null, null, null, null, null, null, null, null] }]
    })
  })
})