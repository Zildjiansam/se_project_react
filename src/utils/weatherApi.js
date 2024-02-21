const apiKey = "dbadc8cd2956e3508b9a016c2af78b3a";

// const apiRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`;

const cl = console.log.bind(console);
const latitude = 44.34;
const longitude = 10.99;

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};
