import { PAYMENT_TYPE } from "@fidyah/utils/constants";
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

export const initialState = {
  theme: "light",
  currency: "$",
  payable: {
    haid: 0,
    illness: 0,
    pregnancy: 0,
  },
  loading: {
    createPayment: false,
    calculateFidyah: {
      haid: false,
      illness: false,
      pregnancy: false,
    },
  },
  paymentType: PAYMENT_TYPE.QRIS,
  activeIndex: 0,
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
    case SET_PAYABLE_PREGNANCY:
      return {
        ...state,
        payable: { ...state.payable, pregnancy: action.payload },
      };
    case SET_PAYMENT_TYPE:
      return { ...state, paymentType: action.payload };
    case SET_LOADING_CREATE_PAYMENT:
      return {
        ...state,
        loading: { ...state.loading, createPayment: action.payload },
      };
    case RESET_STORE_DATA:
      return { state: initialState };
    case SET_LOADING_CALCULATE_HAID_FIDYAH:
      return {
        ...state,
        loading: {
          ...state.loading,
          calculateFidyah: {
            ...state.loading?.calculateFidyah,
            haid: action.payload,
          },
        },
      };
    case SET_LOADING_CALCULATE_ILLNESS_FIDYAH:
      return {
        ...state,
        loading: {
          ...state.loading,
          calculateFidyah: {
            ...state.loading?.calculateFidyah,
            illness: action.payload,
          },
        },
      };
    case SET_LOADING_CALCULATE_PREGNANCY_FIDYAH:
      return {
        ...state,
        loading: {
          ...state.loading,
          calculateFidyah: {
            ...state.loading?.calculateFidyah,
            pregnancy: action.payload,
          },
        },
      };
    case SET_ACTIVE_INDEX:
      return { ...state, activeIndex: action.payload }
    default:
      return state;
  }
};
