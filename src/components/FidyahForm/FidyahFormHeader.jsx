import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import Skeleton from "@mui/material/Skeleton";
import { useFidyahFormStyles } from "./_styles";
import { useStore } from "@fidyah/hooks/useStore";
import replace from "lodash/replace";
import toInteger from "lodash/toInteger";
import { CURRENCY } from "@fidyah/utils/constants";
import { toRupiah } from "@fidyah/utils/helpers";

const handleFormattingTotalPayable = (totalPayable, currency) => {
  const isRupiah = currency === CURRENCY.RUPIAH;

  if (isRupiah) {
    const replaceFromRP = replace(totalPayable, "Rp", "");
    const toIntegerFromRP = toInteger(replaceFromRP);
    return toRupiah(toIntegerFromRP);
  }

  return replace(totalPayable, "Rp", CURRENCY.DOLLAR);
};

const FidyahFormHeader = ({
  icon,
  title,
  description,
  daysCount,
  totalPayable,
  loadingPayable,
}) => {
  const { t } = useTranslation();
  const {
    state: { currency },
  } = useStore();
  const classes = useFidyahFormStyles();

  const checkDaysCount = daysCount === 0 || daysCount || description;

  const formattingTotalPayable = handleFormattingTotalPayable(
    totalPayable,
    currency
  );

  return (
    <Box className={classes.header}>
      <Box className={classes.headerLeft}>
        {icon}

        <Stack>
          <Typography fontWeight={700} variant="body2">
            {title}
          </Typography>

          {checkDaysCount && (
            <Typography fontWeight={500} variant="caption">
              {description}:{" "}
              {daysCount && (
                <Typography fontWeight={800} color="primary" variant="caption">
                  {daysCount} {t("general.days")}
                </Typography>
              )}
            </Typography>
          )}
        </Stack>
      </Box>

      <Box className={classes.headerRight}>
        <PaymentsOutlinedIcon fontSize="large" color="primary" />

        <Stack>
          <Typography fontWeight={700} variant="body2">
            {t("form.headerright.title")}
          </Typography>
          {loadingPayable ? (
            <Skeleton />
          ) : (
            <Typography fontWeight={700} color="primary" variant="caption">
              {formattingTotalPayable}
            </Typography>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

FidyahFormHeader.defaultProps = {
  daysCount: 0,
};

FidyahFormHeader.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  daysCount: PropTypes.number,
  totalPayable: PropTypes.number,
  loadingPayable: PropTypes.bool,
};

export default FidyahFormHeader;
