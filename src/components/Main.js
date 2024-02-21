import WeatherCard from "./WeatherCard.js";
import ItemCard from "./ItemCard.js";
import { defaultClothingItems } from "../utils/constants.js";
import "../blocks/Main.css";

function Main({ weatherTemp, onSelectCard }) {
  const getWeatherType = (weatherTemp) => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType(weatherTemp);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLocaleLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="stormy" weatherTemp={weatherTemp} />
      <section className="card__section__header">
        Today is {weatherTemp} degrees / You may want to wear:
        <div className="card__section">
          {filteredCards.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
