import axios from "axios";

export const ADD_RESIDENCE = "ADD_RESIDENCE";
export const GET_ALL_RESIDENCE = "GET_ALL_RESIDENCE";
export const RESIDENCE_LOADING = "RESIDENCE_LOADING";
export const RESIDENCE_ERROR = "RESIDENCE_ERROR";

export const addresidence = (residence) => ({
  type: ADD_RESIDENCE,
  payload: residence
});
export const residenceLoading = (status) => ({
  type: RESIDENCE_LOADING,
  payload: status
});
export const residenceError = (status) => ({
  type: RESIDENCE_ERROR,
  payload: status
});

export const getAllresidence = (id) => async (dispatch) => {
  try {
    console.log(id);
    dispatch(residenceLoading(true));
    let res = await axios.get(
      `https://appartmentserver.herokuapp.com/resident?flatId=${id}`
    );
    let { data } = res;
    dispatch(addresidence(data));
    dispatch(residenceLoading(false));
    residenceError(false);
  } catch (err) {
    console.log(err.message);
    dispatch(residenceLoading(false));
    residenceError(true);
  }
};

export const deleteresidence = (id) => async (dispatch) => {
  try {
    dispatch(residenceLoading(true));
    let res = await axios.delete(
      `https://appartmentserver.herokuapp.com/residence/${id}`
    );
    dispatch(getAllresidence());
  } catch (err) {
    console.log(err.message);
    dispatch(residenceLoading(false));
  }
};

export const addresidenceToDb = (residence) => async (dispatch) => {
  try {
    dispatch(residenceLoading(true));
    await axios.post(
      "https://appartmentserver.herokuapp.com/residence",
      residence
    );
    dispatch(residenceLoading(false));
    dispatch(getAllresidence());
  } catch (err) {
    console.log(err.message);
    dispatch(residenceLoading(false));
  }
};

export const Editresidencetodb = (residence, id) => async (dispatch) => {
  try {
    dispatch(residenceLoading(true));
    await axios.patch(
      `https://appartmentserver.herokuapp.com/residence/${id}`,
      residence
    );
    dispatch(residenceLoading(false));
    dispatch(getAllresidence());
  } catch (err) {
    console.log(err.message);
    dispatch(residenceLoading(false));
  }
};
