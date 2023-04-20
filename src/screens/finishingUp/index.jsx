import Button from "../../components/button";
import "./styles.css";

function FinishingUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="finish-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Finishing Up</h2>
      <p className="form-text">
        Double-check everything looks OK before confirming
      </p>

      <div className="finishing-wrap">
        <div className="finish-col">
          <div>
            <p className="finish-title">Arcade (Monthly)</p>
            <p className="change-btn">Change</p>
          </div>
          <p className="finish-text">$9/mo</p>
        </div>
      </div>

      <Button />
    </form>
  );
}

export default FinishingUp;
