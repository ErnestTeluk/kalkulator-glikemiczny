import ServerApi from 'Apis/ServerApi';
import { FETCH_AVATAR, SET_LOADING } from 'State/Actions/Types';

export const FetchAvatar = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await ServerApi.get(`/fetchavatar/${id}`, {
    headers: { Authorization: token },
  });
  dispatch({ type: FETCH_AVATAR, payload: response.data });
  dispatch({ type: SET_LOADING, payload: false });
};
