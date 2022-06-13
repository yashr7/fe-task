const initState = {
  items: [],
  loading: false,
  error: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
