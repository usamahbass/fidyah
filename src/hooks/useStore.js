import { useContext } from "react";
import { FidyahContext } from "../context";

export const useStore = () => {
  const { state, dispatch } = useContext(FidyahContext);

  return { state, dispatch };
};
