import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useStore } from "@fidyah/hooks/useStore";
import FidyahForm from "@fidyah/components/FidyahForm";
import { useTranslation } from "react-i18next";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FidyahFormHeader from "@fidyah/components/FidyahForm/FidyahFormHeader";
import get from "lodash/get";
import { requests } from "@fidyah/utils/requests";
import {
  removePayableIllness,
  resetPayableIllness,
  setLoadingCalculateIllnessFidyah,
  setPayableIllness,
} from "@fidyah/context/actions";
import { DEFAULT_PAYABLE_STATE, INIT_PAYABLE } from "@fidyah/utils/constants";

const FidyahFormIllnesContainer = () => {
  const { state, dispatch } = useStore();
  const { control, watch, reset: resetForm } = useForm();
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "data",
  });

  const { t } = useTranslation();

  const handleAddYearForm = () => {
    const payableIlnessLength = state.payable.haid.length;
    append({ year: "", days: 0 });
    dispatch(
      setPayableIllness({
        index: payableIlnessLength + 1,
        data: { id: payableIlnessLength + 1, ...INIT_PAYABLE },
      })
    );
  };

  const handleDeleteYearForm = (index) => {
    remove(index);
    dispatch(removePayableIllness({ index }));
  };

  const handleResetFormFidyahIllness = () => {
    resetForm();
    prepend({ year: "", days: 0 });
    dispatch(resetPayableIllness([DEFAULT_PAYABLE_STATE]));
  };

  const handleCalculateFidyahFormIllness = async (values, index) => {
    dispatch(setLoadingCalculateIllnessFidyah(true));

    try {
      const response = await requests.post(
        "/api/palugada/fidyah/hitung?oldill=1",
        [values]
      );

      const responseData = get(response.data, "totalBayar", {});

      const payloadToDispatch = {
        index,
        data: { ...responseData, id: index + 1 },
      };

      dispatch(setPayableIllness(payloadToDispatch));
    } finally {
      dispatch(setLoadingCalculateIllnessFidyah(false));
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

  const { payable: { illness: illnessTotal } = [] } = state;

  return (
    <FidyahForm
      id="illness"
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
