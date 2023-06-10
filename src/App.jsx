import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Button>{t("header.title")}</Button>
    </div>
  );
};

export default App;
