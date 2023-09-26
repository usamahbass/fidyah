import FidyahForm from "@fidyah/components/FidyahForm";
import FidyahFormHeader from "@fidyah/components/FidyahForm/FidyahFormHeader";
import { sumArrayOfObject } from "@fidyah/utils/helpers";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import { useStore } from "@fidyah/hooks/useStore";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { requests } from "@fidyah/utils/requests";
import { setPayableHaid } from "@fidyah/context/actions";

const FidyahFormHaidContainer = () => {
  const { t } = useTranslation();
  const { control, watch, getValues, reset: resetForm } = useForm();
  const { state, dispatch } = useStore();
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "data",
  });

  const currentData = watch("data");

  const renderWatchData = fields.map((_, fieldIdx) =>
    watch(`data[${fieldIdx}].days`)
  );

  const [loadingCalculateFidyah, setLoadingCalculateFidyah] = useState(false);

  const handleCalculateFidyahFormHaid = async (values) => {
    setLoadingCalculateFidyah(true);

    try {
      const response = await requests.post(
        "/api/palugada/hitung-fidyah?oldill=0",
        values
      );

      const totalPayable = get(response.data, "totalBayar", 0);
      dispatch(setPayableHaid(totalPayable));
    } finally {
      setLoadingCalculateFidyah(false);
    }
  };

  const handleDeleteYearForm = (fieldIdx) => {
    remove(fieldIdx);

    const getValuesFormData = get(getValues(), "data", []);

    // callback calculate function
    handleCalculateFidyahFormHaid(getValuesFormData);
  };
  const handleAddYearForm = () => append({ year: "", days: 0 });

  const handleResetFormFidyahHaid = () => {
    resetForm();
    prepend({ year: "", days: 0 });
    dispatch(setPayableHaid(0));
  };

  useEffect(() => {
    if (!isEmpty(renderWatchData)) {
      const getValuesFormData = get(getValues(), "data", []);

      handleCalculateFidyahFormHaid(getValuesFormData);
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

  const sumTotalDaysInData = sumArrayOfObject(currentData, "days");

  const {
    payable: { haid: haidTotal },
  } = state;

  return (
    <FidyahForm
      watch={watch}
      fields={fields}
      control={control}
      handleAddYear={handleAddYearForm}
      handleDeleteYear={handleDeleteYearForm}
      handleResetForm={handleResetFormFidyahHaid}
      headerElement={
        <FidyahFormHeader
          totalPayable={haidTotal}
          daysCount={sumTotalDaysInData}
          title={t("form.headerleft.haid.title")}
          loadingPayable={loadingCalculateFidyah}
          description={t("form.headerleft.haid.description")}
          icon={<EventAvailableOutlinedIcon fontSize="large" color="primary" />}
        />
      }
    />
  );
};

export default FidyahFormHaidContainer;
