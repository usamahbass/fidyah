import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseLine from "@mui/material/CssBaseline";
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
      <CssBaseLine />
      {children}
    </ThemeProvider>
  );
};

FidyahTheme.propTypes = {
  children: PropTypes.node,
};
