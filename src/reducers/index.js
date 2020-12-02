import xIsNextReducer from './xIsNext-reducer';
import historyReducer from './history-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  xIsNext: xIsNextReducer,
  history: historyReducer
});

export default rootReducer;