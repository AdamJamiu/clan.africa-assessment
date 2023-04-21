import { CSSTransition } from "react-transition-group";
import AddOn from "../../components/add-ons";
import Button from "../../components/button";
import useApp from "../../hooks/useApp";
import usePrice from "../../hooks/usePrice";
import "./style.css";
import { useEffect, useState } from "react";


const initialPrice = [{
  onlineService: 1,
  largerStorage: 2,
  customizeProfile: 2
}]

function PickAddOns() {
  const { onlineService, largerStorage, customizeProfile, state, checked } = useApp();
  const { addAddOns, removeAddOns } = usePrice();
  const [priceList, setPriceList] = useState(initialPrice)

  useEffect(() => {
    if (checked) {
      const multipliedPrice = initialPrice.map((priceObj) => {
        const updatedPriceObj = {};
        for (const [key, value] of Object.entries(priceObj)) {
          updatedPriceObj[key] = value * 10;
        }
        return updatedPriceObj;
      });

      setPriceList(multipliedPrice)
    } else {
      setPriceList(initialPrice)
    }

  }, [])

  useEffect(() => {
    if (onlineService === true) {
      addAddOns({ name: "Online Service", price: priceList[0].onlineService })
    } else {
      removeAddOns("Online Service")
    }

    if (largerStorage === true) {
      addAddOns({ name: "Larger Storage", price: priceList[0].largerStorage })
    } else {
      removeAddOns("Larger Storage")
    }
    if (customizeProfile === true) {
      addAddOns({ name: "Customize Profile", price: priceList[0].customizeProfile })
    } else {
      removeAddOns("Customize Profile")
    }
  }, [onlineService, largerStorage, customizeProfile])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <CSSTransition
      in={state === 3}
      classNames="fade"
      timeout={300}
      unmountOnExit
    >
      <form className="pick-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Pick add-ons</h2>
        <p className="form-text">Add-ons help enhance your gaming experience</p>
        <div className="add-on-wrapper">
          <AddOn
            title="Online Service"
            desc="Access to multiplayer game"
            price={priceList[0].onlineService}
            checked={onlineService}
            name="onlineService"
          />
          <AddOn
            title="Larger Storage"
            desc="Extra TB of cloud save"
            price={priceList[0].largerStorage}
            checked={largerStorage}
            name="largerStorage"
          />

          <AddOn
            title="Customizable Profile"
            desc="Custom theme on your profile"
            price={priceList[0].customizeProfile}
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
