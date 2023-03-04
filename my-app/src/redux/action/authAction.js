import * as type from "../types";
import axios from "axios";

const url = "http://localhost:4000";

export const createNote = (noteInfo) => {
  return async (dispatch) => {
    return await axios
      .post(`${url}/create-note`, noteInfo)
      .then(({ data }) => {
        return dispatch({
          type: type.CREATE_NOTE_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        return dispatch({
          type: type.REQUEST_ERROR,
          payload: e.response,
        });
      });
  };
};

export const getNotesData = () => {
  return async (dispatch) => {
    return await axios
      .get(`${url}/get-notes`)
      .then(({ data }) => {
        return dispatch({
          type: type.GET_NOTE_LIST,
          payload: data,
        });
      })
      .catch((e) => {
        return dispatch({
          type: type.REQUEST_ERROR,
          payload: e.response,
        });
      });
  };
};

export const getNoteById = (_id) => {
  return async (dispatch) => {
    return await axios
      .get(`${url}/get-notebyId/${_id}`)
      .then(({ data }) => {
        return dispatch({
          type: type.GET_NOTE_BY_ID_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        return dispatch({
          type: type.REQUEST_ERROR,
          payload: e.response,
        });
      });
  };
};

export const editNote = (id, noteInfo) => {
  return async (dispatch) => {
    return await axios
      .post(`${url}/update-note/${id}`, noteInfo)
      .then(({ data }) => {
        return dispatch({
          type: type.UPDATE_NOTE_BY_ID,
          payload: data,
        });
      })
      .catch((e) => {
        return dispatch({
          type: type.REQUEST_ERROR,
          payload: e.response,
        });
      });
  };
};

export const removeNote = (_id) => {
  return async (dispatch) => {
    return await axios
      .delete(`${url}/delete-note/${_id}`)
      .then(({ data }) => {
        return dispatch({
          type: type.REMOVE_NOTE_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        return dispatch({
          type: type.REQUEST_ERROR,
          payload: e.response,
        });
      });
  };
};

export const getBoxbyColor = (text) => {
  return async (dispatch) => {
    return await axios
      .post(`${url}/get-colorbyID`, text)
      .then(({ data }) => {
        return dispatch({
          type: type.GET_COLOR_BY_NOTE_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        return dispatch({
          type: type.REQUEST_ERROR,
          payload: e.response,
        });
      });
  };
};
