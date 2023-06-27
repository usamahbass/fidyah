import { SET_APP_CURRENCY, SET_APP_THEME, SET_PAYABLE_HAID } from "./types";

export const setAppTheme = (appTheme) => ({
  type: SET_APP_THEME,
  payload: appTheme,
});

export const setAppCurrency = (appCurrency) => ({
  type: SET_APP_CURRENCY,
  payload: appCurrency,
});

export const setPayableHaid = (payableHaid) => ({
  type: SET_PAYABLE_HAID,
  payload: payableHaid,
});
