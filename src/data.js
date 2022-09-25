import { format } from "date-fns";

async function getJSON(query) {

  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=d48a46383954cbdee3198804107fd92d`,
    {
      mode: "cors",
    }
  );
  if (res.status == 200) {
    const data = res.json();
    return data;
  }
  return "";
}

function getDayData(day) {
  const res = {};
  res.weather = day.weather[0].main;
  res.temp = (day.main.temp - 273.15).toFixed(1) * 1;
  res.windSpeed = Math.round(day.wind.speed * 3.6);
  res.humidity = day.main.humidity;
  res.pop = (day.pop * 100).toFixed(2) *1;
  res.icon = day.weather[0].icon;
  const dt = day.dt_txt.split(" ");
  res.date = format(new Date(dt[0]), "dd MMM yyyy");

  return res;
}

async function fetchData(cityName) {
  const res = {};
  const data = await getJSON(cityName);
  if (data) {
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    const countryName = regionNames.of(data.city.country);
    res.city = data.city.name;
    res.country = countryName;
    res.day1 = getDayData(data.list[1]);
    res.day1.time = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    res.day1.min = (data.list[1].main.temp_min - 273.15).toFixed(1) * 1;
    res.day1.max = (data.list[1].main.temp_max - 273.15).toFixed(1) * 1;
    res.day2 = getDayData(data.list[7]);
    res.day3 = getDayData(data.list[15]);
    return res;
  }
  return "";
}
export { fetchData };
