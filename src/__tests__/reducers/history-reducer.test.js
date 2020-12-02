import historyReducer from '../../reducers/history-reducer';

describe ('historyReducer', () => {

  let action;

  const boardData = {
    squares: [
      'X', null, null,
      null, null, null,
      null, null, null
    ]
  };

  const currentState = [
    { squares: [ null, null, null, null, null, null, null, null, null]},
    { squares: [ 'X', null, null, null, null, null, null, null, null]},
    { squares: [ 'X', 'O', null, null, null, null, null, null, null]},
  ]


  // Test for adding a board to the history
  test('should successfully add a new board object to the history array', () => {
    const { squares } = boardData; 
    action = {
      type: 'ADD_BOARD',
      squares: squares
    };
    expect(historyReducer([{squares: Array(9).fill(null)}], action)).toEqual([
      { squares: [ null, null, null, null, null, null, null, null, null]},
      { squares: [ 'X', null, null, null, null, null, null, null, null]}
    ])
  })
  test("Should successfully delete a board", () => {
    action = { 
      type: 'DELETE_BOARD',
      stepNumber: 0
    }
    expect(historyReducer(currentState, action)).toEqual([
      { squares: [ null, null, null, null, null, null, null, null, null] }
    ]);
  })
  
  // Test for no action
test('should return default state if there is no action type passed into the reducer', () => {
    expect(historyReducer([], {type:null})).toEqual([]);
  });
})