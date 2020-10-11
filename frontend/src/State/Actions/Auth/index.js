import ServerApi from 'Apis/ServerApi';
import {
  AUTH_USER,
  AUTH_ERROR,
  RESET_STATE,
  RESET_USER_DATA,
  RESET_AVATAR,
} from 'State/Actions/Types';
import { navigate } from '@reach/router';

export const SignIn = (formProps) => async (dispatch) => {
  try {
    const response = await ServerApi.post('/signin', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    navigate('/dashboard');
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Błędne dane logowania' });
  }
};

export const SignUp = (formProps) => async (dispatch) => {
  try {
    const response = await ServerApi.post('/signup', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    navigate('/dashboard');
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email w użyciu' });
  }
};

export const SignOut = () => (dispatch) => {
  dispatch({ type: RESET_STATE });
  dispatch({ type: RESET_USER_DATA });
  dispatch({ type: RESET_AVATAR });
  localStorage.removeItem('token');
};
