const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

/*
만약 숫자가 10보다 작다면? 그게 참이라면 0${seconds}를 실행할 것이고 그게 거짓이라면 seconds 이 부분을 실행할거야.
? = if의 기능을 한다.

*/


function init(){
    getTime();
    setInterval(getTime, 1000 );
}

init()


/*
clockTitle.innerText 객체 안에 텍스트를 넣기 위해서다.
*/ 