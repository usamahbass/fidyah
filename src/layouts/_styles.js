import { makeStyles } from "@mui/styles";

export const useLayoutStyles = makeStyles(() => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerSettingIcon: {
    color: "#333",
  },
  container: {
    maxWidth: "480px",
    width: "100%",
    position: "relative",
    margin: "0 auto",
    border: "1px solid",
    // padding: "0px 16px 80px",
    height: "100vh",
  },
}));
