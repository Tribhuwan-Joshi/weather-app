import "./style.css";

import { fetchData } from "./data";

// import icons and music
import icon from "./Images/icon.png";
import bgMusic from "./bgMusic.mp3";
import search from "./Images/search.png";
import minmax from "./Images/minmax.png";
import rainDrop from "./Images/rain.png";
import wind from "./Images/wind.png";
import humidity from "./Images/humidity.png";

// All Icons to render
const iconTag = document.querySelector("#web-icon");
const humidityIcon = document.querySelectorAll(".humidity-icon");
const windIcon = document.querySelectorAll(".wind-icon");
const rainIcon = document.querySelectorAll(".rain-icon");
const minmaxIcon = document.querySelector(".minmax-icon");

iconTag.setAttribute("href", icon);
humidityIcon.forEach((i) => i.setAttribute("src", humidity));
windIcon.forEach((i) => i.setAttribute("src", wind));
rainIcon.forEach((i) => i.setAttribute("src", rainDrop));
minmaxIcon.setAttribute("src", minmax);

// All variables placeholder
const day1City = document.querySelector(".cityName");
const day1Time = document.querySelector(".time");
const day1Date = document.querySelector(".day1-date");
const day1Icon = document.querySelector(".day1-main .weather-icon");
const day1Weather = document.querySelector(".day1-main .main-text");
const day1Temp = document.querySelector(".day1-main .temp");
const day1humidity = document.querySelector(
  ".day1-extra-info .humidity-amount"
);
const day1windSpeed = document.querySelector(".day1-extra-info .wind-amount");
const day1pop = document.querySelector(".day1-extra-info .pop-value");
const day1Min = document.querySelector(".day1-extra-info .min");
const day1Max = document.querySelector(".day1-extra-info .max");

const day2Date = document.querySelector(".day2-date");
const day2Icon = document.querySelector(".day2-main .weather-icon");
const day2Weather = document.querySelector(".day2-main .main-text");
const day2Temp = document.querySelector(".day2-main .temp");
const day2humidity = document.querySelector(
  ".day2-extra-info .humidity-amount"
);
const day2windSpeed = document.querySelector(".day2-extra-info .wind-amount");
const day2pop = document.querySelector(".day2-extra-info .pop-value");

const day3Date = document.querySelector(".day3-date");
const day3Icon = document.querySelector(".day3-main .weather-icon");
const day3Weather = document.querySelector(".day3-main .main-text");
const day3Temp = document.querySelector(".day3-main .temp");
const day3humidity = document.querySelector(
  ".day3-extra-info .humidity-amount"
);
const day3windSpeed = document.querySelector(".day3-extra-info .wind-amount");
const day3pop = document.querySelector(".day3-extra-info .pop-value");

(async () => {
  const searchIcon = document.querySelector(".search");
  searchIcon.setAttribute("src", search);
  const inputBar = document.querySelector("#city");
  const response = document.querySelector(".response");
  let initialCity = localStorage.getItem("city") || "Sweden";
  let res = await fetchData(initialCity);
  renderData(res);
  inputBar.focus();
  searchIcon.addEventListener("click", searchCity);
  inputBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchIcon.click();
    }
  });
  const converter = document.querySelector(".toggle");
  converter.addEventListener("click", toggleUnit);
  let isCelsius = true;
  function toggleUnit() {
    if (isCelsius) {
      isCelsius = false;
      converter.textContent = "Display in Metric units";
      day1Temp.textContent = `${(res.day1.temp * 1.8 + 32).toFixed(1)} F`;
      day1windSpeed.textContent = `${(res.day1.windSpeed / 1.609).toFixed(
        1
      )*1} mp/h`;
      day1Min.textContent = `${(res.day1.min * 1.8 + 32).toFixed(1) *1} F`;
      day1Max.textContent = `${(res.day1.max * 1.8 + 32).toFixed(1) *1} F`;
      day2Temp.textContent = `${(res.day2.temp * 1.8 + 32).toFixed(1) *1} F`;
      day2windSpeed.textContent = `${(res.day2.windSpeed / 1.609).toFixed(
        1
      )*1} mp/h`;
      day3Temp.textContent = `${(res.day3.temp * 1.8 + 32).toFixed(1) *1} F`;
      day3windSpeed.textContent = `${(res.day3.windSpeed / 1.609).toFixed(
        1
      )*1} mp/h`;
    } else {
      isCelsius = true;
      converter.textContent = "Display in Imperial units";
      day1Min.textContent = `${(res.day1.min).toFixed(1) *1}°c`;
      day1Max.textContent = `${(res.day1.max).toFixed(1) *1}°c`;
      day1windSpeed.textContent = `${res.day1.windSpeed.toFixed(1)*1} km/h`;
      day1Temp.textContent = `${res.day1.temp.toFixed(1) * 1}°c`;
      day2Temp.textContent = `${res.day2.temp.toFixed(1) * 1}°c`;
      day2windSpeed.textContent = `${res.day2.windSpeed.toFixed(1) * 1} km/h`;
      day3Temp.textContent = `${res.day3.temp.toFixed(1) * 1}°c`;
      day3windSpeed.textContent = `${res.day3.windSpeed.toFixed(1) * 1} km/h`;
    }
  }

  async function searchCity() {
    let city = inputBar.value.trim();
    if (city) {
      let res = await fetchData(city);
      if (!res) {
        response.classList.remove("invisible");
        inputBar.value = "";
        inputBar.focus();
      } else {
        localStorage.setItem("city", city);
        response.classList.add("invisible");
        renderData(res);
        inputBar.value = "";
        inputBar.focus();
        isCelsius = true;
      }
    } else inputBar.focus();
  }
})();

(() => {
  const jukebox = document.querySelector(".jukebox");
  const audio = document.querySelector("audio");
  audio.volume = 0.6;
  const audioSrc = document.querySelector(".bgMusic");
  audioSrc.setAttribute("src", bgMusic);
  let isOn = false;
  jukebox.addEventListener("click", toggleJukeBox);
  async function toggleJukeBox() {
    if (isOn) {
      audio.pause();
      jukebox.classList.add("bg-musicOff");
      jukebox.classList.remove("bg-musicOn");
      isOn = false;
    } else {
      audio.load();
      await audio.play();
      jukebox.classList.add("bg-musicOn");
      jukebox.classList.remove("bg-musicOff");
      isOn = true;
    }
  }
})();

// render all the data - day1 , day2 , day3
// import weather icon

import nightClear from "./Images/clearN.png";
import clearDay from "./Images/clearDay.png";
import fewCloud from "./Images/fewCloud.png";
import cloud from "./Images/cloud.png";
import rainCloud from "./Images/rainCloud.png";
import thunder from "./Images/thunder.png";
import snow from "./Images/snow.png";
import mist from "./Images/mist.png";
import { tr } from "date-fns/locale";

const iconObj = {
  "01d": clearDay,
  "01n": nightClear,
  "02d": fewCloud,
  "02n": cloud,
  "03d": cloud,
  "03n": cloud,
  "04d": cloud,
  "04n": cloud,
  "09d": rainCloud,
  "09n": rainCloud,
  "10d": rainCloud,
  "10n": rainCloud,
  "11d": thunder,
  "11n": thunder,
  "13d": snow,
  "13n": snow,
  "50d": mist,
  "50n": mist,
};

function renderData(res) {
  // day1
  day1City.textContent = res.city;
  day1Time.textContent = res.day1.time;
  day1Date.textContent = res.day1.date;
  day1Icon.src = iconObj[res.day1.icon];
  day1Weather.textContent = res.day1.weather;
  day1Temp.textContent = `${res.day1.temp}°c`;
  day1humidity.textContent = `${res.day1.humidity}%`;
  day1windSpeed.textContent = `${res.day1.windSpeed} km/h`;
  day1pop.textContent = `${res.day1.pop}%`;
  day1Min.textContent = `${res.day1.min}°c`;
  day1Max.textContent = `${res.day1.max}°c`;

  // day2
  day2Date.textContent = res.day2.date;
  day2Icon.src = iconObj[res.day2.icon];
  day2Weather.textContent = res.day2.weather;
  day2Temp.textContent = `${res.day2.temp}°c`;
  day2humidity.textContent = `${res.day2.humidity}%`;
  day2windSpeed.textContent = `${res.day2.windSpeed} km/h`;
  day2pop.textContent = `${res.day2.pop}%`;

  // day3
  day3Date.textContent = res.day3.date;
  day3Icon.src = iconObj[res.day3.icon];
  day3Weather.textContent = res.day3.weather;
  day3Temp.textContent = `${res.day3.temp}°c`;
  day3humidity.textContent = `${res.day3.humidity}%`;
  day3windSpeed.textContent = `${res.day3.windSpeed} km/h`;
  day3pop.textContent = `${res.day3.pop}%`;
}
