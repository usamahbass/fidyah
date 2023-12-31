import { THEMES } from "@fidyah/utils/constants";

export const pallete = (theme) => {
  return {
    mode: theme,
    primary: {
      main: "#5DC3B2",
      light: "#C4F9E1",
      dark: "#1D6771",
    },
    secondary: {
      main: "#333333",
      dark: "#D8D4CF",
      light: "#333333",
    },
    warning: {
      main: "#FF7A00",
      dark: "#932F00",
      light: "#FFD999",
    },
    error: {
      light: "#FFE7D9",
      main: "#FF4842",
      dark: "#7A0C2E",
      contrastText: "#fff",
    },
    success: {
      light: "#E9FCD4",
      main: "#54D62C",
      dark: "#08660D",
    },
    info: {
      light: "#D0F2FF",
      main: "#1890FF",
      dark: "#04297A",
      contrastText: "#fff",
    },
    background: {
      default: theme === THEMES.DARK ? "#181B1A" : "#FFFFFF",
      // paper: theme === THEMES.DARK ? "#181B1A" : "#FFFFFF",
    },
  };
};
