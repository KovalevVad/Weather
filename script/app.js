import { appFetch } from "./helper.js";
import { fetchByImage } from './imageApi.js'

const tempMax = document.querySelector('#tempMax')
const tempMin = document.querySelector('#tempMin')
const wind = document.querySelector('#wind')
const humadity = document.querySelector('#humadity')
const clouds = document.querySelector('#clouds')
const temp = document.querySelector('h1')
const weatherName = document.querySelector('h2')
const searchLocation = document.querySelectorAll('.searchLocation')
const buttonSearchLocation = document.querySelectorAll('#buttonSearch')
const textLocation = document.querySelector('#location')
const API_KEY = '69bab6cdf6d45a75b4617f2f8c765865'

function getWeatherByCity(city) {
  const UNITS = 'metric'

  return appFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${UNITS}`)
}

searchLocation.forEach((item) => {
  item.addEventListener('keydown', function(e) {
    if (e.code === 'Enter') {
      updateLocation(item.value)
      item.value = ''
    }
  });

  buttonSearchLocation.forEach((element) => {
    element.addEventListener('click', function() {
      updateLocation(item.value)
      item.value = ''
    })
  })
});

function updateLocation(location) {
  getWeatherByCity(location)
  .then(data => {
    console.log(data)
    temp.innerHTML = Math.round(data.main.temp) + '°'
    tempMax.innerHTML = data.main.temp_max + '°'
    tempMin.innerHTML = data.main.temp_min + '°'
    humadity.innerHTML = data.main.humidity + '%'
    clouds.innerHTML = data.clouds.all + '%'
    wind.innerHTML = data.wind.speed + 'km/h'
    textLocation.innerHTML = data.name
    const weather = data.weather[0].description
    weatherName.innerHTML = weather

    fetchByImage(weather)
     .then(data => {
      const url = data.urls.regular
      document.querySelector('main').style.cssText = `background-image: url(${url})`
      })
  })
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 1000,
  timeout: 3600
}

navigator.geolocation.getCurrentPosition(success, error, options)

function error() {
  alert('Где ты вообще...'); // на случай ошибки
}

function success(position) {
  const { latitude, longitude } = position.coords

  const namePosition = appFetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`)
  namePosition
    .then(data => updateLocation(data[0].name))
}





