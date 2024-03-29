import Box from "@mui/material/Box";
import HeroImage from "@fidyah/assets/images/svg/payment.svg";
import { useHeroPaymentSectionStyles } from "./_styles";
import { Button, Stack, Typography } from "@mui/material";
import FaqImage from "@fidyah/assets/images/svg/faq.svg";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { useTotalQadha } from "@fidyah/hooks/useTotalQadha";
import { WA_LINK_LEARN_MORE_DISTRIBUTION } from "@fidyah/utils/constants";

const HeroPaymentSection = ({ totalPayable }) => {
  const { t } = useTranslation();
  const totalQadha = useTotalQadha();
  const classes = useHeroPaymentSectionStyles();

  return (
    <Box className={classes.content}>
      <img src={HeroImage} alt="hero" className={classes.contentImage} />

      <Box px="1rem">
        <Stack
          position="absolute"
          top="80px"
          spacing={1}
          className={classes.contentText}>
          <Typography width="15rem">{t("payment.title")}</Typography>

          <Typography variant="body2" width="15rem">
            {t("general.totalqadha")} <b>{totalQadha}</b>
          </Typography>

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
          <Typography variant="caption" component="blockquote">{t("general.noteFidyahBaznas")}</Typography>
          <Button
            variant="contained"
            style={{ color: "white", width: "45%", borderRadius: "1rem" }}
            onClick={() => window.open(WA_LINK_LEARN_MORE_DISTRIBUTION)}>
            {t("button.learnMore")}
          </Button>
        </Stack>

        <img src={FaqImage} alt="faq" className={classes.overlayBoxImage} />
      </Box>
    </Box>
  );
};

HeroPaymentSection.propTypes = {
  totalPayable: PropTypes.string,
};

export default HeroPaymentSection;
