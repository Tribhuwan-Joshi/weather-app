import "./style.css";
import { format } from "date-fns";

import icon from "./Images/icon.png";
const iconTag = document.querySelector("#web-icon");
iconTag.setAttribute("href", icon);

import bgMusic from "./bgMusic.mp3";
const audio = document.querySelector("audio");
audio.volume = 0.6;
const audioSrc = document.querySelector(".bgMusic");
audioSrc.setAttribute("src", bgMusic);

// add jukebox for music
const jukebox = document.querySelector(".jukebox");
jukebox.addEventListener("click", toggleImg);
jukebox.addEventListener("click", toggleMusic);

import searchIcon from "./Images/search.png"
const search = document.querySelector(".search");
search.setAttribute("src", searchIcon);



let isOn = false;
function toggleMusic() {
  if (isOn) {
    audio.pause();
    isOn = false;
  } else {
    audio.play();
    isOn = true;
  }
}
function toggleImg() {
  if (isOn) {
    jukebox.classList.add("bg-musicOff");
    jukebox.classList.remove("bg-musicOn");
  } else {
    jukebox.classList.add("bg-musicOn");
    jukebox.classList.remove("bg-musicOff");
  }
}

const app = (() => {
  function giveData(day) {
    const res = {};
    res.weather = day.weather[0].main;
    res.temp = day.main.temp;
    res.feelslike = day.main.feels_like;
    res.windSpeed = day.wind.speed;
    res.humidity = day.main.humidity;
    res.pop = `${day.pop * 100}%`;
    res.icon = day.weather[0].icon;
    const dt = day.dt_txt.split(" ");
    res.date = format(new Date(dt[0]), "dd MMM yyyy");
    res.time = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return res;
  }
  async function getWeather(query) {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=d48a46383954cbdee3198804107fd92d`,
      {
        mode: "cors",
      }
    );
    const data = await res.json();
    const cityName = data.city.name;
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    const countryName = regionNames.of(data.city.country);
    const day1 = giveData(data.list[2]);
    day1.city = cityName;
    day1.countryName = countryName;
    const day2 = giveData(data.list[10]);
    const day3 = giveData(data.list[18]);

    console.log(day1);
    console.log(day2);
    console.log(day3);
  }
  return {
    getWeather,
    giveData,
  };
})();


const city = "Ranikhet"
app.getWeather(city);
// 914885793;
