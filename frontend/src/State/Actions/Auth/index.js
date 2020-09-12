import serverApi from 'apis/serverApi';
import { AUTH_USER, AUTH_ERROR, RESET_STATE } from 'state/actions/types';
import { navigate } from 'gatsby';

export const signin = (formProps) => async (dispatch) => {
  try {
    const response = await serverApi.post('/signin', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    navigate('/overview');
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Błędne dane logowania' });
  }
};

export const signup = (formProps) => async (dispatch) => {
  try {
    const response = await serverApi.post('/signup', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    navigate('/overview');
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email w użyciu' });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: RESET_STATE });
};
