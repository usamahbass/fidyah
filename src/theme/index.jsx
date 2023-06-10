import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import PropTypes from "prop-types";
import { pallete, overrides, typography } from "./foundations";

export const FidyahTheme = ({ children }) => {
  const theme = createTheme({
    palette: pallete,
    components: overrides,
    typography: typography,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

FidyahTheme.propTypes = {
  children: PropTypes.node,
};
