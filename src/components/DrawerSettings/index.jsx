import { useTranslation } from "react-i18next";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { CURRENCY, LANGUAGES, THEMES } from "@fidyah/utils/constants";
import { useStore } from "@fidyah/hooks/useStore";
import { setAppCurrency, setAppTheme } from "@fidyah/context/actions";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const DrawerSettings = ({
  isOpenDrawer,
  onCloseDrawer,
  onOpenDrawer,
  drawerBleeding,
}) => {
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();

  const {
    dispatch,
    state: { theme, currency },
  } = useStore();

  // This is used only for the example
  const container =
    window !== undefined ? () => window.document.body : undefined;

  const handleChangeLanguage = (e) => changeLanguage(e.target.value);
  const handleChangeTheme = (e) => dispatch(setAppTheme(e.target.value));
  const handleChangeCurrency = (e) => dispatch(setAppCurrency(e.target.value));

  const themeDataMapper = THEMES.LISTS.map((themeParam) => ({
    label: t(`settings.theme.${themeParam.value}`),
    value: themeParam.value,
  }));

  return (
    <>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={isOpenDrawer}
        onClose={onCloseDrawer}
        onOpen={onOpenDrawer}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}>
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}>
          <Puller />
          <Box>
            <Typography
              sx={{
                p: 2,
                color: "secondary",
                fontWeight: 700,
                fontSize: "1.2rem",
              }}>
              {t("settings.title")}
            </Typography>
            <Divider />

            <Box mt=".5rem">
              <List
                sx={{ gap: ".5rem", display: "flex", flexDirection: "column" }}>
                <ListItem>
                  <ListItemText primary={t("settings.theme.title")} />

                  <ListItemSecondaryAction>
                    <Select
                      size="small"
                      value={theme}
                      id="select-theme"
                      onChange={handleChangeTheme}
                      labelId="select-theme-label"
                      label={t("settings.theme.title")}
                      placeholder={t("general.select")}>
                      {themeDataMapper.map((theme, themeIdx) => (
                        <MenuItem
                          value={theme.value}
                          key={`${theme.value}-${themeIdx}`}>
                          {theme.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemText primary={t("settings.currency.title")} />

                  <ListItemSecondaryAction>
                    <Select
                      size="small"
                      value={currency}
                      id="select-currency"
                      onChange={handleChangeCurrency}
                      labelId="select-currency-label"
                      label={t("settings.currency.title")}>
                      {CURRENCY.LISTS.map((curr, currIdx) => (
                        <MenuItem
                          value={curr.value}
                          key={`${curr.value}-${currIdx}`}>
                          {curr.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemText primary={t("settings.language.title")} />

                  <ListItemSecondaryAction>
                    <Select
                      size="small"
                      value={language}
                      id="select-language"
                      onChange={handleChangeLanguage}
                      labelId="select-language-label"
                      label={t("settings.language.title")}>
                      {LANGUAGES.LISTS.map((lang, langIdx) => (
                        <MenuItem
                          value={lang.value}
                          key={`${lang.value}-${langIdx}`}>
                          {lang.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Box>
          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
};

DrawerSettings.defaultProps = {
  drawerBleeding: 20,
};

DrawerSettings.propTypes = {
  isOpenDrawer: PropTypes.bool.isRequired,
  onCloseDrawer: PropTypes.func.isRequired,
  onOpenDrawer: PropTypes.func.isRequired,
  drawerBleeding: PropTypes.number,
};

export default DrawerSettings;
