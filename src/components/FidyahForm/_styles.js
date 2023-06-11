import { makeStyles } from "@mui/styles";

export const useFidyahFormStyles = makeStyles(() => ({
  container: {
    paddingTop: "2rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: ".75rem",
  },
  formContent: {
    marginTop: '2rem',
    padding: "2rem",
    borderRadius: '.5rem',
    border: `2px solid #FF7A00`,
  },
}));
