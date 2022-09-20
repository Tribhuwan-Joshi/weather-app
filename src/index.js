import "./style.css";

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

async function getWeather(query) {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=d48a46383954cbdee3198804107fd92d`,
      {
        mode: "cors",
      }
    );
    if (res.status != 200) throw new Error("City Data unavailable");
    else {
      const data = await res.json();
      console.log(data);
    }
  } catch (err) {
    console.log(err.message);
  }
}

const city = "sweden";
getWeather(city);
