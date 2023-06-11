import { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import DrawerSettings from "@fidyah/components/DrawerSettings";
import { useLayoutStyles } from "./_styles";

const Header = () => {
  const { t } = useTranslation();
  const classes = useLayoutStyles();

  const [isOpenDrawerSetting, setIsOpenDrawerSetting] = useState(false);

  return (
    <Box className={classes.header}>
      <img src="/vite.svg" alt="logo" />

      <Tooltip title={t("settings.title")}>
        <IconButton onClick={() => setIsOpenDrawerSetting(true)}>
          <SettingsIcon className={classes.headerSettingIcon} />
        </IconButton>
      </Tooltip>

      <DrawerSettings
        isOpenDrawer={isOpenDrawerSetting}
        onOpenDrawer={() => setIsOpenDrawerSetting(true)}
        onCloseDrawer={() => setIsOpenDrawerSetting(false)}
      />
    </Box>
  );
};

export default Header;
