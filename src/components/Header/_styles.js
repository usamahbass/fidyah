import { makeStyles } from "@mui/styles";

export const useHeaderStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    position: "fixed",
    top: 0,
    width: "100%",
    height: "60px",
    backgroundColor: theme.palette.primary.main,
    zIndex: 10,
  },
  headerContent: {
    width: "480px",
    display: "flex",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    alignItems: "center",
    margin: "0 auto",
  },
}));
