import { useReducer, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { initialState, reducer } from "./reducers";

export const FidyahContext = createContext({
  state: initialState,
  dispatch: () => null,
});

const checkLocalStorage = () => {
  if (localStorage.getItem("fidyah") !== null) {
    return JSON.parse(localStorage.getItem("fidyah") || initialState);
  }

  return initialState;
};

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, checkLocalStorage());

  useEffect(() => {
    localStorage.setItem("fidyah", JSON.stringify(state));
  }, [state]);

  return (
    <FidyahContext.Provider value={{ state, dispatch }}>
      {children}
    </FidyahContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node,
};
