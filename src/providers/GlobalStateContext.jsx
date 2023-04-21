import { useState, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Global states
  const [range, setRange] = useState("mon");
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState(2);
  const [selectedPlan, setSelectedPlan] = useState("arcade");

  // select your plan check boxes
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizeProfile, setCustomizeProfile] = useState(false);

  //choosed plan state
  const [plan, setPlan] = useState({
    choosedPlan: "",
    price: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  // Global Methods

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "onlineService":
        setOnlineService(checked);
        break;
      case "largerStorage":
        setLargerStorage(checked);
        break;
      case "customizeProfile":
        setCustomizeProfile(checked);
        break;
      default:
        break;
    }
  };

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
    // console.log(newFormData);
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
    onlineService,
    largerStorage,
    customizeProfile,
    handleCheckboxChange,
    range,
    setRange
  };
  return <AppContext.Provider value={actions}>{children}</AppContext.Provider>;
};

export default AppContext;
