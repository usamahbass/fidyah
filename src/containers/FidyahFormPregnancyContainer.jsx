import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useStore } from "@fidyah/hooks/useStore";
import FidyahForm from "@fidyah/components/FidyahForm";
import { useTranslation } from "react-i18next";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import FidyahFormHeader from "@fidyah/components/FidyahForm/FidyahFormHeader";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { requests } from "@fidyah/utils/requests";
import {
  setPayableIllness,
  setPayablePregNancy,
} from "@fidyah/context/actions";

const FidyahFormPregnancyContainer = () => {
  const { state, dispatch } = useStore();
  const { control, watch, getValues, reset: resetForm } = useForm();
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "data",
  });

  const { t } = useTranslation();

  const [loadingCalculateFidyah, setLoadingCalculateFidyah] = useState(false);

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
    setLoadingCalculateFidyah(true);

    try {
      const response = await requests.post(
        "/api/palugada/hitung-fidyah?oldill=1",
        values
      );

      const totalPayable = get(response.data, "totalBayar", 0);
      dispatch(setPayablePregNancy(totalPayable));
    } finally {
      setLoadingCalculateFidyah(false);
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
    payable: { pregnancy: pregNancyTotal },
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
          totalPayable={pregNancyTotal}
          loadingPayable={loadingCalculateFidyah}
          title={t("form.headerleft.pregnancy.title")}
          description={t("form.headerleft.pregnancy.description")}
          icon={<PregnantWomanIcon fontSize="large" color="primary" />}
        />
      }
    />
  );
};

export default FidyahFormPregnancyContainer;
