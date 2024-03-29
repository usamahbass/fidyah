import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import Skeleton from "@mui/material/Skeleton";
import { useFidyahFormStyles } from "./_styles";
import { sumRupiah } from "@fidyah/utils/helpers";
import isEmpty from "lodash/isEmpty";

const FidyahFormHeader = ({
  icon,
  title,
  description,
  daysCount,
  totalPayable,
  loadingPayable,
}) => {
  const { t } = useTranslation();
  const classes = useFidyahFormStyles();

  // eslint-disable-next-line no-unsafe-optional-chaining
  const totalFidyah = !isEmpty(totalPayable) ? sumRupiah(...totalPayable?.map(item => item.bayarFidyah)) : "Rp 0";

  const checkDaysCount = daysCount === 0 || daysCount || description;

  return (
    <Box className={classes.header}>
      <Box className={classes.headerLeft}>
        <PaymentsOutlinedIcon fontSize="large" color="primary" />

        <Stack>
          <Typography fontWeight={700} variant="body2">
            {t("form.headerright.title")}
          </Typography>
          {loadingPayable ? (
            <Skeleton />
          ) : (
            <Typography fontWeight={700} color="primary" variant="caption">
              {totalFidyah}
            </Typography>
          )}
        </Stack>
      </Box>

      <Box className={classes.headerRight}>
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
  daysCount: PropTypes.number | PropTypes.bool,
  totalPayable: PropTypes.number,
  loadingPayable: PropTypes.bool,
};

export default FidyahFormHeader;
