import { SET_LOADING } from 'State/Actions/Types';

const INITIALSTATE = {
  isLoading: true,
};

export default (state = INITIALSTATE, actions) => {
  switch (actions.type) {
    case SET_LOADING: {
      return { ...state, isLoading: actions.payload };
    }
    default:
      return state;
  }
};
