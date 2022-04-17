import { ADD_FLAT, FLAT_LOADING } from "./action";

const initState = {
  flat: [],
  loading: false,
  error: false,
  totalPage: 0
};

export const flatReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_FLAT:
      return {
        ...store,
        flat: [...payload.flat],
        totalPage: payload.totalPage
      };
    case FLAT_LOADING:
      return { ...store, loading: payload };
    default:
      return store;
  }
};
