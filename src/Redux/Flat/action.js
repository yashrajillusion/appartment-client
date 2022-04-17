import axios from "axios";

export const ADD_FLAT = "ADD_FLAT";
export const GET_ALL_FLAT = "GET_ALL_FLAT";
export const FLAT_LOADING = "FLAT_LOADING";
export const FLAT_ERROR = "FLAT_ERROR";

export const addflat = (flat) => ({
  type: ADD_FLAT,
  payload: flat
});
export const flatLoading = (status) => ({
  type: FLAT_LOADING,
  payload: status
});
export const flatError = (status) => ({
  type: FLAT_ERROR,
  payload: status
});

export const getAllflat = (page, name, value) => async (dispatch) => {
  try {
    console.log(value);
    dispatch(flatLoading(true));
    let res = await axios.get(
      `https://appartmentserver.herokuapp.com/flat?page=${page}&type=${value}`
    );
    let { data } = res;
    dispatch(addflat(data));
    dispatch(flatLoading(false));
    flatError(false);
  } catch (err) {
    console.log(err.message);
    dispatch(flatLoading(false));
    flatError(true);
  }
};

export const deleteflat = (id) => async (dispatch) => {
  try {
    dispatch(flatLoading(true));
    let res = await axios.delete(`https://appartmentserver.herokuapp.com/flat/${id}`);
    dispatch(getAllflat());
  } catch (err) {
    console.log(err.message);
    dispatch(flatLoading(false));
  }
};

export const addflatToDb = (flat) => async (dispatch) => {
  try {
    dispatch(flatLoading(true));
    await axios.post("https://appartmentserver.herokuapp.com/flat", flat);
    dispatch(flatLoading(false));
    dispatch(getAllflat());
  } catch (err) {
    console.log(err.message);
    dispatch(flatLoading(false));
  }
};

export const Editflattodb = (flat, id) => async (dispatch) => {
  try {
    dispatch(flatLoading(true));
    await axios.patch(`https://appartmentserver.herokuapp.com/flat/${id}`, flat);
    dispatch(flatLoading(false));
    dispatch(getAllflat());
  } catch (err) {
    console.log(err.message);
    dispatch(flatLoading(false));
  }
};
