import FidyahForm from "@fidyah/components/FidyahForm";
import FidyahFormHeader from "@fidyah/components/FidyahForm/FidyahFormHeader";
import { sumArrayOfObject } from "@fidyah/utils/helpers";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import { useStore } from "@fidyah/hooks/useStore";
import get from "lodash/get";
import { requests } from "@fidyah/utils/requests";
import {
  removePayableHaid,
  resetPayableHaid,
  resetTotalQadha,
  setLoadingCalculateHaidFidyah,
  setPayableHaid,
  setTotalQadha,
} from "@fidyah/context/actions";
import { DEFAULT_PAYABLE_STATE, INIT_PAYABLE } from "@fidyah/utils/constants";

const FidyahFormHaidContainer = () => {
  const { t } = useTranslation();
  const { control, watch, reset: resetForm } = useForm();
  const { state, dispatch } = useStore();
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "data",
  });

  const currentData = watch("data");

  const handleCalculateFidyahFormHaid = async (values, index) => {
    dispatch(setLoadingCalculateHaidFidyah(true));

    try {
      const response = await requests.post(
        "/api/palugada/fidyah/hitung?oldill=0",
        [values]
      );

      const responseData = get(response.data, "totalBayar", {});

      const payloadToDispatch = {
        index,
        data: { id: index + 1, ...responseData },
      };

      dispatch(setPayableHaid(payloadToDispatch));
    } finally {
      dispatch(setLoadingCalculateHaidFidyah(false));
    }
  };

  const handleDeleteYearForm = (index) => {
    remove(index);
    dispatch(removePayableHaid({ index }));
  };

  const handleAddYearForm = () => {
    const payableHaidLength = state.payable.haid.length;

    append({ year: "", days: 0 });
    dispatch(
      setPayableHaid({
        index: payableHaidLength + 1,
        data: { id: payableHaidLength + 1, ...INIT_PAYABLE },
      })
    );
  };

  const handleResetFormFidyahHaid = () => {
    resetForm();
    prepend({ year: "", days: 0 });
    dispatch(resetTotalQadha('haid'));
    dispatch(resetPayableHaid([DEFAULT_PAYABLE_STATE]));
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      append({ year: "", days: 0 });
      remove(1);
    }

    return () => (mounted = false);
  }, []);

  const sumTotalDaysInData = sumArrayOfObject(currentData, "days");

  useEffect(() => {
    if (sumTotalDaysInData) {
      dispatch(
        setTotalQadha({ keyState: "haid", keyValue: sumTotalDaysInData })
      );
    }
  }, [sumTotalDaysInData, dispatch]);

  const { payable: { haid: haidTotal } = [] } = state;

  return (
    <FidyahForm
      id="haid"
      watch={watch}
      fields={fields}
      control={control}
      handleAddYear={handleAddYearForm}
      handleDeleteYear={handleDeleteYearForm}
      handleResetForm={handleResetFormFidyahHaid}
      handleRequestToApi={handleCalculateFidyahFormHaid}
      headerElement={
        <FidyahFormHeader
          totalPayable={haidTotal}
          daysCount={sumTotalDaysInData}
          title={t("form.headerleft.haid.title")}
          description={t("form.headerleft.haid.description")}
          loadingPayable={state?.loading?.calculateFidyah?.haid}
          icon={<EventAvailableOutlinedIcon fontSize="large" color="primary" />}
        />
      }
    />
  );
};

export default FidyahFormHaidContainer;
