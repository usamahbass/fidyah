import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useStore } from "@fidyah/hooks/useStore";
import FidyahForm from "@fidyah/components/FidyahForm";
import { useTranslation } from "react-i18next";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import FidyahFormHeader from "@fidyah/components/FidyahForm/FidyahFormHeader";
import get from "lodash/get";
import { requests } from "@fidyah/utils/requests";
import {
  removePayablePregnancy,
  resetPayablePregnancy,
  setLoadingCalculatePregnancyFidyah,
  setPayablePregNancy,
} from "@fidyah/context/actions";
import { DEFAULT_PAYABLE_STATE, INIT_PAYABLE } from "@fidyah/utils/constants";

const FidyahFormPregnancyContainer = () => {
  const { state, dispatch } = useStore();
  const { control, watch, reset: resetForm } = useForm();
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "data",
  });

  const { t } = useTranslation();

  const handleAddYearForm = () => {
    const payablePregnancyLength = state.payable.haid.length;

    append({ year: "", days: 0 });
    dispatch(
      setPayablePregNancy({
        index: payablePregnancyLength + 1,
        data: { id: payablePregnancyLength + 1, ...INIT_PAYABLE },
      })
    );
  };
  const handleDeleteYearForm = (index) => {
    remove(index);
    dispatch(removePayablePregnancy({ index }));
  };

  const handleResetFormFidyahIllness = () => {
    resetForm();
    prepend({ year: "", days: 0 });
    dispatch(resetPayablePregnancy([DEFAULT_PAYABLE_STATE]));
  };

  const handleCalculateFidyahFormIllness = async (values, index) => {
    dispatch(setLoadingCalculatePregnancyFidyah(true));

    try {
      const response = await requests.post("/api/palugada/fidyah/hitung?oldill=0", [values]);


      const responseData = get(response.data, 'totalBayar', {});

      const payloadToDispatch = { index, data: { ...responseData, id: index + 1 } };

      dispatch(setPayablePregNancy(payloadToDispatch));
    } finally {
      dispatch(setLoadingCalculatePregnancyFidyah(false));
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      append({ year: "", days: 0 });
      remove(1);
    }

    return () => (mounted = false);
  }, []);

  const { payable: { pregnancy: pregNancyTotal } = {} } = state;

  return (
    <FidyahForm
      id="pregnancy"
      watch={watch}
      fields={fields}
      control={control}
      handleAddYear={handleAddYearForm}
      handleDeleteYear={handleDeleteYearForm}
      handleResetForm={handleResetFormFidyahIllness}
      handleRequestToApi={handleCalculateFidyahFormIllness}
      headerElement={
        <FidyahFormHeader
          daysCount={false}
          totalPayable={pregNancyTotal}
          title={t("form.headerleft.pregnancy.title")}
          loadingPayable={state.loading?.calculateFidyah?.pregnancy}
          description={t("form.headerleft.pregnancy.description")}
          icon={<PregnantWomanIcon fontSize="large" color="primary" />}
        />
      }
    />
  );
};

export default FidyahFormPregnancyContainer;
