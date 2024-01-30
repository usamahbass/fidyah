import Box from "@mui/material/Box";
import HeroImage from "@fidyah/assets/images/svg/calculator.svg";
import { useHeroSectionStyles } from "./_styles";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import { DrawerSettings } from "..";
import { useState } from "react";
import FaqImage from "@fidyah/assets/images/svg/faq.svg";
import { Trans, useTranslation } from "react-i18next";
import Header from "@fidyah/layouts/Header";
import { useStore } from "@fidyah/hooks/useStore";

const HeroSection = () => {
  const { t } = useTranslation();
  const classes = useHeroSectionStyles();
  const theme = useTheme();

  const { state } = useStore();

  const [isOpenDrawerSetting, setIsOpenDrawerSetting] = useState(false);

  return (
    <Box id="heroHome" className={classes.content}>
      <Header />

      <img src={HeroImage} alt="hero" className={classes.contentImage} />

      <Box px="1rem">
        <Stack
          position="absolute"
          top="100px"
          spacing={3}
          className={classes.contentText}>
          <Typography width="17rem">
            <Stack>
              <Trans i18nKey="header.title" /><br />
              <Trans
                i18nKey="hero.title"
                values={{ amount: state.currentRate }}
              />
            </Stack>
          </Typography>

          <Button
            variant="outlined"
            style={{
              backgroundColor: "white",
              width: "70%",
              borderRadius: "1rem",
            }}>
            {t("button.getStarted")}
          </Button>
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
            style={{
              color: "white",
              width: theme.breakpoints.down("xs") ? "45%" : "35%",
              borderRadius: "1rem",
            }}
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

export default HeroSection;
