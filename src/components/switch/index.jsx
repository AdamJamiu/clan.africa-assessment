import { useState } from "react";
import useApp from "../../hooks/useApp";

const styles = {
  switch: {
    position: "relative",
    display: "inline-block",
    width: 50,
    height: 23,
  },
  track: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 34,
    backgroundColor: "hsl(213, 96%, 18%)",
    transition: "background-color 0.3s",
  },
  thumb: {
    position: "absolute",
    top: 4,
    left: 6,
    cursor: "pointer",
    width: 15,
    height: 15,
    borderRadius: 32,
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease, background-color 0.2s ease",
  },
  active: {
    transform: "translateX(26px)",
  },
};

const SwitchButton = () => {
  const { checked, handleCheck } = useApp();

  return (
    <div>
      <div style={styles.switch} onClick={handleCheck}>
        <div style={styles.track} />
        <div style={{ ...styles.thumb, ...(checked && styles.active) }} />
      </div>
    </div>
  );
};

export default SwitchButton;
