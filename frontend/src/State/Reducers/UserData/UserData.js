import { FETCH_USER_DATA, RESET_USER_DATA } from 'State/Actions/Types';

const INITIALSTATE = {
  userData: {},
};

export default (state = INITIALSTATE, actions) => {
  switch (actions.type) {
    case FETCH_USER_DATA:
      return { ...state, userData: actions.payload };
    case RESET_USER_DATA:
      return INITIALSTATE;
    default:
      return state;
  }
};
