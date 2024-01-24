import { useTranslation } from "react-i18next";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { usePaymentPageStyles } from "./_styles";
import QrisImage from "@fidyah/assets/qris.jpeg";
import FidyahLayout from "@fidyah/layouts";
import { useStore } from "@fidyah/hooks/useStore";
import { useTotalPayable } from "@fidyah/hooks/useTotalPayable";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { setPaymentType } from "@fidyah/context/actions";
import { PAYMENT_TYPE } from "@fidyah/utils/constants";

const PaymentQRIS = () => {
  const { t } = useTranslation();
  const { dispatch } = useStore();
  const classes = usePaymentPageStyles();
  const totalPayable = useTotalPayable();

  const handleMakeManualPayment = () => {
    dispatch(setPaymentType(PAYMENT_TYPE.MANUAL));
  };

  return (
    <FidyahLayout withBackHeader title={t("general.makepayment")}>
      <Stack mb="2rem" alignItems="center">
        <Box className={classes.hero}>
          <Stack spacing={1} mb=".5rem">
            <Typography
              fontWeight={700}
              textTransform="uppercase"
              textAlign="center"
              variant="body1">
              {t("payment.title")}
            </Typography>
            <Typography fontWeight={500} textAlign="center" variant="caption">
              {t("general.totalpayablefidyah")}
            </Typography>
          </Stack>

          <Typography
            fontWeight={700}
            color="primary"
            textAlign="center"
            variant="h4">
            {totalPayable}
          </Typography>

          <Divider sx={{ marginTop: ".75rem", width: "50%" }} />
        </Box>

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
      </Stack>

      <Stack spacing={3}>
        <Typography color="secondary" variant="body2" textAlign="center">
          {t("general.or")}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={handleMakeManualPayment}
          sx={{ color: "white", padding: ".65rem" }}>
          {t("button.enrollManual")}
        </Button>
      </Stack>
    </FidyahLayout>
  );
};

export default PaymentQRIS;
