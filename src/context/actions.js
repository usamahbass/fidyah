import { SET_APP_CURRENCY, SET_APP_THEME } from "./types";

export const setAppTheme = (appTheme) => ({
  type: SET_APP_THEME,
  payload: appTheme,
});

export const setAppCurrency = (appCurrency) => ({
  type: SET_APP_CURRENCY,
  payload: appCurrency,
});
