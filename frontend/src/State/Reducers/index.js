import { combineReducers } from 'redux';

import Auth from 'State/Reducers/Auth/Auth';
import UserData from 'State/Reducers/UserData/UserData';
import Avatar from 'State/Reducers/Avatar/Avatar';
import Loading from 'State/Reducers/Loading/Loading';

export default combineReducers({
  Auth,
  Loading,
  UserData,
  Avatar,
});
