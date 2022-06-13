import Axios from "axios";

export const fetchUsers = () => async (dispatch) => {
  dispatch({
    type: "FETCH_USERS_REQUEST",
  });
  try {
    const response1 = await Axios.get(`https://reqres.in/api/users?page=1`);
    const response2 = await Axios.get(`https://reqres.in/api/users?page=2`);
    const response = [...response1.data.data, ...response2.data.data];
    console.log(response);
    dispatch({
      type: "FETCH_USERS_SUCCESS",
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_USERS_FAILURE",
      error,
    });
  }
};
