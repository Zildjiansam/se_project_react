import { useContext } from "react";
import "../blocks/ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
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
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__label__type-F ${
          currentTemperatureUnit === "F" && "switch__type_active"
        }`}
      >
        F&deg;
      </p>
      <p
        className={`switch__label__type-C ${
          currentTemperatureUnit === "C" && "switch__type_active"
        }`}
      >
        C&deg;
      </p>
    </label>
  );
}

export default ToggleSwitch;
