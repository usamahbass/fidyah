import { makeStyles } from "@mui/styles";

export const useFidyahFormStyles = makeStyles((theme) => {
  return {
    container: {
      paddingTop: "2rem",
    },
    header: {
      display: "flex",
      alignItems: "center",
      position: "sticky",
      top: 0,
      paddingTop: "1rem",
      paddingBottom: "1rem",
      backgroundColor: theme.palette.background.default,
      transition: "all .3s",
      zIndex: 99,
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "start",
        gap: "1rem",
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
      marginTop: "2rem",
      padding: "2rem",
      borderRadius: ".5rem",
      border: `2px solid #FF7A00`,
    },
    formLabel: {
      color: theme.palette.secondary[theme.palette.mode],
    },
  };
});
