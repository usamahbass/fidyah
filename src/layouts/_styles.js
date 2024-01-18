import { makeStyles } from "@mui/styles";

export const useLayoutStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerSettingIcon: {
    color: theme.palette.secondary[theme.palette.mode],
  },
  container: {
    maxWidth: "480px",
    width: "100%",
    position: "relative",
    margin: "0 auto",
    // padding: "0px 16px 80px",
    height: "100%",
    paddingBottom: "5rem",
    backgroundColor: "rgb(255 255 255/1)",
  },
}));
