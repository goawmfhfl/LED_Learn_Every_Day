/* <h3 id="title" class="btn title_7">현재 기온</h3>
<p class="temp_now"></p>
<h3 id="title" class="btn title_7">최고 기온</h3>
<p class="temp_max"></p>
<h3 id="title" class="btn title_7">최저 기온</h3>
<p class="temp_min"></p> */

const now_temp = document.querySelector(".temp_now");
const max_temp = document.querySelector(".temp_max");
const min_temp = document.querySelector(".temp_min");
const now_place = document.querySelector(".api_place");

const API_KEY = "6720dd6382b0a7536a9ab1184aed41a1";

const CooDs_Key = "coods";


function getWether(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(respone){
        return respone.json()
    }).then(function(JSON){
    console.log(JSON);
    const temp_now = JSON.main.temp;
    const temp_max = JSON.main.temp_max;
    const temp_min = JSON.main.temp_min;
    const place = JSON.name;
    now_temp.innerHTML = temp_now;
    max_temp.innerHTML = temp_max;
    min_temp.innerHTML = temp_min;
    now_place.innerHTML = place;
    })
}

function saveCoords(obj){
    localStorage.setItem(CooDs_Key,JSON.stringify(obj))
}; 

function error(){
    console.log ("cant access information")

}
function Access(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coodsObj = {
        latitude,
        longitude
    }
    saveCoords(coodsObj);
    getWether(latitude,longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(Access,error);
    
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(CooDs_Key);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWether(parseCoords.latitude,parseCoords.longitude);
    }
}

function init_Coods(){
    loadCoords();
}

init_Coods();