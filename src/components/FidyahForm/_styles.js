import { makeStyles } from "@mui/styles";

export const useFidyahFormStyles = makeStyles((theme) => {
  return {
    container: {
      paddingTop: "1rem",
      borderRadius: ".5rem",
      border: `3px solid ${theme.palette.primary[theme.palette.mode]}`,
      [theme.breakpoints.down("sm")]: {
        border: "0",
      },
    },
    header: {
      display: "flex",
      alignItems: "center",
      position: "sticky",
      top: 0,
      padding: "1rem",
      backgroundColor: theme.palette.background.default,
      transition: "all .3s",
      zIndex: 99,
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "start",
        gap: "1rem",
        padding: "0.25rem",
      },
    },
    headerLeft: {
      display: "flex",
      alignItems: "center",
      gap: ".75rem",
      [theme.breakpoints.down("sm")]: {
        order: 2,
      },
    },
    headerRight: {
      display: "flex",
      alignItems: "center",
      gap: ".75rem",
      [theme.breakpoints.down("sm")]: {
        order: 1,
      },
    },
    formContent: {
      padding: "2rem",
      [theme.breakpoints.down("sm")]: {
        padding: '2rem 0.5rem 2rem 0.5rem',
      },
    },
    formLabel: {
      color: theme.palette.secondary[theme.palette.mode],
    },
  };
});
