import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { useHeroSectionStyles } from "./_styles";

const HeroSection = () => {
  const { t } = useTranslation();
  const classes = useHeroSectionStyles();

  return (
    <Box className={classes.content}>
      <Typography
        fontWeight={700}
        textTransform="uppercase"
        textAlign="center"
        variant="h5"
      >
        {t("header.title")}
      </Typography>
      <Typography fontWeight={500} textAlign="center" variant="caption">
        {t("header.description")}
      </Typography>

      <Divider sx={{ marginTop: ".75rem", width: "50%" }} />
    </Box>
  );
};

export default HeroSection;
