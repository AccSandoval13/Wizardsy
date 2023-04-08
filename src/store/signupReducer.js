import { SHOW_SIGNUP } from './types';

// Here we are defining the initial state of the signup reducer 
// And we are defining the action type that will be dispatched 
const initialState = {
  visible: false,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SIGNUP:
      return { ...state, visible: true };
    default:
      return state;
  }
};

export default signupReducer;
