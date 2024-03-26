import { useContext } from "react";
import WeatherCard from "./WeatherCard.js";
import ItemCard from "./ItemCard.js";
import { defaultClothingItems } from "../utils/constants.js";
import "../blocks/Main.css";
import { CurrentTempUnitContext } from "../contexts/CurrentTempUnitContext.js";
import React from "react";

const cl = console.log.bind(console);

function Main({ weatherTemp, onSelectCard }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  const temp = weatherTemp?.temperature?.[currentTempUnit];
  const getFareWeatherType = () => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };

  const getCelsWeatherType = () => {
    if (temp >= 30) {
      return "hot";
    } else if (temp >= 19 && temp <= 29) {
      return "warm";
    } else if (temp <= 18) {
      return "cold";
    }
  };

  const weatherType = (
    currentTempUnit === "F" ? getFareWeatherType : getCelsWeatherType
  )(temp);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLocaleLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="clear" weatherTemp={temp} />
      <section className="card__section__header">
        Today is {temp} degrees / You may want to wear:
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
