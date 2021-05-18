
/* 2020년 4월 기준 new Date(); */

const date = new Date();

console.log(date);
const renderClaendar = () =>{

    const monthDays = document.querySelector(".days");
    
    // 이번달의 마지막 일
    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth()+ 1,0)
        .getDate();
        console.log(lastDay);
    // 저번달의 마지막 일
    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),0).
        getDate();
        console.log(prevLastDay);
    // 첫번째 날의 index number 목요일 = 4
    const firstDayIndex = date.getDay();
        console.log(firstDayIndex);

    // 마지막 날의 index number 금요일 = 5
    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth()+ 1,0).
        getDay();
        console.log(lastDayIndex);
    // 다음 날짜 구하기
    const nextDays = 7 - lastDayIndex - 1 
        console.log(nextDays);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    document.querySelector(".date h1").innerHTML
    = months[date.getMonth()];
    document.querySelector(".date p").innerHTML
    = new Date().toDateString();

let days = "";

for(let x = firstDayIndex; x > 0; x--){
    days += `<div class= "prev-date">
    ${prevLastDay - x + 1}</div>`;

    // `<div class= "prev-date">28</div>`;
    // `<div class= "prev-date">29</div>`;
    // `<div class= "prev-date">30</div>`;
    // `<div class= "prev-date">31</div>`;
};


for(let i = 1; i <= lastDay; i++){
    if(i === new Date().getDate() && date.getMonth()
    === new Date().getMonth()){
        days +=`<div class="today">${i}</div>`
    }else{
        days += `<div>${i}</div>`
    }
}

for(let j = 1; j <= nextDays; j++){
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days;

    // `<div class="next-date">1</div>`
}

}


document.querySelector('.prev').
addEventListener('click',()=>{
    date.setMonth(date.getMonth() - 1 );
    renderClaendar()
})
document.querySelector('.next').
addEventListener('click',()=>{
    date.setMonth(date.getMonth() + 1 );
    renderClaendar()
})
 renderClaendar();