import Box from "@mui/material/Box";
import HeroImage from "@fidyah/assets/images/svg/payment.svg";
import { useHeroPaymentSectionStyles } from "./_styles";
import { Button, Stack, Typography } from "@mui/material";
import { DrawerSettings } from "..";
import { useState } from "react";
import FaqImage from "@fidyah/assets/images/svg/faq.svg";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const HeroPaymentSection = ({ totalPayable }) => {
  const { t } = useTranslation();
  const classes = useHeroPaymentSectionStyles();
  const [isOpenDrawerSetting, setIsOpenDrawerSetting] = useState(false);

  return (
    <Box className={classes.content}>
      <img src={HeroImage} alt="hero" className={classes.contentImage} />

      <Box px="1rem">
        <Stack
          position="absolute"
          top="100px"
          spacing={1}
          className={classes.contentText}>
          <Typography width="15rem">{t("payment.title")}</Typography>

          <Typography variant="body2" width="15rem">
            {t("general.totalpayablefidyah")} <b>{totalPayable}</b>
          </Typography>
        </Stack>
      </Box>

      <Box px="1rem">
        <Stack
          spacing={3}
          justifyContent="end"
          p="1rem"
          className={classes.overlayBox}>
          <Typography>{t("hero.sectionBoxTitle")}</Typography>
          <Button
            variant="contained"
            style={{ color: "white", width: "45%", borderRadius: "1rem" }}
            onClick={() => setIsOpenDrawerSetting(true)}>
            {t("button.changeHere")}
          </Button>
        </Stack>

        <img src={FaqImage} alt="faq" className={classes.overlayBoxImage} />
      </Box>

      <DrawerSettings
        isOpenDrawer={isOpenDrawerSetting}
        onOpenDrawer={() => setIsOpenDrawerSetting(true)}
        onCloseDrawer={() => setIsOpenDrawerSetting(false)}
      />
    </Box>
  );
};

HeroPaymentSection.propTypes = {
  totalPayable: PropTypes.string,
};

export default HeroPaymentSection;
