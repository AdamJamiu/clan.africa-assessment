import "./style.css";
import useApp from "../../hooks/useApp";

const Sidebar = () => {
  const { state, setState } = useApp();
  return (
    <div className="sidebar-container">
      <div className="state-count-wrap">
        <span className={`${state === 1 ? "active" : ""} state-count`}>1</span>
        <div className="count-info-wrap">
          <span className="count-info-thin">Step 1</span>
          <p className="count-info-bold">YOUR INFO</p>
        </div>
      </div>

      <div className="state-count-wrap">
        <span className={`${state === 2 ? "active" : ""} state-count`}>2</span>
        <div className="count-info-wrap">
          <span className="count-info-thin">Step 2</span>
          <p className="count-info-bold">SELECT PLAN</p>
        </div>
      </div>

      <div className="state-count-wrap">
        <span className={`${state === 3 ? "active" : ""} state-count`}>3</span>
        <div className="count-info-wrap">
          <span className="count-info-thin">Step 3</span>
          <p className="count-info-bold">ADD ONS</p>
        </div>
      </div>

      <div className="state-count-wrap">
        <span className={`${state === 4 || state === 5 ? "active" : ""} state-count`}>4</span>
        <div className="count-info-wrap">
          <span className="count-info-thin">Step 4</span>
          <p className="count-info-bold">SUMMARY</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
