import useApp from "../../hooks/useApp";
import "./style.css";

function AddOn({ title, desc, price, checked, name, onClick }) {
  const { handleCheckboxChange } = useApp();

  const handleClick = () => {
    // Simulate an onChange event by creating a synthetic event object and calling the handleCheckboxChange method
    const syntheticEvent = {
      target: {
        checked: !checked,
        name,
      },
    };
    handleCheckboxChange(syntheticEvent);
  };

  return (
    <div className="add-on-container" onClick={handleClick}>
      <input
        onClick={onClick}
        checked={checked}
        onChange={handleCheckboxChange}
        type="checkbox"
        name={name}
      />
      <div className="add-on-row">
        <p className="add-on-title">{title}</p>
        <p className="add-on-desc">{desc}</p>
      </div>
      <span className="add-on-price">+${price}/yr</span>
    </div>
  );
}

export default AddOn;
