import Button from "../../components/button";
import "./styles.css";
import usePrice from "../../hooks/usePrice";
import useApp from "../../hooks/useApp";
import { useEffect } from "react";

function FinishingUp() {
  const { priceState, calculateTotalPrice } = usePrice();
  const { range, setState, handleNext } = useApp();

  useEffect(() => {
    calculateTotalPrice();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="finish-container">

        <h2 className="form-title">Finishing Up</h2>
        <p className="form-text">
          Double-check everything looks OK before confirming
        </p>

        <div className="finishing-wrap">
          <div className="finish-col">
            <div>
              <p className="finish-title">{priceState.plan.product} (Monthly)</p>
              <p onClick={() => setState(2)} className="change-btn">Change</p>
            </div>
            <p className="finish-text">${priceState.plan.price}/{range} </p>
          </div>

          {priceState?.add_ons.map((item, index) => (
            <div className="finish-col-sm" key={index}>
              <div>
                <p className="finish-text-gray">{item.name}</p>
              </div>
              <p className="finish-price-thin">${item.price}/{range} </p>
            </div>
          ))}
        </div>

        <div className="total-wrap">
          <p className="finish-text-gray">Total (per {range === "mon" ? "Month" : "Year"})</p>
          <p className="finish-price-bold">${priceState.total_price}/{range} </p>
        </div>
      </div>
      <Button />
    </form>
  );
}

export default FinishingUp;
