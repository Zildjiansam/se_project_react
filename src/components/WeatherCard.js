import "../blocks/WeatherCard.css";
import { useContext } from "react";
import { weatherOptions } from "../utils/constants";
import { CurrentTempUnitContext } from "../contexts/CurrentTempUnitContext";

function WeatherCard({ day, type, weatherTemp }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);

  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type === type;
  });
  const weatherBanner = weatherOption.url || "";

  return (
    <section className="weathercard">
      <p className="weathercard__info">
        {weatherTemp}&deg; {currentTempUnit === "F" ? "F" : "C"}
      </p>
      <img
        className="weathercard__image"
        src={weatherBanner}
        alt="weathercard"
      />
    </section>
  );
}

export default WeatherCard;
