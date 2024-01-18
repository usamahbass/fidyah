import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Dev from "./Dev";
import Repositories from "./Repositories";
import Assets from "./Assets";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DevDialog = ({ isOpen, handleClose }) => {
  const { t } = useTranslation();
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description">
      <DialogTitle fontWeight={600}>{t("header.title")}</DialogTitle>
      <Divider />
      <DialogContent sx={{ py: 0, px: 1 }}>
        <List>
          <ListItem>
            <ListItemText
              primary={t("general.about")}
              secondary={t("info.description")}
              secondaryTypographyProps={{
                fontSize: ".80rem",
                marginTop: ".5rem",
              }}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary={t("general.repositories")}
              secondary={<Repositories />}
              secondaryTypographyProps={{
                marginTop: ".5rem",
              }}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary={t("general.developer")}
              secondary={<Dev />}
              secondaryTypographyProps={{
                marginTop: ".5rem",
              }}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary={t("general.assets")}
              secondary={<Assets />}
              secondaryTypographyProps={{
                marginTop: ".5rem",
              }}
            />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

DevDialog.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default DevDialog;
