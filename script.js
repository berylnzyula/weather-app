const currentDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function formatDate(currentDate) {
  let day = currentDate.getDay();
  let date = currentDate.getDate();
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return ` ${days[day]} ${date}, ${hour}:${minutes}`;
}

let fullDate = document.querySelector("span.date");
fullDate.innerHTML = formatDate(currentDate);

function showCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#city");
  let cityValue = document.querySelector("#city-name");

  if (searchInput && cityValue) {
    let city = searchInput.value.trim();

    if (city) {
      cityValue.innerHTML = city;
      getWeather(city);
    } else {
      alert("Please enter a valid city name.");
    }
  }
}
function showTemperature(response) {
  let currentTemp = Math.round(response.data.temperature.current);
  let temperature = document.querySelector("span#temp");
  temperature.innerHTML = `${currentTemp}°C`;
}
let form = document.querySelector("#city-search-form");
if (form) {
  form.addEventListener("submit", showCity);
}

let apiKey = "8o409ea0285c3ece49f8e650etbdc4a9";

function getWeather(city) {
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
  axios.get(apiUrl).then(showTemperature);
}
