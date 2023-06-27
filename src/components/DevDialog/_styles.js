import { makeStyles } from "@mui/styles";

export const useDevDialogStyles = makeStyles((theme) => ({
  ulLists: {
    "&::before": {
      color: theme.palette.secondary[theme.palette.mode],
    },
  },
}));
