import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseLine from "@mui/material/CssBaseline";
import PropTypes from "prop-types";
import { pallete, overrides, typography } from "./foundations";
import { useStore } from "@fidyah/hooks/useStore";

export const FidyahTheme = ({ children }) => {
  const {
    state: { theme: appTheme },
  } = useStore();

  const theme = createTheme({
    palette: pallete(appTheme),
    components: overrides,
    typography: typography,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      {children}
    </ThemeProvider>
  );
};

FidyahTheme.propTypes = {
  children: PropTypes.node,
};
