// Object Activity 1
// Below is an object called currentWeather
const currentWeather = {
  weather: "Rain",
  temp: 50,
  sky: "Overcast",
  details: ["Moderate Rain", 45, "Not Severe"]
};
console.log(`the weather is ${currentWeather.weather}, the temp is ${currentWeather.temp}, and the sky is ${currentWeather.sky}. `)


// Object Activity 2
// Accessing the details key, Print another string that references each of the properties contained within details
let weatherDetails = "These are the details: ";
for(let detail of currentWeather.details){
  weatherDetails += `${detail} `;
}
console.log(weatherDetails)
