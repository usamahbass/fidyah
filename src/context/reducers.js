import { SET_APP_CURRENCY, SET_APP_THEME } from "./types";

export const initialState = {
  theme: "light",
  currency: "rp",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_APP_THEME:
      return { ...state, theme: action.payload };
    case SET_APP_CURRENCY:
      return { ...state, currency: action.payload };
    default:
      return state;
  }
};
