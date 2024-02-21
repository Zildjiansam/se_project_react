import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constants";

function WeatherCard({ day, type, weatherTemp }) {
  const bannerImgSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const weatherBanner = bannerImgSrc[0].url || "";

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
