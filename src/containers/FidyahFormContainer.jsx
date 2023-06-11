import FidyahForm from "@fidyah/components/FidyahForm";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const FidyahFormContainer = () => {
  const { control, watch } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "data",
  });

  const handleAddYearForm = () => append({ year: "" });
  const handleDeleteYearForm = (fieldIdx) => remove(fieldIdx);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      append({ year: "", days: 0 });
      remove(1);
    }

    return () => (mounted = false);
  }, []);

  return (
    <>
      <FidyahForm
        watch={watch}
        fields={fields}
        control={control}
        handleAddYear={handleAddYearForm}
        handleDeleteYear={handleDeleteYearForm}
      />
    </>
  );
};

export default FidyahFormContainer;
