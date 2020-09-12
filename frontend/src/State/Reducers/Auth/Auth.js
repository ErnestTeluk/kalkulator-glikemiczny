import { AUTH_USER, AUTH_ERROR, RESET_STATE } from 'State/Actions/Types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_STATE:
      return INITIAL_STATE;
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
