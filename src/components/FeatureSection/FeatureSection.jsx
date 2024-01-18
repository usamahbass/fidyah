import { Box, Stack, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import { useTranslation } from "react-i18next";

const BoxFeature = ({ title, hrefId, icon }) => {
  const theme = useTheme();

  const handleClickFeature = () =>
    document.getElementById(hrefId).scrollIntoView({ behavior: "smooth" });

  return (
    <Stack
      onClick={handleClickFeature}
      alignItems="center"
      spacing={1}
      sx={{ cursor: "pointer" }}>
      <Box
        justifyContent="center"
        display="flex"
        alignItems="center"
        width="50px"
        height="50px"
        borderRadius="100%"
        sx={{ border: `2px solid ${theme.palette.primary.main}` }}>
        {icon}
      </Box>

      <Typography variant="body2">{title}</Typography>
    </Stack>
  );
};

BoxFeature.propTypes = {
  title: PropTypes.string,
  hrefId: PropTypes.string,
  icon: PropTypes.node,
};

const FeatureSection = () => {
  const { t } = useTranslation();
  return (
    <Box marginBottom="3rem" px="1rem">
      <Stack spacing={3}>
        <Typography>{t("featureSection.title")}</Typography>

        <Stack
          spacing={5}
          direction="row"
          justifyContent="center"
          alignItems="center">
          <BoxFeature
            title={t("featureSection.haid")}
            icon={<EventAvailableOutlinedIcon color="primary" />}
            hrefId="haid"
          />

          <BoxFeature
            title={t("featureSection.illness")}
            icon={<HeartBrokenIcon color="primary" />}
            hrefId="illness"
          />

          <BoxFeature
            title={t("featureSection.pregnancy")}
            icon={<PregnantWomanIcon color="primary" />}
            hrefId="pregnancy"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default FeatureSection;
