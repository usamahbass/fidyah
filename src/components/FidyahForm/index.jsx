import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import NativeSelect from "@mui/material/NativeSelect";
import Divider from "@mui/material/Divider";
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
import { useFidyahFormStyles } from "./_styles";
import { generateYears } from "@fidyah/utils/helpers";
import CounterForm from "../CounterForm/CounterForm";
import { Controller } from "react-hook-form";
import ResetIcon from "@mui/icons-material/Refresh";
import { useStore } from "@fidyah/hooks/useStore";
import isEmpty from "lodash/isEmpty";

const FidyahForm = ({
  fields,
  control,
  handleAddYear,
  handleDeleteYear,
  headerElement,
  watch,
  handleResetForm,
  id,
  handleRequestToApi
}) => {
  const { t } = useTranslation();
  const classes = useFidyahFormStyles();
  const watchFormData = watch("data", []);

  const { state } = useStore();

  const payableState = state.payable;
  const payableStateCurrent = payableState[id];

  const watchFormDataYear = watchFormData?.map((data) => data.year);

  return (
    <Box px="1rem" id={id} sx={{ paddingBottom: id === 'pregnancy' ? '2rem' : '0' }}>
      <Box className={classes.container}>
        {headerElement}
        <Box className={classes.formContent}>
          <Stack spacing={3}>
            {fields.map((field, fieldIdx) => {
              const watchCurrentDayValue = watch(`data.${fieldIdx}.days`);
              const watchCurrentYearValue = watch(`data.${fieldIdx}.year`);

              return (
                <Collapse mountOnEnter unmountOnExit key={field.id} in>
                  <Stack spacing={3}>
                    <Stack spacing={3}>
                      {/* HEADER CONTENT */}

                      <Stack alignItems="center" direction="row" spacing={1}>
                        <Typography variant="body2" fontWeight={800}>
                          {t("general.year").toUpperCase()} {fieldIdx + 1}
                        </Typography>

                        {fields.length > 1 && (
                          <Tooltip title={t("general.deleteyear")}>
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => handleDeleteYear(fieldIdx)}>
                              <RemoveCircleIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Stack>

                      {/* FORM */}

                      <Stack alignItems="center" spacing={3} direction="row">
                        <FormControl
                          sx={{ width: "50%" }}
                          component={Stack}
                          spacing={1}>
                          <FormLabel
                            className={classes.formLabel}
                            sx={{
                              fontSize: ".75rem",
                              fontWeight: 600,
                            }}>
                            {t("form.yearnotfasting")}
                          </FormLabel>
                          <Controller
                            control={control}
                            rules={{ required: true }}
                            name={`data.${fieldIdx}.year`}
                            render={({ field: { onChange, value } }) => (
                              <NativeSelect
                                value={value}
                                displayEmpty
                                id="select-year"
                                sx={{ fontSize: ".90rem" }}
                                placeholder={t("general.select")}
                                onChange={(e) => {
                                  onChange(e.target.value);

                                  if (watchCurrentDayValue) {
                                    handleRequestToApi({ days: watchCurrentDayValue, year: e.target.value }, fieldIdx);
                                  }
                                }}
                                renderValue={(selected) => {
                                  if (selected.length === 0) {
                                    return t("general.select");
                                  }

                                  return selected;
                                }}>
                                <option disabled value="">
                                  {t("general.select")}
                                </option>
                                {generateYears().map((year, yearIdx) => (
                                  <option
                                    value={year}
                                    key={`${year}-${yearIdx}`}
                                    disabled={watchFormDataYear.includes(
                                      String(year)
                                    )}>
                                    {year}
                                  </option>
                                ))}
                              </NativeSelect>
                            )}
                          />
                        </FormControl>

                        <FormControl
                          sx={{ width: "50%" }}
                          component={Stack}
                          spacing={1}>
                          <FormLabel
                            className={classes.formLabel}
                            sx={{
                              fontSize: ".75rem",
                              fontWeight: 600,
                            }}>
                            {t("form.noofdays")}
                          </FormLabel>

                          <Controller
                            control={control}
                            rules={{ required: true }}
                            name={`data.${fieldIdx}.days`}
                            render={({ field: { onChange, value } }) => (
                              <CounterForm
                                value={value}
                                onChange={(val) => {
                                  onChange(val);
                                  handleRequestToApi({ days: val, year: watchCurrentYearValue }, fieldIdx);
                                }}
                                disabled={!watchCurrentYearValue}
                              />
                            )}
                          />
                        </FormControl>
                      </Stack>

                      <Stack alignItems="center" spacing={3} direction="row">
                        <FormControl
                          sx={{ width: "50%" }}
                          component={Stack}
                          spacing={1}>
                          <FormLabel
                            className={classes.formLabel}
                            sx={{
                              fontSize: ".75rem",
                              fontWeight: 600,
                            }}>
                            {t("form.quantity")}
                          </FormLabel>

                          <Typography
                            color="primary"
                            variant="h6"
                            fontWeight={800}>
                            {payableStateCurrent?.[fieldIdx]?.qty ?? "0"}
                          </Typography>
                        </FormControl>

                        <FormControl
                          component={Stack}
                          spacing={1}
                          sx={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}>
                          <FormLabel
                            className={classes.formLabel}
                            sx={{
                              fontSize: ".75rem",
                              fontWeight: 600,
                            }}>
                            {t("form.amount")}
                          </FormLabel>

                          <Typography
                            color="primary"
                            variant="h6"
                            fontWeight={800}>
                            {payableStateCurrent?.[fieldIdx]?.bayarFidyah ??
                              "Rp 0"}
                          </Typography>
                        </FormControl>
                      </Stack>
                    </Stack>

                    <Divider />
                  </Stack>
                </Collapse>
              );
            })}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            className={classes.stackAction}
            justifyContent="space-between">
            <Button
              color="warning"
              variant="contained"
              onClick={handleAddYear}
              className={classes.actionAddYear}
              startIcon={<AddIcon />}
              sx={{
                marginTop: "1rem",
                fontWeight: 500,
                color: "white",
              }}>
              {t("general.addyear")}
            </Button>

            <Button
              color="error"
              variant="contained"
              onClick={handleResetForm}
              startIcon={<ResetIcon />}
              className={classes.actionReset}
              disabled={isEmpty(payableStateCurrent)}
              sx={{ marginTop: "1rem", fontWeight: 500 }}>
              {t("general.reset")}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

FidyahForm.propTypes = {
  control: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  handleAddYear: PropTypes.func.isRequired,
  handleDeleteYear: PropTypes.func.isRequired,
  headerElement: PropTypes.node,
  watch: PropTypes.func,
  handleResetForm: PropTypes.func,
  id: PropTypes.string,
  handleRequestToApi: PropTypes.func
};

export default FidyahForm;
