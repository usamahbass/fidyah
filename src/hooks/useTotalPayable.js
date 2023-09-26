import { rupiahToInt } from "@fidyah/utils/helpers";
import get from "lodash/get";
import { useStore } from "./useStore";

export const useTotalPayable = () => {
  const {
    state: { payable: payableState },
  } = useStore();

  const totalHaidPayment = get(payableState.haid, "bayarFidyah", "0");
  const totalIlnessPayment = get(payableState.illness, "bayarFidyah", "0");
  const totalPregNancyAjram = get(payableState.pregnancy, "bayarFidyah", "0");

  const totalPayment =
    rupiahToInt(totalHaidPayment) +
    rupiahToInt(totalIlnessPayment) +
    rupiahToInt(totalPregNancyAjram);

  return totalPayment;
};
