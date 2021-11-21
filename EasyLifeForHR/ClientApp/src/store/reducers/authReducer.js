const INITIAL_STATE_AUTH = {
  login: "",
  password: "",
  remember: false,
  loading: false,
  success: null,
};

export const authReducer = (state = INITIAL_STATE_AUTH, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN":
      return {
        ...state,
        login: action.value,
      };
    case "CHANGE_PASSWORD":
      return {
        ...state,
        password: action.value,
      };
    case "CHANGE_REMEMBER":
      return {
        ...state,
        remember: action.value,
      };
    case "CHANGE_LOADING":
      if (action.data === 1) {
        return {
          ...state,
          success: true,
          loading: action.value,
        };
      } else {
        return {
          ...state,
          success: false,
          loading: action.value,
        };
      }
    default:
      return state;
  }
};
