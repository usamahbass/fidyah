import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";
import { isAndroid } from "mobile-device-detect";
import { useReactPWAInstall } from "@fidyah/lib/pwa";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop";
import { useInstalledButtonStyles } from "./_styles";

const InstallButton = () => {
  const { t } = useTranslation();
  const { isInstalled, pwaInstall, supported } = useReactPWAInstall();

  const classes = useInstalledButtonStyles();

  const handleInstallApp = () => {
    pwaInstall({
      title: t("header.title"),
      logo: "/vite.svg",
      description: t("info.description"),
    });
  };

  return (
    <Fade in={supported()}>
      <Tooltip title={t("general.install")}>
        <IconButton
          aria-label="install-app"
          onClick={handleInstallApp}
          disabled={isInstalled()}
          className={classes.headerSettingIcon}>
          {isAndroid ? <InstallMobileIcon /> : <InstallDesktopIcon />}
        </IconButton>
      </Tooltip>
    </Fade>
  );
};

export default InstallButton;
