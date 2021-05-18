const date = new Date();

const rendering = () => {

    date.setDate(1);
    
    const monthdays = document.querySelector(".days")

    // 이번달의 마지막 일
    
    const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,0).
    getDate();
    
    // 저번달의 마지막 일
    
    const prevMonthLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),0).
        getDate();
    
    // 첫번째 날의 index number 목요일 = 4
    
    const firstDayIndex = date.getDay();

    
    // 마지막 날의 index number 금요일
    
    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,0).
        getDay();
    
    // 다음 날짜 구하기
    
    const nextDay = 7 - lastDayIndex - 1;
     
    
    
    const months = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
    ];
    
    document.querySelector(".date h1").
    innerHTML = months[date.getMonth()]
    
    document.querySelector(".date p").
    innerHTML = new Date().toDateString();
    
    let days = "";
    
    // 저번달 date
    
    for (let x = firstDayIndex; x > 0; x--){
        days += `<div class="prev-date">
        ${prevMonthLastDay - x + 1}</div>`
    }
    
    // 이번달
    
    for(let i = 1; i <= lastDay; i++){
        if(i === new Date().getDate()
        && date.getMonth() === new Date().getMonth())
            days += `<div class="today">${i}</div>`
         else{
            days += `<div>${i}</div>`
         }
    }

    // 다음달

    for(let j = 1; j <= nextDay; j++){
        days += `<div class="next-date">
        ${j}</div>`
        monthdays.innerHTML = days;
    }
}

//rendering button

document.querySelector(".prev").
addEventListener('click',()=>{
    date.setMonth(date.getMonth() - 1)
    rendering();
})

document.querySelector(".next").
addEventListener('click',()=>{
    date.setMonth(date.getMonth() + 1)
    rendering();
})

rendering();



