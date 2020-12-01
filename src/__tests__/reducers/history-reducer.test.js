import historyReducer from '../../reducers/history-reducer';

describe ('historyReducer', () => {

  let action;
  // squares: Array(9).fill(null),
  const boardData = {
    squares: [
      null, null, null,
      null, null, null,
      null, null, null
    ]
  };
  // Test for adding a board to the history
  test('should successfully add a new board object to the history array', () => {
    const { squares } = boardData; 
    action = {
      type: 'ADD_BOARD',
      squares: squares
    };
    expect(historyReducer([], action)).toEqual([
      { squares: [ null, null, null, null, null, null, null, null, null]}
    ])
  })
  // Test for no action
test('should return default state if there is no action type passed into the reducer', () => {
    expect(historyReducer([], {type:null})).toEqual([]);
  });
})