import {
  RESET_STORE_DATA,
  SET_ACTIVE_INDEX,
  SET_APP_CURRENCY,
  SET_APP_THEME,
  SET_LOADING_CALCULATE_HAID_FIDYAH,
  SET_LOADING_CALCULATE_ILLNESS_FIDYAH,
  SET_LOADING_CALCULATE_PREGNANCY_FIDYAH,
  SET_LOADING_CREATE_PAYMENT,
  SET_PAYABLE_HAID,
  SET_PAYABLE_ILLNESS,
  SET_PAYABLE_PREGNANCY,
  SET_PAYMENT_TYPE,
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

export const setPaymentType = (paymentType) => ({
  type: SET_PAYMENT_TYPE,
  payload: paymentType,
});

export const setLoadingCreatePayment = (createPayment) => ({
  type: SET_LOADING_CREATE_PAYMENT,
  payload: createPayment,
});

export const resetStoreData = (resetStoreData) => ({
  type: RESET_STORE_DATA,
  payload: resetStoreData,
});

export const setLoadingCalculateHaidFidyah = (loadingCalculateFidyah) => ({
  type: SET_LOADING_CALCULATE_HAID_FIDYAH,
  payload: loadingCalculateFidyah,
});

export const setLoadingCalculateIllnessFidyah = (loadingCalculateFidyah) => ({
  type: SET_LOADING_CALCULATE_ILLNESS_FIDYAH,
  payload: loadingCalculateFidyah,
});

export const setLoadingCalculatePregnancyFidyah = (loadingCalculateFidyah) => ({
  type: SET_LOADING_CALCULATE_PREGNANCY_FIDYAH,
  payload: loadingCalculateFidyah,
});

export const setActiveIndex = (activeIndex) => ({
  type: SET_ACTIVE_INDEX,
  payload: activeIndex,
});
