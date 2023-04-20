import React, { useState } from "react";
import Button from "../../components/button";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import SwitchButton from "../../components/switch";
import useApp from "../../hooks/useApp";
import "./style.css";
import { CSSTransition } from "react-transition-group";

function SelectUrPlan() {
  const { checked, handleNext, selectedPlan, setSelectedPlan, state } =
    useApp();

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
              <span className="form-text">$9/mon</span>
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
              <span className="form-text">$12/mon</span>
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
              <h3 className="form-title-sm">Arcade</h3>
              <span className="form-text">$15/mon</span>
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
