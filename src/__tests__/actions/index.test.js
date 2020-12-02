import * as a from '../../actions';
import * as c from '../../actions/ActionTypes';

describe('game actions', () => {

it('addBoard should create ADD_BOARD action', () => {
    expect(a.addBoard([ 'X', null, null, null, null, null, null, null, null])).toEqual({
      type: c.ADD_BOARD,
      squares: [ 'X', null, null, null, null, null, null, null, null]
    });
  })

it('deleteBoard should create DELETE_BOARD', () => {  
    expect(a.deleteBoard(1)).toEqual({
      type: c.DELETE_BOARD,
      stepNumber: 1
    });
  })

it('toggle should create TOGGLE action', () => {
    expect(a.toggle()).toEqual({
      type: c.TOGGLE
    });
  })

it('addStep should create ADD_STEP action', () => {
    expect(a.addStep()).toEqual({
      type: c.ADD_STEP
    });
  })
it('resetStep should create RESET_STEP action', () => {
    expect(a.resetStep(2)).toEqual({
      type: c.RESET_STEP,
      step: 2
    })
  })

})