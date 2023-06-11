import { SET_APP_THEME } from "./types";

export const initialState = {
  theme: "light",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_APP_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
