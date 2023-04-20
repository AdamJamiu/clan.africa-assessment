import { useContext } from "react";
import AppContext from "../providers/GlobalStateContext";

export const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
