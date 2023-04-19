import { useState, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(0);

  <AppContext.Provider value={{ state, setState }}>
    {children}
  </AppContext.Provider>;
};

export default AppContext;
