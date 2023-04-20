import useApp from "../../hooks/useApp";
import "./style.css";

const Button = () => {
  const { state, setState, handlePrevious } = useApp();
  return (
    <div className="btn-wrapper">
      <button
        type="button"
        className="btn-prev"
        disabled={state < 2 ? true : false}
        onClick={() => handlePrevious()}
      >
        Go back
      </button>

      <button type="submit" className="btn-next">
        {state === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default Button;
