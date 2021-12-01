const weather = document.querySelector('#weatherInfo')
const userLocation = document.querySelector('#location')
const API_KEY = 'bac15f204cf5105d1c4c9cc00bea7a22'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

const success = async (pos) => {
  await fetch(
    `${API_URL}?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      userLocation.innerHTML = data.name
      weather.innerHTML = data.weather[0].main
    })
    .catch((error) => console.log(error))
}
navigator.geolocation.getCurrentPosition(success)
