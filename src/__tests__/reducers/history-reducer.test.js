import historyReducer from '../../reducers/history-reducer';

describe ('historyReducer', () => {
  // Test for no action
test('shouyld return default state if there is no action type passed into the reducer', () => {
    expect(historyReducer({}, {type:null})).toEqual({});
  });
})