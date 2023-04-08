import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createRoot } from 'react-dom';
import App from './App';
import rootReducer from './rootReducer'; 
const store = createStore(rootReducer); // create your Redux store

const root = document.getElementById('root');

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
