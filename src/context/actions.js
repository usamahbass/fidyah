import {
  SET_APP_CURRENCY,
  SET_APP_THEME,
  SET_PAYABLE_HAID,
  SET_PAYABLE_ILLNESS,
  SET_PAYABLE_PREGNANCY,
} from "./types";

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

export const setPayableIllness = (payableIllness) => ({
  type: SET_PAYABLE_ILLNESS,
  payload: payableIllness,
});

export const setPayablePregNancy = (payablePregNancy) => ({
  type: SET_PAYABLE_PREGNANCY,
  payload: payablePregNancy,
});
