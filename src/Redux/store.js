import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./auth/reducer";
import { flatReducer } from "./Flat/reducer";
import { residenceReducer } from "./Residence/reducer";

const rootReducer = combineReducers({
  user: authReducer,
  flat: flatReducer,
  residence: residenceReducer
});
const loggerMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  next(action);
};

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);
