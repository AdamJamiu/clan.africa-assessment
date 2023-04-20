import { useState, useEffect } from "react";
import Button from "../../components/button";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import SwitchButton from "../../components/switch";
import useApp from "../../hooks/useApp";
import "./style.css";
import { CSSTransition } from "react-transition-group";

const initialState = {
  arcade: {
    name: "Arcade",
    price: 9,
  },
  advanced: {
    name: "Advanced",
    price: 12,
  },
  pro: {
    name: "Pro",
    price: 15,
  },
};

function SelectUrPlan() {
  const [range, setRange] = useState("mon");
  const [priceData, setPriceData] = useState({
    arcade: {
      name: "Arcade",
      price: 9,
    },
    advanced: {
      name: "Advanced",
      price: 12,
    },
    pro: {
      name: "Pro",
      price: 15,
    },
  });

  const { checked, handleNext, selectedPlan, setSelectedPlan, state } =
    useApp();

  // update the prices when user checked the switch button
  useEffect(() => {
    if (checked) {
      setRange("yr");
      setPriceData((prevState) => ({
        ...prevState,
        arcade: {
          ...prevState.arcade,
          price: 90,
        },
        advanced: {
          ...prevState.advanced,
          price: 120,
        },
        pro: {
          ...prevState.pro,
          price: 150,
        },
      }));
    } else {
      setPriceData(initialState);
      setRange("mon");
    }
  }, [checked]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <CSSTransition
      in={state === 2}
      timeout={300}
      unmountOnExit
      classNames="fade"
    >
      <form className="plan-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Select Your Plan</h2>
        <p className="form-text">
          You have the option of monthly or yearly billing.
        </p>

        <div className="form-wrap">
          <div className="selection-wrap">
            <div
              onClick={() => setSelectedPlan("arcade")}
              className={`${
                selectedPlan === "arcade" ? "active" : ""
              } selection-col`}
            >
              <div className="form-icon">
                <img
                  src={arcadeIcon}
                  height={35}
                  width={35}
                  alt="arcade_icon"
                />
              </div>
              <h3 className="form-title-sm">Arcade</h3>
              <span className="form-text">
                ${priceData.arcade.price}/{range}
              </span>
            </div>
          </div>

          <div className="selection-wrap">
            <div
              onClick={() => setSelectedPlan("advanced")}
              className={`${
                selectedPlan === "advanced" ? "active" : ""
              } selection-col`}
            >
              <div className="form-icon">
                <img
                  src={advancedIcon}
                  height={35}
                  width={35}
                  alt="arcade_icon"
                />
              </div>
              <h3 className="form-title-sm">Advanced</h3>
              <span className="form-text">
                ${priceData.advanced.price}/{range}
              </span>
            </div>
          </div>

          <div className="selection-wrap">
            <div
              onClick={() => setSelectedPlan("pro")}
              className={`${
                selectedPlan === "pro" ? "active" : ""
              } selection-col`}
            >
              <div className="form-icon">
                <img src={proIcon} height={35} width={35} alt="arcade_icon" />
              </div>
              <h3 className="form-title-sm">Pro</h3>
              <span className="form-text">
                ${priceData.pro.price}/{range}
              </span>
            </div>
          </div>
        </div>

        <div className="plan-range-wrap">
          <p className={`${!checked ? "active" : ""} form-text`}>Monthly</p>
          <SwitchButton />
          <p className={`${checked ? "active" : ""} form-text`}>Yearly</p>
        </div>

        <Button />
      </form>
    </CSSTransition>
  );
}

export default SelectUrPlan;
