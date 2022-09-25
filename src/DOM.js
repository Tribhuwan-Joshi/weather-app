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
const searchIcon = document.querySelector(".search");
const humidityIcon = document.querySelectorAll(".humidity-icon");
const windIcon = document.querySelectorAll(".wind-icon");
const rainIcon = document.querySelectorAll(".rain-icon");
const minmaxIcon = document.querySelector(".minmax-icon");

iconTag.setAttribute("href", icon);
searchIcon.setAttribute("src", search);
humidityIcon.forEach((i) => i.setAttribute("src", humidity));
windIcon.forEach((i) => i.setAttribute("src", wind));
rainIcon.forEach((i) => i.setAttribute("src", rainDrop));
minmaxIcon.setAttribute("src", minmax);

// All variables placeholder

const inputBar = document.querySelector("#city");
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
const day2windSpeed = document.querySelector(".day3-extra-info .wind-amount");
const day2pop = document.querySelector(".day3-extra-info .pop-value");

const day3Date = document.querySelector(".day3-date");
const day3Icon = document.querySelector(".day3-main .weather-icon");
const day3Weather = document.querySelector(".day3-main .main-text");
const day3Temp = document.querySelector(".day3-main .temp");
const day3humidity = document.querySelector(
  ".day2-extra-info .humidity-amount"
);
const day3windSpeed = document.querySelector(".day3-extra-info .wind-amount");
const day3pop = document.querySelector(".day3-extra-info .pop-value");

// event listeners

// searchIcon.addEventListener("click", searchCity);

(() => {
  const jukebox = document.querySelector(".jukebox");
  const audio = document.querySelector("audio");
  audio.volume = 0.6;
  const audioSrc = document.querySelector(".bgMusic");
  audioSrc.setAttribute("src", bgMusic);
  let isOn = false;
  jukebox.addEventListener("click", toggleJukeBox);
  function toggleJukeBox() {
    if (isOn) {
      audio.pause();
      jukebox.classList.add("bg-musicOff");
      jukebox.classList.remove("bg-musicOn");
      isOn = false;
    } else {
      audio.load();
      setTimeout(() => audio.play(), 0);
      jukebox.classList.add("bg-musicOn");
      jukebox.classList.remove("bg-musicOff");
      isOn = true;
    }
  }
})();
