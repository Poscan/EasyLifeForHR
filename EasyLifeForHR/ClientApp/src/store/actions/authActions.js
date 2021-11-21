export const CHANGE_LOGIN = "CHANGE_LOGIN";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CHANGE_REMEMBER = "CHANGE_REMEMBER";
export const CHANGE_LOADING = "CHANGE_LOADING";
export const FETCH_LOGIN = "FETCH_LOGIN";

export const changeLogin = (value) => {
  return { type: CHANGE_LOGIN, value };
};

export const changePassword = (value) => {
  return { type: CHANGE_PASSWORD, value };
};

export const changeRemember = (value) => {
  return { type: CHANGE_REMEMBER, value };
};

export const changeLoading = (value, data) => {
  return { type: CHANGE_LOADING, value, data };
};

export const fetchLogin = (login, password) => {
  return { type: FETCH_LOGIN, login, password };
};
