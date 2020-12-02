import * as a from '../../actions';

describe('game actions', () => {

  it('addBoard should create ADD_BOARD action', () => {
      expect(a.addBoard({ squares: [ 'X', null, null, null, null, null, null, null, null]})).toEqual({
        type: 'ADD_BOARD',
        squares: [ 'X', null, null, null, null, null, null, null, null]
      });
  })
  // ADD_BOARD
  // DELETE_BOARD
  // TOGGLE
  // ADD_STEP
  // RESET_STEP
})