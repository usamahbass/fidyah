import { SET_APP_THEME } from "./types";

export const setAppTheme = (appTheme) => ({
  type: SET_APP_THEME,
  payload: appTheme,
});
