import axios from "axios";

export const AUTH_LOGIN = "AUTH_LOGIN";
export const LOGIN_LOADING = "LOGIN_LOADING ";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginLoading = (status) => ({
  type: LOGIN_LOADING,
  payload: status
});
export const loginError = (status) => ({ type: LOGIN_ERROR, payload: status });
export const authLogin = (user) => ({ type: AUTH_LOGIN, payload: user });

export const authLoginfireBtn = (body) => async (dispatch) => {
  dispatch(loginLoading(true));
  try {
    let user = await axios.post("http://localhost:8080/auth/login", body);
    let { data } = await user;
    console.log(data);
    dispatch(loginLoading(false));
    dispatch(loginError(false));
    dispatch(authLogin(data));
    localStorage.setItem("manager", JSON.stringify(data));
  } catch (err) {
    console.log(err.message);
    dispatch(loginLoading(false));
    dispatch(loginError(true));
  }
};
