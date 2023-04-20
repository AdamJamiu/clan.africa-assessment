import "./index.css";
import useApp from "../hooks/useApp";
import YourInfo from "./yourInfo";
import ThankYou from "./thankYou";
import SelectUrPlan from "./selectUrPlan";
import PickAddOns from "./pickAddOns";
import FinishingUp from "./finishingUp";

function FormContainer() {
  const { state } = useApp();
  return (
    <div className="form-container">
      {state === 1 && <YourInfo />}
      {state === 2 && <SelectUrPlan />}
      {state === 3 && <PickAddOns />}
      {state === 4 && <FinishingUp />}
      {state === 5 && <ThankYou />}
    </div>
  );
}

export default FormContainer;
