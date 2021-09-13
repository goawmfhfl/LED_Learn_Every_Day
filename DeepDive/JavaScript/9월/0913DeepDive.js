

{
//1초 후 타이머가 만료되면 콜백 함수가 호출된다.
// setTimeout(()=> console.log('Hi'),1000)

// 1초 후 타이머가 만료되면 콜백 함수가 호출된다.
// 이때 콜백 함수에 'Lee'가 인수로 전달된다.
// setTimeout(name=> console.log(`hi! ${name}`),1000,'Lee')

// 1초 후 타이머가 만료되면 콜백 함수가 호출된다.
// setTimeout 함수는 생성된 타이머를 식벽할 수 있는 고유한 타이머 id를 반환한다
// const timerId = setTimeout(()=> console.log('hi'),1000)

// setTimeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하며 타이머를 취소한다
// 타이머가 취소되면 setTimeout 함수의 콜백 함수가 실행되지 않는다.
// clearTimeout(timerId)
}
{
    // let count = 1;

    // 1초 후 타이머가 만료될 떄마다 콜백 함수가 호출된다.
    // setInterval 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다.
    // const timeOutId = setInterval(()=>{
    //     console.log(count);

        // conunt가 5이면 setInterval 함수가 반환한 타이머 id를 clearInterval 함수의 인수로 전달하여
        // 타이머를 취소한다. 타이머가 취소되면 serInterval 콜백 함수가 실행되지 않는다.
    //     if(count++ === 5) clearInterval(timeOutId)
    // }, 1000)
}
{
    function foo(){
        console.log('foo');
    }
    function bar() {
        console.log('bar');
    }

    setTimeout(foo,0); // 0초 (실제는 4ms) 후에 foo 함수가 호출된다.
    bar()
}
{
    // {
    //     "name":"Lee",
    //     "age":20,
    //     "alive":true,
    //     "hobby":["traveling","tennis"]
    // }
}
{
    const obj = {
        name:'Lee',
        age:20,
        alive:true,
        hobby:['traveling','tennis']
    }
    
    // 객체를 JSON 포맷의 문자열로 변환한다.
    const json = JSON.stringify(obj)
    console.log(typeof json, json);
    // string {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

    // 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
    const prettyJson = JSON.stringify(obj,null,2)
    console.log(typeof prettyJson, prettyJson);

    // string {
    //     "name": "Lee",
    //     "age": 20,
    //     "alive": true,
    //     "hobby": [
    //       "traveling",
    //       "tennis"
    //     ]
    //   }

    // replacer 함수, 값의 타입이 Number이면 필터링디어 변환되지 않는다.
    function filter(key, value) {
        // undefined: 반환하지 않음
        return typeof value === 'number' ? undefined : value;
    }

    // JSON.stringfy 메서드에 두 번째 인수로 replacer 함수를 전달한다.

    const strFilteredObject = JSON.stringify(obj,filter,2)
    console.log(typeof strFilteredObject, strFilteredObject);

    // string {
    //     "name": "Lee",
    //     "alive": true,
    //     "hobby": [
    //       "traveling",
    //       "tennis"
    //     ]
    //   }
}
{
    const obj = {
        name:'Lee',
        age:20,
        alive:true,
        hobby:['traveling','tennis']
    }

    // 객체를 JSON 포맷의 문자열로 변환한다
    const json = JSON.stringify(obj)

    // JSON 포맷의 문자열을 객체로 변환한다
    const parsed = JSON.parse(json)
    console.log(typeof parsed, parsed);
    // object { name: 'Lee', age: 20, alive: true, hobby: [ 'traveling', 'tennis' ] }
}
{
    const todos =[
        {id:1, content: 'HTML', completed:false},
        {id:2, content: 'CSS', completed:true},
        {id:3, content: 'JavaScript', completed:false},
    ]
    // 배열의 JSON 포맷의 문자열로 변환한다.
    const json = JSON.stringify(todos)
    console.log('json : ',json);

//json :
//[ {"id":1,"content":"HTML","completed":false}
//  {"id":2,"content":"CSS","completed":true},
//  {"id":3,"content":"JavaScript","completed":false} ]

    const parsed = JSON.parse(json)
    console.log(typeof parsed,'parsed : ',parsed)
    // object parsed :  [
        // { id: 1, content: 'HTML', completed: false },
        // { id: 2, content: 'CSS', completed: true },
        // { id: 3, content: 'JavaScript', completed: false }
    //   ]

}
// {
//     // XMLHttpRequest 객체의 생성
//     // const xhr = new XMLHttpRequest()

//     // HTTP 요청 초기화
//     xhr.open('GET','/users');

//     // HTTP 요청 헤더 설정
//     // 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정 : json
//     xhr.setRequestHeader('content-type','application/json');
    
//     // http 요청 전송
//     xhr.send()
// }
{
    // xhr.open(method, url[, async])
}
{
    // xhr.send(JSON.stringify({id: 1, content:'HTML',completed:false}))
}
{
    // XMLHttpRequest 객체 생성
//     const xhr = new XMLHttpRequest();

//     // HTTP 요청 초기화
//     xhr.open('POST','/users');

//     // HTTP 요청 헤더 설정
//     // 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정 : json
//     xhr.setRequestHeader('content-type','application/json');

//     // HTTP 요청 전송
//     xhr.send(JSON.stringify({id:1, content:'HTML',completed:false}));
// }
// {
    // xhr.setRequestHeader('accept','application/json')
}
{
    // XMLHttpRequest 객체 생성
    const xhr = new XMLHttpRequest();

    // HTTP 초기화
    // https://jsonplaceholder.typeicode.com Fake REST API를 제공하는 서비스다.
    xhr.open('GET','https://jsonplaceholder.typeicode.com/todos/1');

    // HTTP 요청 전송
    xhr.send();

    // readyStateChange 이벤트는 HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티가
    // 변경될 때마다 발생한다
    xhr.onreadystatechange = () => {
        // readyState 프로퍼티는 HTTP 요청의 현재 상태를 나타낸다.
        // readyState 프로퍼티 값이 4(XMLHttpRequest.DONE)가 아니면 서버 응답이 완료되지 않은 상태다
        // 만약 서버 응답이 아직 완료되지 않았다면 아무런 처리를 하지 않는다.
        if(xhr.readyState !== XMLHttpRequest.DONE) return;

        // status 프로퍼티는 응답 상태 코드를 나타낸다.
        // status 프로퍼티 값이 200이면 정상적으로 응답된 상태이고
        // status 프로퍼티 값이 200이 아니면 에러가 발생한 상태다.
        // 정상적으로 응답된 상태라면 response 프로퍼티에 서버의 응답 결과가 담겨 있다.
        if(xhr.status === 200){
            console.log(JSON.parse(xhr.response));
            //{userId: 1, id 1, title: "delectus aut autem", completed: false}
        }else{
            console.error('Error',xhr.status,xhr.statusText);
        }
    };
}
{
}