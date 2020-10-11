import jwt_decode from 'jwt-decode';
import ServerApi from 'Apis/ServerApi';
import { FETCH_USER_DATA } from 'State/Actions/Types';

// eslint-disable-next-line consistent-return
export const FetchUserData = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    const decode = jwt_decode(token);
    const id = `${decode.sub}`;
    const response = await ServerApi.get(`/fetchuserdata/${id}`, {
      headers: { Authorization: token },
    });
    dispatch({ type: FETCH_USER_DATA, payload: response.data });
  } catch (error) {
    return null;
  }
};
