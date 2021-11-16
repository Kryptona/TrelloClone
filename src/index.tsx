import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import {createTrelloStore} from "./store/rootStore";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_CASH':
        return {...state, cash: state.cash + action.payload}
    case 'GET_CASH':
        return {...state, cash: state.cash - action.payload}
    default:
      return state;
  }
};

const store = createTrelloStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
