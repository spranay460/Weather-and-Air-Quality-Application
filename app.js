const weatherUrl = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
const weatherOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8ac22db812msh13a6a9b07a38e33p1c0576jsnff6bb3375f92",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const airQualityUrl =
  "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=";
const airQualityOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8ac22db812msh13a6a9b07a38e33p1c0576jsnff6bb3375f92",
    "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
  },
};

async function getWeather(city) {
  try {
    const weather = await fetch(weatherUrl + city, weatherOptions);
    const weatherObject = await weather.json();
    return weatherObject;
  } catch (error) {
    return error;
  }
}

async function getAirQuality(city) {
  try {
    const airQuality = await fetch(airQualityUrl + city, airQualityOptions);
    const airQualityObject = await airQuality.json();
    return airQualityObject;
  } catch {
    return error;
  }
}

function airQualityStandard(aqi) {
  if (aqi >= 0 && aqi <= 50) {
    return "Good";
  } else if (aqi >= 51 && aqi <= 100) {
    return "Satisfactory";
  } else if (aqi >= 101 && aqi <= 200) {
    return "Moderate";
  } else if (aqi >= 201 && aqi <= 300) {
    return "Poor";
  } else if (aqi >= 301 && aqi <= 400) {
    return "Very poor";
  } else {
    return "Severe";
  }
}

async function callToMain(city) {
  
  let city_name = document.querySelector("#city-name");
  city_name.innerText = city;

  let condition = document.querySelector("#condition");
  let weather = await getWeather(city);
  condition.innerText = weather.current.condition.text;
  let air_quality_comment = document.querySelector("#air-quality-comment");
  let airQuality = await getAirQuality(city);
  air_quality_comment.innerText = airQualityStandard(airQuality.overall_aqi);

  let temp_c = document.querySelector("#temp_c");
  let gust_kph = document.querySelector("#gust_kph");
  let humidity = document.querySelector("#humidity");
  let last_updated = document.querySelector("#last_updated");
  let uv = document.querySelector("#uv");
  let wind_kph = document.querySelector("#wind_kph");
  temp_c.innerText = weather.current.temp_c;
  gust_kph.innerText = weather.current.gust_kph;
  humidity.innerText = weather.current.humidity;
  last_updated.innerText = weather.current.last_updated;
  uv.innerText = weather.current.uv;
  wind_kph.innerText = weather.current.wind_kph;

  let overall_aqi = document.querySelector("#overall_aqi");
  let CO = document.querySelector("#CO");
  let NO2 = document.querySelector("#NO2");
  let O3 = document.querySelector("#O3");
  let PM25 = document.querySelector("#PM25");
  let PM10 = document.querySelector("#PM10");
  let SO2 = document.querySelector("#SO2");
  overall_aqi.innerText = airQuality.overall_aqi;
  CO.innerText = airQuality.CO.concentration;
  NO2.innerText = airQuality.NO2.concentration;
  O3.innerText = airQuality.O3.concentration;
  PM10.innerText = airQuality.PM10.concentration;
  SO2.innerText = airQuality.SO2.concentration;

}

callToMain("tokyo");
callToNewYork();
callToLondon();
callToSeoul();
callToToronto();
callToBarcelona();
callToOsaka();
let btn = document.querySelector("button");
btn.addEventListener("click", async (e)=>{
  e.preventDefault();
  let city = document.querySelector("input").value;
  callToMain(city);

})

//new york
async function callToNewYork(){
  let weather = await getWeather("new york");
  let airQuality = await getAirQuality("new york");

  let ny_condition = document.querySelector("#ny-condition");
  let ny_gust_kph = document.querySelector("#ny-gust_kph");
  let ny_humidity = document.querySelector("#ny-humidity");
  let ny_temp_c = document.querySelector("#ny-temp_c");
  let ny_uv = document.querySelector("#ny-uv");
  let ny_wind_dir = document.querySelector("#ny-wind_dir");
  let ny_wind_kph = document.querySelector("#ny-wind_kph");
  let ny_last_updated = document.querySelector("#ny-last_updated");
  let ny_overall_aqi = document.querySelector("#ny-overall_aqi");
  ny_condition.innerText = weather.current.condition.text;
  ny_gust_kph.innerText = weather.current.gust_kph;
  ny_humidity.innerText = weather.current.humidity;
  ny_temp_c.innerText = weather.current.temp_c;
  ny_uv.innerText = weather.current.uv;
  ny_wind_dir.innerText = weather.current.wind_dir;
  ny_wind_kph.innerText = weather.current.wind_kph;
  ny_last_updated.innerText = weather.current.last_updated;
  ny_overall_aqi.innerText = airQuality.overall_aqi;
  
}

//london
async function callToLondon(){
  let weather = await getWeather("london");
  let airQuality = await getAirQuality("london");

  let london_condition = document.querySelector("#london-condition");
  let london_gust_kph = document.querySelector("#london-gust_kph");
  let london_humidity = document.querySelector("#london-humidity");
  let london_temp_c = document.querySelector("#london-temp_c");
  let london_uv = document.querySelector("#london-uv");
  let london_wind_dir = document.querySelector("#london-wind_dir");
  let london_wind_kph = document.querySelector("#london-wind_kph");
  let london_last_updated = document.querySelector("#london-last_updated");
  let london_overall_aqi = document.querySelector("#london-overall_aqi");
  london_condition.innerText = weather.current.condition.text;
  london_gust_kph.innerText = weather.current.gust_kph;
  london_humidity.innerText = weather.current.humidity;
  london_temp_c.innerText = weather.current.temp_c;
  london_uv.innerText = weather.current.uv;
  london_wind_dir.innerText = weather.current.wind_dir;
  london_wind_kph.innerText = weather.current.wind_kph;
  london_last_updated.innerText = weather.current.last_updated;
  london_overall_aqi.innerText = airQuality.overall_aqi;
  
}

//seoul
async function callToSeoul(){
  let weather = await getWeather("seoul");
  let airQuality = await getAirQuality("seoul");

  let seoul_condition = document.querySelector("#seoul-condition");
  let seoul_gust_kph = document.querySelector("#seoul-gust_kph");
  let seoul_humidity = document.querySelector("#seoul-humidity");
  let seoul_temp_c = document.querySelector("#seoul-temp_c");
  let seoul_uv = document.querySelector("#seoul-uv");
  let seoul_wind_dir = document.querySelector("#seoul-wind_dir");
  let seoul_wind_kph = document.querySelector("#seoul-wind_kph");
  let seoul_last_updated = document.querySelector("#seoul-last_updated");
  let seoul_overall_aqi = document.querySelector("#seoul-overall_aqi");
  seoul_condition.innerText = weather.current.condition.text;
  seoul_gust_kph.innerText = weather.current.gust_kph;
  seoul_humidity.innerText = weather.current.humidity;
  seoul_temp_c.innerText = weather.current.temp_c;
  seoul_uv.innerText = weather.current.uv;
  seoul_wind_dir.innerText = weather.current.wind_dir;
  seoul_wind_kph.innerText = weather.current.wind_kph;
  seoul_last_updated.innerText = weather.current.last_updated;
  seoul_overall_aqi.innerText = airQuality.overall_aqi;
  
}

//toronto
async function callToToronto(){
  let weather = await getWeather("toronto");
  let airQuality = await getAirQuality("toronto");

  let toronto_condition = document.querySelector("#toronto-condition");
  let toronto_gust_kph = document.querySelector("#toronto-gust_kph");
  let toronto_humidity = document.querySelector("#toronto-humidity");
  let toronto_temp_c = document.querySelector("#toronto-temp_c");
  let toronto_uv = document.querySelector("#toronto-uv");
  let toronto_wind_dir = document.querySelector("#toronto-wind_dir");
  let toronto_wind_kph = document.querySelector("#toronto-wind_kph");
  let toronto_last_updated = document.querySelector("#toronto-last_updated");
  let toronto_overall_aqi = document.querySelector("#toronto-overall_aqi");
  toronto_condition.innerText = weather.current.condition.text;
  toronto_gust_kph.innerText = weather.current.gust_kph;
  toronto_humidity.innerText = weather.current.humidity;
  toronto_temp_c.innerText = weather.current.temp_c;
  toronto_uv.innerText = weather.current.uv;
  toronto_wind_dir.innerText = weather.current.wind_dir;
  toronto_wind_kph.innerText = weather.current.wind_kph;
  toronto_last_updated.innerText = weather.current.last_updated;
  toronto_overall_aqi.innerText = airQuality.overall_aqi;
  
}

//barcelona
async function callToBarcelona(){
  let weather = await getWeather("barcelona");
  let airQuality = await getAirQuality("barcelona");

  let barcelona_condition = document.querySelector("#barcelona-condition");
  let barcelona_gust_kph = document.querySelector("#barcelona-gust_kph");
  let barcelona_humidity = document.querySelector("#barcelona-humidity");
  let barcelona_temp_c = document.querySelector("#barcelona-temp_c");
  let barcelona_uv = document.querySelector("#barcelona-uv");
  let barcelona_wind_dir = document.querySelector("#barcelona-wind_dir");
  let barcelona_wind_kph = document.querySelector("#barcelona-wind_kph");
  let barcelona_last_updated = document.querySelector("#barcelona-last_updated");
  let barcelona_overall_aqi = document.querySelector("#barcelona-overall_aqi");
  barcelona_condition.innerText = weather.current.condition.text;
  barcelona_gust_kph.innerText = weather.current.gust_kph;
  barcelona_humidity.innerText = weather.current.humidity;
  barcelona_temp_c.innerText = weather.current.temp_c;
  barcelona_uv.innerText = weather.current.uv;
  barcelona_wind_dir.innerText = weather.current.wind_dir;
  barcelona_wind_kph.innerText = weather.current.wind_kph;
  barcelona_last_updated.innerText = weather.current.last_updated;
  barcelona_overall_aqi.innerText = airQuality.overall_aqi;
  
}

//osaka
async function callToOsaka(){
  let weather = await getWeather("osaka");
  let airQuality = await getAirQuality("osaka");

  let osaka_condition = document.querySelector("#osaka-condition");
  let osaka_gust_kph = document.querySelector("#osaka-gust_kph");
  let osaka_humidity = document.querySelector("#osaka-humidity");
  let osaka_temp_c = document.querySelector("#osaka-temp_c");
  let osaka_uv = document.querySelector("#osaka-uv");
  let osaka_wind_dir = document.querySelector("#osaka-wind_dir");
  let osaka_wind_kph = document.querySelector("#osaka-wind_kph");
  let osaka_last_updated = document.querySelector("#osaka-last_updated");
  let osaka_overall_aqi = document.querySelector("#osaka-overall_aqi");
  osaka_condition.innerText = weather.current.condition.text;
  osaka_gust_kph.innerText = weather.current.gust_kph;
  osaka_humidity.innerText = weather.current.humidity;
  osaka_temp_c.innerText = weather.current.temp_c;
  osaka_uv.innerText = weather.current.uv;
  osaka_wind_dir.innerText = weather.current.wind_dir;
  osaka_wind_kph.innerText = weather.current.wind_kph;
  osaka_last_updated.innerText = weather.current.last_updated;
  osaka_overall_aqi.innerText = airQuality.overall_aqi;
  
}