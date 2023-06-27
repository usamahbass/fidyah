import {
  SET_APP_CURRENCY,
  SET_APP_THEME,
  SET_PAYABLE_HAID,
  SET_PAYABLE_ILLNESS,
} from "./types";

export const initialState = {
  theme: "light",
  currency: "$",
  payable: {
    haid: 0,
    illness: 0,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_THEME:
      return { ...state, theme: action.payload };
    case SET_APP_CURRENCY:
      return { ...state, currency: action.payload };
    case SET_PAYABLE_HAID:
      return { ...state, payable: { ...state.payable, haid: action.payload } };
    case SET_PAYABLE_ILLNESS:
      return {
        ...state,
        payable: { ...state.payable, illness: action.payload },
      };
    default:
      return state;
  }
};
