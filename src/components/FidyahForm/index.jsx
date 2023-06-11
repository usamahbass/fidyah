import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import FidyahFormHeader from "./FidyahFormHeader";
import { useFidyahFormStyles } from "./_styles";
import { generateYears, sumArrayOfObject } from "@fidyah/utils/helpers";
import CounterForm from "../CounterForm/CounterForm";
import { Controller } from "react-hook-form";

const FidyahForm = ({
  fields,
  control,
  handleAddYear,
  handleDeleteYear,
  watch,
}) => {
  const { t } = useTranslation();
  const classes = useFidyahFormStyles();

  const currentData = watch("data");

  const sumTotalDaysInData = sumArrayOfObject(currentData, "days");

  return (
    <Box className={classes.container}>
      <FidyahFormHeader daysCount={sumTotalDaysInData} />

      <Box className={classes.formContent}>
        <Stack spacing={3}>
          {fields.map((field, fieldIdx) => {
            const watchCurrentYearValue = watch(`data.${fieldIdx}.year`);
            const watchCurrentDayValue = watch(`data.${fieldIdx}.days`);

            return (
              <Collapse
                mountOnEnter
                unmountOnExit
                key={field.id}
                in={fields[fieldIdx]}
              >
                <Stack spacing={3}>
                  <Stack spacing={3}>
                    <Stack alignItems="center" direction="row" spacing={1}>
                      <Typography variant="body2" fontWeight={800}>
                        {t("general.year").toUpperCase()} {fieldIdx + 1}
                      </Typography>

                      {fields.length > 1 && (
                        <Tooltip title={t("general.deleteyear")}>
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => handleDeleteYear(fieldIdx)}
                          >
                            <RemoveCircleIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Stack>

                    <Stack alignItems="center" spacing={3} direction="row">
                      <FormControl
                        sx={{ width: "30%" }}
                        component={Stack}
                        spacing={1}
                      >
                        <FormLabel
                          sx={{
                            fontSize: ".75rem",
                            color: "#333",
                            fontWeight: 600,
                          }}
                        >
                          {t("form.yearnotfasting")}
                        </FormLabel>
                        <Controller
                          control={control}
                          rules={{ required: true }}
                          name={`data.${fieldIdx}.year`}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              size="small"
                              value={value}
                              displayEmpty
                              id="select-year"
                              sx={{ fontSize: ".90rem" }}
                              placeholder={t("general.select")}
                              onChange={(e) => onChange(e.target.value)}
                              renderValue={(selected) => {
                                if (selected.length === 0) {
                                  return t("general.select");
                                }

                                return selected;
                              }}
                            >
                              <MenuItem disabled value="">
                                {t("general.select")}
                              </MenuItem>
                              {generateYears().map((year, yearIdx) => (
                                <MenuItem
                                  value={year}
                                  key={`${year}-${yearIdx}`}
                                >
                                  {year}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
                      </FormControl>

                      <FormControl
                        sx={{ width: "40%" }}
                        component={Stack}
                        spacing={1}
                      >
                        <FormLabel
                          sx={{
                            fontSize: ".75rem",
                            color: "#333",
                            fontWeight: 600,
                          }}
                        >
                          {t("form.noofdays")}
                        </FormLabel>

                        <Controller
                          control={control}
                          rules={{ required: true }}
                          name={`data.${fieldIdx}.days`}
                          render={({ field: { onChange, value } }) => (
                            <CounterForm
                              value={value}
                              onChange={onChange}
                              disabled={!watchCurrentYearValue}
                            />
                          )}
                        />
                      </FormControl>

                      <FormControl
                        sx={{ width: "25%" }}
                        component={Stack}
                        spacing={1}
                      >
                        <FormLabel
                          sx={{
                            fontSize: ".75rem",
                            color: "#333",
                            fontWeight: 600,
                          }}
                        >
                          {t("form.quantity")}
                        </FormLabel>

                        <Typography
                          color="primary"
                          variant="h6"
                          fontWeight={800}
                        >
                          {watchCurrentDayValue === 0
                            ? "-"
                            : watchCurrentDayValue}
                        </Typography>
                      </FormControl>
                    </Stack>
                  </Stack>

                  <FormControl
                    component={Stack}
                    spacing={1}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FormLabel
                      sx={{
                        fontSize: ".75rem",
                        color: "#333",
                        fontWeight: 600,
                      }}
                    >
                      {t("form.amount")}
                    </FormLabel>

                    <Typography color="primary" variant="h6" fontWeight={800}>
                      -
                    </Typography>
                  </FormControl>

                  <Divider />
                </Stack>
              </Collapse>
            );
          })}
        </Stack>

        <Button
          onClick={handleAddYear}
          startIcon={<AddIcon />}
          sx={{ marginTop: "1rem", fontWeight: 800 }}
        >
          {t("general.addyear")}
        </Button>
      </Box>
    </Box>
  );
};

FidyahForm.propTypes = {
  watch: PropTypes.func,
  control: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  handleAddYear: PropTypes.func.isRequired,
  handleDeleteYear: PropTypes.func.isRequired,
};

export default FidyahForm;
