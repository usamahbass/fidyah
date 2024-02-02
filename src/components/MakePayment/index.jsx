import { Skeleton, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTotalPayable } from "@fidyah/hooks/useTotalPayable";
import { useStore } from "@fidyah/hooks/useStore";
import PropTypes from "prop-types";
import { LoadingButton as Button } from "@mui/lab";
import { useTotalQadha } from "@fidyah/hooks/useTotalQadha";
import { rupiahToInt } from "@fidyah/utils/helpers";

const MakePayment = ({ onMakePayment, title, isLoadingButton }) => {
  const { state } = useStore();
  const { t } = useTranslation();

  const totalQadha = useTotalQadha();
  const totalPayable = useTotalPayable();

  const {
    haid: isLoadingHaid,
    illness: isLoadingIllness,
    pregnancy: isLoadingPregnancy,
  } = state.loading?.calculateFidyah ?? {
    haid: false,
    illness: false,
    pregnancy: false,
  };

  const disabledButton = rupiahToInt(totalPayable) === 0;
  const isLoading = isLoadingHaid || isLoadingIllness || isLoadingPregnancy;

  return (
    <Stack
      pt="2rem"
      pb="3rem"
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
        <Stack justifyContent='space-between' direction="row" spacing={2}>
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
          <Stack direction='row' alignItems='start' spacing={1}>
            <Typography variant="caption" fontWeight={500}>
              {t("general.totalqadha")}
            </Typography>

            {isLoading ? (
              <Skeleton sx={{ width: "150px" }} />
            ) : (
              <Typography fontSize="1.5rem" color="primary" sx={{ position: 'relative', bottom: '7px' }} fontWeight={700}>
                {String(totalQadha)}
              </Typography>
            )}
          </Stack>
        </Stack>

        <Button
          variant="contained"
          onClick={onMakePayment}
          loading={isLoadingButton}
          disabled={disabledButton}
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
