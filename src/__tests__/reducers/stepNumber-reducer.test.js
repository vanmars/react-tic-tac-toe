import stepNumberReducer from '../../reducers/stepNumber-reducer';

describe('stepNumberReducer', () => {
  test('Should return default state if no action type is recognize', () => {
    expect(stepNumberReducer(0, {type: null})).toEqual(0)
  })
})
