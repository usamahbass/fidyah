import { sumArrayOfObject } from "@fidyah/utils/helpers";
import { useStore } from "./useStore";

export const useTotalQuantity = () => {
  const { state } = useStore();

  const { haid, illness, pregnancy } = state.payable;

  const totalQtyHaid = sumArrayOfObject(haid, "qty");
  const totalQtyIllness = sumArrayOfObject(illness, "qty");
  const totalQtyPregnancy = sumArrayOfObject(pregnancy, "qty");

  return (
    parseInt(totalQtyHaid) +
    parseInt(totalQtyIllness) +
    parseInt(totalQtyPregnancy)
  );
};
