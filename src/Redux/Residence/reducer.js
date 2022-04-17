import { ADD_RESIDENCE, RESIDENCE_LOADING } from "./action";

const initState = {
  residence: [],
  loading: false,
  error: false
};

export const residenceReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_RESIDENCE:
      return {
        ...store,
        residence: [...payload]
      };
    case RESIDENCE_LOADING:
      return { ...store, loading: payload };
    default:
      return store;
  }
};
