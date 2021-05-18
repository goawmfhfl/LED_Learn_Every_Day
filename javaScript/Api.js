
//const weather = document.querySelector(".js-weather")

// HTML span 태그 설정
const API_KEY = "6720dd6382b0a7536a9ab1184aed41a1";
// https://openweathermap.org/ -> 회원가입 - > 오른쪽 상단 본인 아이디 클릭 -> 복사
const COORDS = "coords";
// local storagy key 값 설정

function getWether(lat,lng){
    //getWether(lat,lng) 인자 (lat,lng) = getWether(latitude,longitude) 인자로 불러온 값 
    // getWether(parseCoords.latitude, parseCoords.longitude); 인자로 불러온 값 즉 문자열
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    // fetch를 통해서 날짜 api 정보를 업데이트 받아옴 중간에 lat , lng , API_KEY 를 설정해주고
    // &units=metric 를 마지막에 붙어서 온도를 섭씨온도로 확인할 수 있게해줌
    .then(function(response){
        return response.json();
    })
    // then을 설정해준 이유는 fetch를 하는 과정중에서 다른 코드를 실행할 경우 오류가 발생할 수 있기 떄문이다.
    // then 설정을 통해서 fetch의 데이터를 받는 과정이 끝난 후에 다음 명령어가 실행이 된다.
    // 첫번째 then을 통해서 정보가 respone 진행 중인 것을 확인 할 수 있음.
    // respone 결과를 반환하기 위해 return 실행
    .then(function(json){
        // console.log(json); 할 경우 콘솔창을 통해서 불러온 데이터를 확인할 수 있음
        const temp_max = json.main.temp_max;
        const temp_min = json.main.temp_min;
        const temp_now = json.main.temp;
        // 호출하기 위하여 객체와 시켜주기
        document.querySelector(".js-weather").
        innerHTML= `${temp_now} ${temp_min} ${temp_max}`
        // 객체화 된 데이터들 HTML에 추가하기.
}
)}

function saveCoords(coordsObj){
    // (coordsObj)의 인자는 coordsObj = {latitude,longitude};를 불러온다
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
    // {latitude,longitude} 불러온 인자를 localstoragy에 value값으로 const COORDS = "coords";를 key값으로 넣어준다
    // 이때 value값은 javascript가 읽을 수 있게 문자열로 변경해준다.
    // 이로써 else문이 실행되기 이전의 문자열인 value값들이 parseCoords를 통해서 넘버열로 바뀌게된다.
}

function handleGeoError(){
    console.log("cant access geo location");
//navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)를 통해
//위치정보가 없을 때 콘솔창에 나오는 메세지
}
function handleGeoSucces(position){
//navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
//(position) = navigator.geolocation.getCurrentPosition 으로 불러온 값
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //latitude=> 위도 longitude => 경도 // 위도 경도 모두 지구상의 위치를 표시하는 좌표
    const coordsObj = {
        latitude,
        longitude
    };
    //선언한 변수명 key : value  네이밍이 같다면 latitude 하나로 표시 가능
    saveCoords(coordsObj);
    //saveCoords 인자는 coordsObj 
    getWether(latitude,longitude);
    //함수 getWether(lat,lng)을 통해 이 두가지 상수로 사용한다.
    
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
    // 현재의 위도와 경도를 알 수 있는 매서드
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    //loadedCords는 const COORDS = "coords"; 의 value 이다.
    if(loadedCords === null){
        askForCoords();  
    //조건문 만약에 loadedCords === null 이라면? askForCoords 함수 실행 
    }else{
        const parseCoords = JSON.parse(loadedCords);
    //아니면  
    //parseCoords는 "coords"; 의 value 문자열을 -> 오브젝트열로 변환한다.
        getWether(parseCoords.latitude, parseCoords.longitude);
    // 오브젝트열의 위도값과 경도 값은 getWether(lat,lng)의 인자.
    }
}

function init_api(){
    loadCoords()
}

init_api();

// 실행시키기 위한 함수


