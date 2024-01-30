import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import QrisImage from "@fidyah/assets/qris.jpeg";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Button, Stack } from "@mui/material";
import { useTotalPayable } from "@fidyah/hooks/useTotalPayable";
import { ADMIN_NUMBER } from "@fidyah/utils/constants";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const QRISDIalog = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const totalPayable = useTotalPayable();
  const waLinkConfirmPayment = `https://api.whatsapp.com/send/?phone=${ADMIN_NUMBER}&text=Assalamualaikum,%2C+Saya+ingin+konfirmasi+pembayaran+fidyah+sejumlah+${totalPayable}&type=phone_number&app_absent=0`;

  return (
    <Dialog
      keepMounted
      open={isOpen}
      onClose={onClose}
      TransitionComponent={Transition}
      aria-describedby="qris-dialog-slide-description">
      <DialogContent>
        <Stack spacing={3}>
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

          <Button
            size="large"
            variant="contained"
            sx={{ color: "white" }}
            onClick={() => window.open(waLinkConfirmPayment)}>
            {t('button.confirmPayment')}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

QRISDIalog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default QRISDIalog;
