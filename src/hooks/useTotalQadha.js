import { useStore } from "./useStore";

export const useTotalQadha = () => {
  const { state } = useStore();

  const totalQadha =
    parseInt(state.totalQadha.haid) + parseInt(state.totalQadha.pregnancy);

  return totalQadha;
};
