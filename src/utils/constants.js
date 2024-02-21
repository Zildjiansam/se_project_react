import DaySunny from "../images/sunny.svg";
import DayCloudy from "../images/cloudy.svg";
import DayRainy from "../images/rainy.svg";
import DayFoggy from "../images/fog.svg";
import DaySnowy from "../images/snow.svg";
import DayStormy from "../images/storm.svg";
import NightClear from "../images/night-clear.svg";
import NightCloudy from "../images/night-cloudy.svg";
import NightRainy from "../images/night-rain.svg";
import NightSnowy from "../images/night-snow.svg";
import NightStormy from "../images/night-storm.svg";
import NightFoggy from "../images/night-fog.svg";

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  { url: DaySunny, day: true, type: "clear" },
  { url: DayCloudy, day: true, type: "cloudy" },
  { url: DayRainy, day: true, type: "rainy" },
  { url: DayFoggy, day: true, type: "fog" },
  { url: DaySnowy, day: true, type: "snow" },
  { url: DayStormy, day: true, type: "stormy" },
  { url: NightClear, day: false, type: "clear" },
  { url: NightCloudy, day: false, type: "cloudy" },
  { url: NightRainy, day: false, type: "rainy" },
  { url: NightSnowy, day: false, type: "snow" },
  { url: NightStormy, day: false, type: "stormy" },
  { url: NightFoggy, day: false, type: "fog" },
];
