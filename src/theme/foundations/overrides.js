export const overrides = {
  MuiButton: {
    defaultProps: {
      style: {
        boxShadow: "none",
        fontFamily: `"Poppins", sans-serif`,
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      style: {
        fontFamily: `"Poppins", sans-serif`,
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: "#f7f7f7",
      },
    },
  },
};
