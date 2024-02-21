import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constants";

function WeatherCard({ day, type, weatherTemp }) {
  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type === type;
  });
  const weatherBanner = weatherOption.url || "";

  return (
    <section className="weathercard">
      <p className="weathercard__info">{weatherTemp}&deg; F</p>
      <img
        className="weathercard__image"
        src={weatherBanner}
        alt="weathercard"
      />
    </section>
  );
}

export default WeatherCard;
