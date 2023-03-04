import * as type from "../types";

const initialState = {
  notes: [],
  message: "",
  note: {},
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_NOTE_SUCCESS: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case type.GET_NOTE_LIST: {
      return {
        ...state,
        notes: action.payload,
      };
    }
    case type.GET_NOTE_BY_ID_SUCCESS: {
      return {
        ...state,
        note: action.payload,
      };
    }
    case type.REMOVE_NOTE_SUCCESS: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case type.UPDATE_NOTE_BY_ID: {
      return {
        ...state,
        notes: action.payload,
      };
    }
    case type.GET_COLOR_BY_NOTE_SUCCESS: {
      return {
        ...state,
        notes: action.payload,
      };
    }
    case type.REQUEST_ERROR: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export { noteReducer };
