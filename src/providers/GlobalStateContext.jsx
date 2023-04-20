import { useState, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Global states
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState(2);
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  // Global Methods
  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleNext = () => {
    if (state < 5) {
      setState(state + 1);
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    const newFormData = { ...formData };
    newFormData[input.name] = input.value;
    setFormData(newFormData);
    console.log(newFormData);
  };

  const handlePrevious = () => {
    if (state > 1) {
      setState(state - 1);
    }
  };

  const actions = {
    state,
    setState,
    handleNext,
    handlePrevious,
    formData,
    handleChange,
    checked,
    setChecked,
    handleCheck,
    selectedPlan,
    setSelectedPlan,
  };
  return <AppContext.Provider value={actions}>{children}</AppContext.Provider>;
};

export default AppContext;
