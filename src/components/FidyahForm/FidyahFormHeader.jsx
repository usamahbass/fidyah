import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import { useFidyahFormStyles } from "./_styles";

const FidyahFormHeader = ({ daysCount }) => {
  const { t } = useTranslation();
  const classes = useFidyahFormStyles();

  return (
    <Box className={classes.header}>
      <Box className={classes.headerLeft}>
        <EventAvailableOutlinedIcon fontSize="large" color="primary" />

        <Stack>
          <Typography fontWeight={700} variant="body2">
            {t("form.headerleft.title")}
          </Typography>
          <Typography fontWeight={500} variant="caption">
            {t("form.headerleft.description")}:{" "}
            <Typography fontWeight={800} color="primary" variant="caption">
              {daysCount} {t("general.days")}
            </Typography>
          </Typography>
        </Stack>
      </Box>

      <Box className={classes.headerLeft}>
        <PaymentsOutlinedIcon fontSize="large" color="primary" />

        <Stack>
          <Typography fontWeight={700} variant="body2">
            {t("form.headerright.title")}
          </Typography>
          <Typography fontWeight={700} color="primary" variant="caption">
            $100.000
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

FidyahFormHeader.defaultProps = {
  daysCount: 0,
};

FidyahFormHeader.propTypes = {
  daysCount: PropTypes.number,
};

export default FidyahFormHeader;
