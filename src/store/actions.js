// actions.js
export const SHOW_SIGNUP = 'SHOW_SIGNUP';
export const HIDE_SIGNUP = 'HIDE_SIGNUP';

export function showSignup() {
  return { type: SHOW_SIGNUP };
}

export function hideSignup() {
  return { type: HIDE_SIGNUP };
}
