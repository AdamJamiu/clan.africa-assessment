import { CSSTransition } from "react-transition-group";
import AddOn from "../../components/add-ons";
import Button from "../../components/button";
import useApp from "../../hooks/useApp";
import "./style.css";

function PickAddOns() {
  const { onlineService, largerStorage, customizeProfile, state } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <CSSTransition
      in={state === 3 ? true : false}
      classNames="fade"
      timeout={300}
      unmountOnExit
    >
      <form className="pick-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Pick add-ons</h2>
        <p className="form-text">Add-ons help enhance your gaming experience</p>
        <div className="add-on-wrapper">
          <AddOn
            title={"Online Service"}
            desc={"Access to multiplayer game"}
            price={"+$10/yr"}
            checked={onlineService}
            name="onlineService"
          />
          <AddOn
            title={"Larger Storage"}
            desc={"Extra TB of cloud save"}
            price="+$2/yr"
            checked={largerStorage}
            name="largerStorage"
          />

          <AddOn
            title={"Customizable Profile"}
            desc={"Custom theme on your profile"}
            price={"+$2/yr"}
            checked={customizeProfile}
            name="customizeProfile"
          />
        </div>
        <Button />
      </form>
    </CSSTransition>
  );
}

export default PickAddOns;
