import { makeStyles } from "@mui/styles";

export const useHeroSectionStyles = makeStyles(() => ({
  content: {
    display: "flex",
    width: '80%',
    margin: '0 auto',
    flexDirection: "column",
    gap: ".5rem",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "3rem",
  },
}));
