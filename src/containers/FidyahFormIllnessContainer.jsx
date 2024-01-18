import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useStore } from "@fidyah/hooks/useStore";
import FidyahForm from "@fidyah/components/FidyahForm";
import { useTranslation } from "react-i18next";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FidyahFormHeader from "@fidyah/components/FidyahForm/FidyahFormHeader";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { requests } from "@fidyah/utils/requests";
import { setLoadingCalculateIllnessFidyah, setPayableIllness } from "@fidyah/context/actions";

const FidyahFormIllnesContainer = () => {
  const { state, dispatch } = useStore();
  const { control, watch, getValues, reset: resetForm } = useForm();
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "data",
  });

  const { t } = useTranslation();

  const renderWatchData = fields.map((_, fieldIdx) =>
    watch(`data[${fieldIdx}].days`)
  );

  const handleAddYearForm = () => append({ year: "", days: 0 });
  const handleDeleteYearForm = (fieldIdx) => remove(fieldIdx);

  const handleResetFormFidyahIllness = () => {
    resetForm();
    prepend({ year: "", days: 0 });
    dispatch(setPayableIllness(0));
  };

  const handleCalculateFidyahFormIllness = async (values) => {
    dispatch(setLoadingCalculateIllnessFidyah(true));

    try {
      const response = await requests.post(
        "/api/palugada/fidyah/hitung?oldill=1",
        values
      );

      const totalPayable = get(response.data, "totalBayar", 0);
      dispatch(setPayableIllness(totalPayable));
    } finally {
      dispatch(setLoadingCalculateIllnessFidyah(false));
    }
  };

  useEffect(() => {
    if (!isEmpty(renderWatchData)) {
      const getValuesFormData = get(getValues(), "data", []);

      handleCalculateFidyahFormIllness(getValuesFormData);
    }
  }, renderWatchData);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      append({ year: "", days: 0 });
      remove(1);
    }

    return () => (mounted = false);
  }, []);

  const {
    payable: { illness: illnessTotal } = {},
  } = state;

  return (
    <FidyahForm
      watch={watch}
      fields={fields}
      control={control}
      handleAddYear={handleAddYearForm}
      handleDeleteYear={handleDeleteYearForm}
      handleResetForm={handleResetFormFidyahIllness}
      headerElement={
        <FidyahFormHeader
          daysCount={false}
          totalPayable={illnessTotal}
          title={t("form.headerleft.illness.title")}
          loadingPayable={state.loading?.calculateFidyah?.illness}
          description={t("form.headerleft.illness.description")}
          icon={<HeartBrokenIcon fontSize="large" color="primary" />}
        />
      }
    />
  );
};

export default FidyahFormIllnesContainer;
