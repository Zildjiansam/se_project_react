import { useContext, useState } from "react";
import "../blocks/Tempswitch.css";
import { CurrentTempUnitContext } from "../contexts/CurrentTempUnitContext";

function Tempswitch() {
  const { currentTempUnit, handleToggleSwitchChange } = useContext(
    CurrentTempUnitContext
  );

  return (
    <label className="switch">
      <input
        className="switch__box"
        id="switch-box"
        type="checkbox"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTempUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__label__type-F ${
          currentTempUnit === "F" && "switch__type_active"
        }`}
      >
        F&deg;
      </p>
      <p
        className={`switch__label__type-C ${
          currentTempUnit === "C" && "switch__type_active"
        }`}
      >
        C&deg;
      </p>
    </label>
  );
}

export default Tempswitch;
