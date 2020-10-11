import { FETCH_AVATAR, RESET_AVATAR } from 'State/Actions/Types';

const INITIALSTATE = {
  avatarData: {},
};

export default (state = INITIALSTATE, actions) => {
  switch (actions.type) {
    case FETCH_AVATAR:
      return { ...state, avatarData: actions.payload };
    case RESET_AVATAR:
      return INITIALSTATE;
    default:
      return state;
  }
};
