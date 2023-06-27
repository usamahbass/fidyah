import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useStore } from "@fidyah/hooks/useStore";
import FidyahForm from "@fidyah/components/FidyahForm";
import { useTranslation } from "react-i18next";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FidyahFormHeader from "@fidyah/components/FidyahForm/FidyahFormHeader";

const FidyahFormIllnesContainer = () => {
  const { state } = useStore();
  const { control, watch } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "data",
  });

  const { t } = useTranslation();

  const handleAddYearForm = () => append({ year: "", days: 0 });
  const handleDeleteYearForm = (fieldIdx) => remove(fieldIdx);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      append({ year: "", days: 0 });
      remove(1);
    }

    return () => (mounted = false);
  }, []);

  const {
    payable: { illness: illnessTotal },
  } = state;

  return (
    <FidyahForm
      watch={watch}
      fields={fields}
      control={control}
      handleAddYear={handleAddYearForm}
      handleDeleteYear={handleDeleteYearForm}
      headerElement={
        <FidyahFormHeader
          daysCount={false}
          totalPayable={illnessTotal}
          title={t("form.headerleft.illness.title")}
          description={t("form.headerleft.illness.description")}
          icon={<HeartBrokenIcon fontSize="large" color="primary" />}
        />
      }
    />
  );
};

export default FidyahFormIllnesContainer;
