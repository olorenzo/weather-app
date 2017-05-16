const appid = '709ccbd9a718bc47eabb739d9bfd4690'
const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?zip='


const city = document.querySelector('.city')
const weather = document.querySelector('.weather')
const temp = document.querySelector('.temp')
const zip = document.querySelector('.zip')

const getWeather = function(zipCode) {
  $.ajax({
    url: rootUrl + zipCode + ',us&appid=' + appid,
    success: function(response) {
      console.log(response);
      city.textContent = response.name
      weather.textContent = response.weather[0].description
      temp.textContent =Math.round( response.main.temp *  9/5 - 459.67)
    }
  })

}
getWeather('33012')

zip.addEventListener('keypress', function(event) {
  if(event.keyCode === 13) {
  getWeather(zip.value)
}
})
