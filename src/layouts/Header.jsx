import { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import DrawerSettings from "@fidyah/components/DrawerSettings";
import { useLayoutStyles } from "./_styles";
import DevDialog from "@fidyah/components/DevDialog";
import InstallButton from "@fidyah/components/InstalledButton";

const Header = () => {
  const { t } = useTranslation();
  const classes = useLayoutStyles();

  const [isOpenDialogInfo, setIsOpenDialogInfo] = useState(false);
  const [isOpenDrawerSetting, setIsOpenDrawerSetting] = useState(false);

  return (
    <Box py="0.75rem" px="1rem" className={classes.header}>
      <img width={100} src="/logo.png" alt="logo" />

      <Stack direction="row" spacing={1}>
        <InstallButton />

        <Tooltip title={t("general.info")}>
          <IconButton onClick={() => setIsOpenDialogInfo(true)}>
            <InfoIcon className={classes.headerSettingIcon} />
          </IconButton>
        </Tooltip>

        <Tooltip title={t("settings.title")}>
          <IconButton onClick={() => setIsOpenDrawerSetting(true)}>
            <SettingsIcon className={classes.headerSettingIcon} />
          </IconButton>
        </Tooltip>
      </Stack>

      <DevDialog
        isOpen={isOpenDialogInfo}
        handleClose={() => setIsOpenDialogInfo(false)}
      />

      <DrawerSettings
        isOpenDrawer={isOpenDrawerSetting}
        onOpenDrawer={() => setIsOpenDrawerSetting(true)}
        onCloseDrawer={() => setIsOpenDrawerSetting(false)}
      />
    </Box>
  );
};

export default Header;
