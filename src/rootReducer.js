// Here we combine all the reducers into one root reducer 
// And we export it so that it can be imported into other files
import { combineReducers } from 'redux';
import signupReducer from './store/signupReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
});

export default rootReducer;
