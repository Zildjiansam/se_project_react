import { checkResponse } from "./api";

const apiKey = "dbadc8cd2956e3508b9a016c2af78b3a";
const latitude = 44.34;
const longitude = 10.99;
const apiRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// const cl = console.log.bind(console);
// weather.temperature.F = `${Math.round(data.main.temp)}°F`;
// weather.temperature.C = `${Math.round((data.main.temp - 32) * 5/9)}°C`;

export const getForecastWeather = () => {
  const weatherApi = fetch(apiRequest).then(checkResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const weather = {
    temperature: {
      F: Math.round(data.main.temp),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
    },
  };
  return weather;
};
