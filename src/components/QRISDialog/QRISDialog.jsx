import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import QrisImage from "@fidyah/assets/qris.jpeg";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const QRISDIalog = ({ isOpen, onClose }) => {
  return (
    <Dialog
      keepMounted
      open={isOpen}
      onClose={onClose}
      TransitionComponent={Transition}
      aria-describedby="qris-dialog-slide-description">
      <DialogContent>
        <Box
          alt="qris"
          width={"100%"}
          height={"100%"}
          src={QrisImage}
          component="img"
          sx={{
            borderRadius: "12px",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

QRISDIalog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default QRISDIalog;
