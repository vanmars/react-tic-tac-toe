import xIsNextReducer from './xIsNext-reducer';
import historyReducer from './history-reducer';
import stepNumberReducer from './stepNumber-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  xIsNext: xIsNextReducer,
  history: historyReducer,
  // stepNumber: stepNumberReducer
});

export default rootReducer;