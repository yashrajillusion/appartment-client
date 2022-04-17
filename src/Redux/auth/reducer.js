import { AUTH_LOGIN, LOGIN_ERROR, LOGIN_LOADING } from "./action";

const initStore = {
  loading: false,
  error: false,
  user: {}
};
export const authReducer = (store = initStore, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN:
      return { ...store, user: { ...payload } };
    case LOGIN_LOADING:
      return { ...store, loading: payload };
    case LOGIN_ERROR:
      return { ...store, error: payload };
    default:
      return store;
  }
};
