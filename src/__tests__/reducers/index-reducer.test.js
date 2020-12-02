import rootReducer from '../../reducers/index';
import xIsNextReducer from '../../reducers/xIsNext-reducer';
import { createStore }  from 'redux';
import historyReducer from '../../reducers/history-reducer';
import stepNumberReducer from '../../reducers/stepNumber-reducer'


describe('rootReducer', () => {
  let store = createStore(rootReducer)

  test('should return default state if no action type given', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      xIsNext: true,
      history: [{ squares: [ null, null, null, null, null, null, null, null, null] }],
      stepNumber: 0
    })
  });

  test('Check that initial state of historyReducer matches root reducer', () => {
    expect(store.getState().history).toEqual(historyReducer(undefined, {type: null}))
  });

  test('Check that initial state of xIsNextReducer matches root reducer', () => {
    expect(store.getState().xIsNext).toEqual(xIsNextReducer(undefined, {type: null}));
  });

  test('Check that initial state of stepNumberReducer matches root reducer', () => {
      expect(store.getState().stepNumber).toEqual(stepNumberReducer(undefined, {type:null}));
  })

  test('Check that ADD_BOARD action works for historyReducer and the rootReducer', () => {
      const action = {
        type: 'ADD_BOARD',
        squares: [
          'X', null, null,
          null, null, null,
          null, null, null
        ]
      };
      store.dispatch(action);
      expect(store.getState().history).toEqual(historyReducer(undefined, action));
  });
  
  test('Check TOGGLE action works for xIsNext and root reducer', () => {
    const action = {
      type: 'TOGGLE'
    }
    store.dispatch(action);
    expect(store.getState().xIsNext).toEqual(xIsNextReducer(undefined, action));
  });

});