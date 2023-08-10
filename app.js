const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";
const apiKey = "c90213974aeeefc3d290364391c9a75c";
let searchBox = document.querySelector(".container input");
const searchBtn = document.querySelector(".container button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp.toFixed() + "°F";
    document.querySelector(".condition").innerHTML = data.weather[0].main;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".feels").innerHTML =
      data.main.feels_like.toFixed() + "°F";
    document.querySelector(".wind").innerHTML =
      data.wind.speed.toFixed() + " MPH";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  searchBox.value = "";
});
