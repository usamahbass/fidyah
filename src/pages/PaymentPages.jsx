import { useTranslation } from "react-i18next";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { usePaymentPageStyles } from "./_styles";
import QrisImage from "@fidyah/assets/qris.jpeg";
import FidyahLayout from "../layouts";
import { useTotalPayable } from "@fidyah/hooks/useTotalPayable";
import { toRupiah } from "@fidyah/utils/helpers";
import { Navigate } from "react-router-dom";

const PaymentPages = () => {
  const { t } = useTranslation();
  const classes = usePaymentPageStyles();
  const totalPayable = useTotalPayable();

  if (totalPayable === 0) {
    return <Navigate to="/" />;
  }

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
            {toRupiah(totalPayable)}
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

      <Typography color="secondary" variant="body2" textAlign="center">
        {t("general.or")}
      </Typography>
    </FidyahLayout>
  );
};

export default PaymentPages;
