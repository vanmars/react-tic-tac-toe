import rootReducer from '../../reducers/index';
import xIsNextReducer from '../../reducers/xIsNext-reducer';
import { createStore }  from 'redux';
import historyReducer from '../../reducers/history-reducer';


describe('rootReducer', () => {
  let store = createStore(rootReducer)

  test('should return default state if no action type given', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      xIsNext: true,
      history: [{ squares: [ null, null, null, null, null, null, null, null, null] }]
    })
  });

  test('Check that initial state of historyReducer matches root reducer', () => {
    expect(store.getState().history).toEqual(historyReducer(undefined, {type: null}))
  });

  test('Check that initial state of xIsNextReducer matches root reducer', () => {
    expect(store.getState().xIsNext).toEqual(xIsNextReducer(undefined, {type: null}));
  });

});