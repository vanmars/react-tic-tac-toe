import * as a from '../../actions';

describe('game actions', () => {

it('addBoard should create ADD_BOARD action', () => {
    expect(a.addBoard([ 'X', null, null, null, null, null, null, null, null])).toEqual({
      type: 'ADD_BOARD',
      squares: [ 'X', null, null, null, null, null, null, null, null]
    });
  })

it('deleteBoard should create DELETE_BOARD', () => {  
    expect(a.deleteBoard(1)).toEqual({
      type: 'DELETE_BOARD',
      stepNumber: 1
    });
  })

it('toggle should create TOGGLE action', () => {
    expect(a.toggle()).toEqual({
      type: 'TOGGLE'
    });
  })

it('addStep should create ADD_STEP action', () => {
    expect(a.addStep()).toEqual({
      type: 'ADD_STEP'
    });
  })
it('resetStep should create RESET_STEP action', () => {
    expect(a.resetStep(2)).toEqual({
      type: 'RESET_STEP',
      step: 2
    })
  })

})