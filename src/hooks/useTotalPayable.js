/* eslint-disable no-unsafe-optional-chaining */
import { sumRupiah } from "@fidyah/utils/helpers";
import isEmpty from "lodash/isEmpty";
import { useStore } from "./useStore";

export const useTotalPayable = () => {
  const {
    state: { payable: payableState },
  } = useStore();

  const haidState = payableState?.haid;
  const ilnessState = payableState?.illness;
  const prenancyState = payableState?.pregnancy;

  const totalHaid = !isEmpty(haidState) ? sumRupiah(...haidState?.map(item => item.bayarFidyah)) : "Rp 0"; 
  const totalIlnessState = !isEmpty(ilnessState) ? sumRupiah(...ilnessState?.map(item => item.bayarFidyah)) : "Rp 0"; 
  const totalPregnancyState = !isEmpty(prenancyState) ? sumRupiah(...prenancyState?.map(item => item.bayarFidyah)) : "Rp 0"; 

  return sumRupiah(totalHaid, totalIlnessState, totalPregnancyState);
};
