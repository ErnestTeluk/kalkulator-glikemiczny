import { SET_LOADING } from 'State/Actions/Types';

export const SetLoading = (status) => (dispatch) => {
  dispatch({ type: SET_LOADING, payload: status });
};
