import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <Game /> */}
  </Provider>,
  document.getElementById('root')
);