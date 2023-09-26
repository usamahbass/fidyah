import { Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { toRupiah } from "@fidyah/utils/helpers";
import { useTotalPayable } from "@fidyah/hooks/useTotalPayable";
import { useNavigate } from "react-router-dom";

const MakePaymentContainer = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const totalPayable = useTotalPayable();

  const handleMakePayment = () => navigate("/pembayaran");

  return (
    <Stack
      py="3rem"
      px=".5rem"
      spacing={3}
      sx={{
        width: "100%",
        bottom: 0,
        zIndex: 99,
        position: "fixed",
        backgroundColor: "white",
      }}>
      <Stack spacing={1}>
        <Typography variant="body2" fontWeight={500}>
          {t("general.totalpayablefidyah")}
        </Typography>
        <Typography fontSize="1.5rem" color="primary" fontWeight={700}>
          {toRupiah(totalPayable)}
        </Typography>
      </Stack>

      {/* <Button
        fullWidth
        size="large"
        variant="contained"
        disabled={totalPayable === 0}
        onClick={handleMakePayment}
        sx={{ color: "white", padding: ".65rem" }}
        endIcon={<ArrowForwardIcon />}>
        {t("general.makepayment")}
      </Button> */}
    </Stack>
  );
};

export default MakePaymentContainer;
