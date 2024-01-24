import { Skeleton, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTotalPayable } from "@fidyah/hooks/useTotalPayable";
import { useStore } from "@fidyah/hooks/useStore";
import PropTypes from "prop-types";
import { LoadingButton as Button } from "@mui/lab";

const MakePayment = ({ onMakePayment, title, isLoadingButton }) => {
  const { state } = useStore();
  const { t } = useTranslation();

  const totalPayable = useTotalPayable();

  const {
    haid: isLoadingHaid,
    illness: isLoadingIllness,
    pregnancy: isLoadingPregnancy,
  } = state.loading?.calculateFidyah ?? { haid: false, illness: false, pregnancy: false };

  const isLoading = isLoadingHaid || isLoadingIllness || isLoadingPregnancy;

  return (
    <Stack
      py="3rem"
      px="1rem"
      spacing={3}
      sx={{
        bottom: 0,
        zIndex: 99,
        width: "100%",
        maxWidth: "481px",
        position: "fixed",
        backgroundColor: "white",
      }}>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="body2" fontWeight={500}>
            {t("general.totalpayablefidyah")}
          </Typography>

          {isLoading ? (
            <Skeleton sx={{ width: "150px" }} />
          ) : (
            <Typography fontSize="1.5rem" color="primary" fontWeight={700}>
              {totalPayable}
            </Typography>
          )}
        </Stack>

        <Button
          variant="contained"
          onClick={onMakePayment}
          loading={isLoadingButton}
          disabled={totalPayable === 0}
          sx={{ color: "white", padding: ".65rem" }}
          endIcon={<ArrowForwardIcon />}>
          {t(title)}
        </Button>
      </Stack>
    </Stack>
  );
};

MakePayment.propTypes = {
  title: PropTypes.string,
  onMakePayment: PropTypes.func,
  isLoadingButton: PropTypes.bool,
};

export default MakePayment;
