const placeInput = document.getElementById('place');
const placeText = document.querySelector('.place-text');
const date = document.querySelector('.date');
const temprature = document.querySelector('.temprature');
const feelsLike = document.querySelector('.feels-like');
const wetherType = document.querySelector('.wether-type');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const image = document.querySelector('.image');

const aqiValue = document.querySelector('.aqi-value');
// const aqiLevel = document.querySelector('.aqi-level');
// const aqiCategory = document.querySelector('.aqi-category');
const aqiIndicator = document.querySelector('.aqi-indicator');
// const aqiText = document.querySelector('.aqi-text');

const temp1 = document.querySelector('.temp-1');
const temp2 = document.querySelector('.temp-2');
const temp3 = document.querySelector('.temp-3');
const temp4 = document.querySelector('.temp-4');
const temp5 = document.querySelector('.temp-5');
const temp6 = document.querySelector('.temp-6');
const temp7 = document.querySelector('.temp-7');
const temp8 = document.querySelector('.temp-8');
const temp9 = document.querySelector('.temp-9');
const temp10 = document.querySelector('.temp-10');
const temp11 = document.querySelector('.temp-11');
const temp12 = document.querySelector('.temp-12');
const temp13 = document.querySelector('.temp-13');
const temp14 = document.querySelector('.temp-14');
const temp15 = document.querySelector('.temp-15');
const temp16 = document.querySelector('.temp-16');
const temp17 = document.querySelector('.temp-17');
const temp18 = document.querySelector('.temp-18');
const temp19 = document.querySelector('.temp-19');
const temp20 = document.querySelector('.temp-20');
const temp21 = document.querySelector('.temp-21');
const temp22 = document.querySelector('.temp-22');
const temp23 = document.querySelector('.temp-23');
const temp24 = document.querySelector('.temp-24');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const moonrise = document.querySelector('.moonrise');
const moonset = document.querySelector('.moonset');

const rainmm = document.querySelector('.rainmm');
const raininch = document.querySelector('.raininch');




//const url = `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${place}&aqi=no`
function conditionLoader(code) {
    const codeToSvgMap = {
        1000: "image/sunny.svg", // Clear
        1003: "image/partly_cloudy.svg",// Partly cloudy
        1006: "image/cloudy.svg",// Cloudy
        1009: "image/cloudy.svg",// Overcast
        1030: "image/cloudy-night-1.svg",//fog
        1063: "image/rainy-2.svg",
        1066: "image/snowy-2.svg",
        1069: "image/rainy-1.svg",//drizzle
        1072: "image/rainy-2.svg",
        1087: "image/thunder.svg",
        1114: "image/snowy-6.svg",
        1117: "image/snowy-6.svg",//snow
        1135: "image/snowy-6.svg",
        1147: "image/cloudy-night-1.svg",//fog
        1150: "image/rainy-2.svg",
        1153: "image/rainy-2.svg",
        1168: "image/rainy-7.svg",
        1171: "image/rainy-7.svg",
        1180: "image/rainy-6.svg",
        1183: "image/rainy-3.svg",
        1186: "image/rainy-3.svg",
        1189: "image/rainy-3.svg",
        1192: "image/rainy-7.svg",
        1195: "image/rainy-7.svg",
        1198: "image/rainy-7.svg",
        1201: "image/rainy-7.svg",
        1204: "image/rainy-7.svg",//drizzle
        1207: "image/rainy-7.svg",
        1210: "image/snowy-3.svg",
        1213: "image/snowy-2.svg",
        1216: "image/snowy-4.svg",
        1219: "image/snowy-4.svg",
        1222: "image/snowy-6.svg",
        1225: "image/snowy-6.svg",
        1237: "image/snowy-6.svg",
        1240: "image/rainy-6.svg",
        1243: "image/rainy-7.svg",
        1246: "image/rainy-7.svg",
        1249: "image/rainy-5.svg",
        1252: "image/rainy-4.svg",
        1255: "image/snowy-4.svg",
        1258: "image/snowy-6.svg",
        1261: "image/snowy-6.svg",
        1264: "image/snowy-6.svg",
        1273: "image/thunder.svg",
        1276: "image/thunder.svg",
        1279: "image/thunder.svg",
        1282: "image/thunder.svg"
    };

    const svgName = codeToSvgMap[code] || "sunny.svg";
   // document.getElementById("weather-svg").setAttribute("src", `/assets/${svgName}`);
   return svgName
}

function aqi(aqiData){

    if(aqiData > 0 && aqiData < 50){
        // aqiText.innerHTML = "Good";
        // aqiIndicator.classList.add('bg-green-500');
        // aqiIndicator.style.backgroundColor = "green";
         return "green";
    }
    else if(aqiData > 50 && aqiData < 100){
        // aqiText.innerHTML = "Moderate";
        // aqiIndicator.style.backgroundColor = "yellow";
         return "yellow";

        // aqiIndicator.classList.add('bg-yellow-500');
    }
    else if(aqiData > 100 && aqiData < 150){
        // aqiText.innerHTML = "Unhealthy for Sensitive Groups";
       // aqiIndicator.style.backgroundColor = "orange";
        // aqiIndicator.classList.add('bg-orange-500');
         return "orange";
    }
    else if(aqiData > 150 && aqiData < 200){
        // aqiText.innerHTML = "Unhealthy";
        // aqiIndicator.style.backgroundColor = "red";
        // aqiIndicator.classList.add('bg-red-500');
         return "red";
    }
    else if(aqiData > 200 && aqiData < 300){
        // aqiText.innerHTML = "Very Unhealthy";
        // aqiIndicator.style.backgroundColor = "purple";
    //    aqiIndicator.classList.add('bg-purple-500');
         return "purple";
    }
    else if(aqiData > 300){
        // aqiText.innerHTML = "Hazardous";
        // aqiIndicator.style.backgroundColor = "magenta";
    //    aqiIndicator.classList.add('bg-red-900');
         return "magenta";
    }
}

function dataLoader(data,forcust){
    date.innerHTML = data.location.localtime;
    placeText.innerHTML =`${data.location.name} , ${data.location.region}, ${data.location.country} `;
    temprature.innerHTML = `${Math.round(data.current.temp_c)}°<span class="text-2xl font-thin">C</span>`;
    feelsLike.innerHTML = `Feels like : ${Math.round(data.current.feelslike_c)}°<span class="text-2xl font-thin">C</span>`;
    wetherType.innerHTML = data.current.condition.text;
    wind.innerHTML = ` ${Math.round(data.current.wind_kph)}<span class="text-2xl font-thin">km/h</span>`;
    humidity.innerHTML = `${Math.round(data.current.humidity)}<span class="text-2xl font-thin">%</span>`;
    let svgName = conditionLoader(data.current.condition.code);
    image.src = svgName;

    /**AQI */

    const aqiData = data.current.air_quality.pm10;
    aqiValue.innerHTML = Math.round(aqiData);
    let color = aqi(aqiData);
    aqiIndicator.style.backgroundColor = color;

    /**sun and moon */

    sunrise.textContent = `${forcust.forecast.forecastday[0].astro.sunrise}`;
    sunset.textContent = `${forcust.forecast.forecastday[0].astro.sunset}`;
    moonrise.textContent = `${forcust.forecast.forecastday[0].astro.moonrise}`;
    moonset.textContent = `${forcust.forecast.forecastday[0].astro.moonset}`;

    /**rain */
    rainmm.textContent = `${forcust.forecast.forecastday[0].day.totalprecip_mm} mm`;
    raininch.textContent = `${forcust.forecast.forecastday[0].day.totalprecip_in} inch`;


    

    /**---------- */

     temp1.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[0].temp_c)}°`;
     temp2.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[1].temp_c)}°`;
     temp3.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[2].temp_c)}°`;
     temp4.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[3].temp_c)}°`;
     temp5.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[4].temp_c)}°`;
     temp6.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[5].temp_c)}°`;
     temp7.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[6].temp_c)}°`;
     temp8.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[7].temp_c)}°`;
     temp9.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[8].temp_c)}°`;
     temp10.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[9].temp_c)}°`;
     temp11.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[10].temp_c)}°`;
     temp12.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[11].temp_c)}°`;
     temp13.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[12].temp_c)}°`;
     temp14.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[13].temp_c)}°`;
     temp15.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[14].temp_c)}°`;
     temp16.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[15].temp_c)}°`;
     temp17.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[16].temp_c)}°`;
     temp18.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[17].temp_c)}°`;
     temp19.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[18].temp_c)}°`;
     temp20.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[19].temp_c)}°`;
     temp21.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[20].temp_c)}°`;
     temp22.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[21].temp_c)}°`;
     temp23.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[22].temp_c)}°`;
     temp24.innerHTML = `${Math.round(forcust.forecast.forecastday[0].hour[23].temp_c)}°`;

     console.log(forcust.forecast.forecastday[1]);
     
   
}


async function getWethertData(place){
    
    const url = `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${place}&aqi=yes`;
    const url2 = `http://api.weatherapi.com/v1/forecast.json?key=0c80b2b56f1943ada19100744230103&q=${place}&aqi=no`;
    try{
        let response = await fetch(url);
        let data = await response.json();
        
        console.log(data.location.name);
        // console.log(data);

        let res2 = await fetch(url2);
        let forecast = await res2.json();
       console.log(forecast);

        dataLoader(data,forecast);
    }
    catch(error){
        console.log(error);
        
    }
}





let debounceTimer;

placeInput.addEventListener('input',()=>{
    let place = placeInput.value.trim();
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(()=>{
        if (place) {
           getWethertData(place) 
        }
    },700)
});


function mapFunction(){
    urlmap = 'https://maps.geoapify.com/v1/tile/carto/{z}/{x}/{y}.png?&apiKey=1c5f0b09f82349008aa1126192e6da15'
}

const wavePoints = document.querySelectorAll('.wave-point');
wavePoints.forEach((el, i) => {
  const x = i * 80; // spacing
  const amplitude = 30;
  const frequency = 0.02;
  const y = Math.sin(x * frequency) * amplitude;
  el.style.left = `${x}px`;
  el.style.bottom = `${50 + y}px`;
});

