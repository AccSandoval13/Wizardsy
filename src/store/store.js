import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
