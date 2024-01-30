import { DEFAULT_PAYABLE_STATE, PAYMENT_TYPE } from "@fidyah/utils/constants";
import {
  REMOVE_PAYABLE_HAID,
  REMOVE_PAYABLE_ILLNESS,
  REMOVE_PAYABLE_PREGNANCY,
  RESET_PAYABLE_DATA,
  RESET_PAYABLE_HAID,
  RESET_PAYABLE_ILLNESS,
  RESET_PAYABLE_PREGNANCY,
  RESET_STORE_DATA,
  RESET_TOTAL_QADHA,
  SET_ACTIVE_INDEX,
  SET_APP_CURRENCY,
  SET_APP_THEME,
  SET_CURRENT_RATE,
  SET_LOADING_CALCULATE_HAID_FIDYAH,
  SET_LOADING_CALCULATE_ILLNESS_FIDYAH,
  SET_LOADING_CALCULATE_PREGNANCY_FIDYAH,
  SET_LOADING_CREATE_PAYMENT,
  SET_PAYABLE_HAID,
  SET_PAYABLE_ILLNESS,
  SET_PAYABLE_PREGNANCY,
  SET_PAYMENT_TYPE,
  SET_TOTAL_QADHA,
} from "./types";

export const initialState = {
  theme: "light",
  currency: "$",
  totalQadha: {
    haid: '0',
    pregnancy: '0'
  },
  currentRate: '0',
  payable: {
    haid: [DEFAULT_PAYABLE_STATE],
    illness: [DEFAULT_PAYABLE_STATE],
    pregnancy: [DEFAULT_PAYABLE_STATE],
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

const removeObjectAtIndex = (state, action, stateType) => {
  const { index } = action.payload;
  const newPayableState = [...state.payable[stateType]];

  // Hapus objek pada indeks tertentu
  newPayableState.splice(index, 1);

  return {
    ...state,
    payable: {
      ...state.payable,
      haid: newPayableState,
    },
  };
};

const insertObjectAtIndex = (state, action, stateType) => {
  const { index, data } = action.payload;
  const newPayableState = [...state.payable[stateType]];

  // Cek apakah objek dengan indeks tersebut sudah ada
  const existingObjectIndex = newPayableState.findIndex(
    (item) => item.id === data.id
  );

  if (existingObjectIndex !== -1) {
    // Jika sudah ada, ganti nilai pada indeks tersebut
    newPayableState[existingObjectIndex] = data;
  } else {
    // Jika belum ada, sisipkan objek pada indeks tertentu
    newPayableState.splice(index, 0, data);
  }

  return {
    ...state,
    payable: {
      ...state.payable,
      [stateType]: newPayableState,
    },
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_THEME:
      return { ...state, theme: action.payload };
    case SET_APP_CURRENCY:
      return { ...state, currency: action.payload };
    case SET_PAYABLE_HAID:
      return insertObjectAtIndex(state, action, "haid");
    case REMOVE_PAYABLE_HAID:
      return removeObjectAtIndex(state, action, "haid");
    case SET_PAYABLE_ILLNESS:
      return insertObjectAtIndex(state, action, "illness");
    case REMOVE_PAYABLE_ILLNESS:
      return removeObjectAtIndex(state, action, "illness");
    case SET_PAYABLE_PREGNANCY:
      return insertObjectAtIndex(state, action, "pregnancy");
    case REMOVE_PAYABLE_PREGNANCY:
      return removeObjectAtIndex(state, action, "pregnancy");
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
      return { ...state, activeIndex: action.payload };
    case RESET_PAYABLE_DATA:
      return {
        ...state,
        payable: { ...state.payable, haid: [DEFAULT_PAYABLE_STATE], illness: [DEFAULT_PAYABLE_STATE], pregnancy: [DEFAULT_PAYABLE_STATE] },
        loading: {
          ...state.loading,
          calculateFidyah: {
            ...state.loading.calculateFidyah,
            haid: false,
            illness: false,
            pregnancy: false,
          },
          createPayment: false,
        },
      };
    case RESET_PAYABLE_HAID:
      return { ...state, payable: { ...state.payable, haid: action.payload } };
    case RESET_PAYABLE_ILLNESS:
      return {
        ...state,
        payable: { ...state.payable, illness: action.payload },
      };
    case RESET_PAYABLE_PREGNANCY:
      return {
        ...state,
        payable: { ...state.payable, pregnancy: action.payload },
      };
    case SET_CURRENT_RATE:
      return { ...state, currentRate: action.payload }
    case SET_TOTAL_QADHA:
      return { ...state, totalQadha: { ...state.totalQadha, [action.payload.keyState]: action.payload.keyValue } }
    case RESET_TOTAL_QADHA:
      return { ...state, totalQadha: { ...state.totalQadha, [action.payload]: '0' } }
    default:
      return state;
  }
};
