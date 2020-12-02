import stepNumberReducer from '../../reducers/stepNumber-reducer';

describe('stepNumberReducer', () => {
  test('Should return default state if no action type is recognize', () => {
    expect(stepNumberReducer(0, {type: null})).toEqual(0)
  })

test('should successfully add a step to the stepNumber state', () => {
    expect(stepNumberReducer(0, {type: 'ADD_STEP'})).toEqual(1)
  });

test('should successfully reset step to the stepNumber state', () => {
  const action = {
    type: 'RESET_STEP',
    step: 0
  }
  expect(stepNumberReducer(9, action)).toEqual(0)
  });
})
