'use strict';

// 프로미스는 is class
// promise is a JavaScript object for asynchronous operation
// 자바스크립트 안에 내장되어있는 오브젝트이며
// 비동기적인 것을 수행할 때 콜백함수 대신에 유용하게 사용한다.

// 보통은 프로미스 안에서 무거운 작업들을 수행한다. 
// 그이유로는 : 네트워크에서 데이터를 받아오거나 파일에서 무언가 큰 데이터를 읽어오는 과정은 시간이 오래걸린다
// 동기적으로 처리할 경우 우리가 파일을 읽어오고 네트워크에서 데이터를 받아오는 동안 그 다음 라인에 코드가 실행되지 않음
// 그렇기에 시간이 걸리는 일 (네트워크 데이터 , 무거운 데이터를 가진 파일) 프로미스로 만들어서 비동기적으로 만들어주는게 좋다

// promise를 이해하기 위해서의 두가지 point

// 1. state 상태의 이해 필요
// state : pending (대기상태)-> fulfilled or rejected
// 기능을 수행하고 있는 중인지?
// 기능을 수행하고나서 성공했는지 실패했는지 이해하는 과정에 대한 이해 필요

// 프로미스의 상태는 promise가 만들어진 후
// 우리가 지정한 operation 수행중일 때는 pending상태가 된다.
// operation가 끝난 후
// 문제가 없다면 fulfilled 상태가 되며
// 문제가 없다면 rejected 상태가 된다. ( example : 파일을 찾을 수 없거나 네트워크에 문제가 생긴다면)

// 2. producer vs customer의 차이점의 이해 필요
// producer 와 consumer의 차이점을 아는것
// 2-1. producer : 우리가 원하는 서비스를 제공하는 사람
// 2-2. customer : 제공한 서비스를 필요로 하는 사람


// 2-1. producer
// when new Promise is created, the executor runs automatically
// 프로미스를 만드는 순간 우리가 전달한 executor라는 콜백함수가 바로 실행이 되는 것을 알 수 있다.
// 예를들어 네트워크 통신을 하는 기능을 만들었다고 해보자 
// executor라는 콜백함수가 바로 실행되기 때문에 네트워크 통신 기능을 바로 수행한다
// 하지만 이런 사실을 간과하고 자동으로 네트워크 통신을 하게 된다면
// 사용자가 원하지 않는 불필요한 네트워크통신까지 하게 될 수 있다. 

// promise class는
// 문제가 없을 경우 즉, 성공할 경우 호출하는 파라미터 resolve 
// 문제가 있을 경우 즉, 실패할 경우 호출하는 파라미터 reject 로 이루어져 있다

//@param executor
// A callback used to initialize the promise.
// This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise,
// and a reject callback used to reject the promise with a provided reason or error.


//case 1 ) resolve
const promise = new Promise((resolve,reject) => {
    console.log('통신중......');
    setTimeout(()=>{
resolve('Herman')
    },2000)
})

// 2.Consumers: then, catch, finally

promise.then((value) => {
    console.log(value);
})

// setTimeout을 통해서 func을 실행 // function name (){}
// resolve 라면 ('Herman')을 전달인자로 resolve 매개변수로 받는다.
// value 라는 파라미터는
// promise가 정상적으로 수행한 후에
// 마지막으로 resolve 콜백함수에서 전달된 인자값을 받는다

// 다시한번 말하자면, then 이라는 것은 promise가 정상적으로 잘 수행이 되어서
// 마지막에 최종적으로 resolve라는 콜백 함수를 통해서
// 전달한 값이 value에 parameter로 전달되어 들어오는것을 알 수 있다.


// 그렇다면 reject 상황은 어떨까?
//case 2 ) reject
{
    const promise = new Promise((resolve,reject) => {
        console.log('통신중....');
        setTimeout(()=>{
        reject (new Error('no network'))
        },2000)
    })

    promise
    .then((value) => {
        console.log(value);
    })
    .catch(error =>{
        console.log(error)
    })
    // reject는 Error라는 오브젝트를 통해서 값을 전달한다.
    // new Error() 클래스는 자바스크립트에서 제공하는 오브젝트중에 하나로 에러를 나타낸다.
    // reject 값을 설정하고 콘솔창을 확인해 보면 uncaught 잡히지 않았다는 에러가 뜬다.
    // then을 통해서 resolve의 상황만 다뤘기 문이다.

    // 그렇다면 reject의 상황에서의 에러는 어떻게 다뤄질까?
    // 그럴때는 바로 catch()문을 활용한다.
    // catch문을 통해서 빨간색 에러라는 글씨가 나오는게 아닌
    // catch()문을 실행한다

    // 이를통해서 알 수 있는것은
    // resolve 시에는 then이 실행되며
    // reject 시에는 catch가 실행된다.

    // promise에 then을 호출하게 되면 then은 결국
    // 똑같은 promise를 리턴한다.
    // 그 리턴된 프로미스에 catch를 다시 호출하는 상황을 체이닝이라고 한다
}

//case 3 ) finally
// finally는 성공,실패 상관없이 마지막에 호출됨
// 아무런 인자를 받지않고 출력할 경우 실패했어도 finally가 출력됨.
// 성공과 실패 상관없이 어떤 기능을 마지막에 수행하고 싶을때 finally를 활용
{
    const promise = new Promise((resolve,reject) => {
        console.log('doing something....');
        setTimeout(()=>{
        reject (new Error('no network'))
        },2000)
    });
    promise
    .then((value) => {
        console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    })
}


// 3. Promise chaining
// 체이닝

const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(()=> resolve(1), 1000);
});
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => resolve(num -1), 1000)
    })
})
.then(num => console.log(num)); // num = 5 delay = 2000

//then promise를 전달할 수 있다.

// 4. Error Handling

const getHen = () =>
new Promise((resolve,reject) => {
    setTimeout(() => resolve ('🐔'),1000);
});

const getEgg = hen =>
new Promise ((resolve,reject) => {
    setTimeout( () => resolve(`${hen} => 🥚`), 1000);
});

const cook = egg =>
new Promise((resolve,reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen() // resolve = 🐔 delay : 1000
.then(hen => getEgg(hen)) // resolve = 🥚 delay : 1000
.then(egg => cook(egg)) // resolve = 🍳 delay : 1000
.then (meal => console.log(meal));
// meal = 🐔 🥚 🍳 delay : 3000

// 간략하게 바꾸기

// callback 함수를 전달할 때 받아오는 value를
// 다른 함수로 바로 호출하는 경우에는 
//.then(getEgg) 이런식으로 생략이 가능하다

// 이렇게하면 then에서 받아오는 value를
// getEgg라는 함수에 암묵적으로 전달해서 호출해준다
// * 한개의 인자를 전달할 경우라는 것
{
    getHen()
.then(getEgg)
.then(cook)
.then (console.log);
}

// 4. Error Handling
{
    const getHen = () =>
new Promise((resolve,reject) => {
    setTimeout(() => resolve ('🐔'),1000);
});
const getEgg = hen =>
new Promise ((resolve,reject) => {
    setTimeout(() => resolve(`! ${hen} => 🥚`), 1000);
}); // reject값 지정

const cook = egg =>
new Promise((resolve,reject) => {
    setTimeout(() => reject(new Error(` error code ${egg} => 🍳`)), 1000);
});

// setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
//.catch(error => {
//    return '🍖';
//})

getHen()
.then(getEgg)
.then(cook)
.catch(error => {
    return '🍎'
})
.then (console.log)

// 문제가 발생하는 곳 바로 뒤에다가
// .catch를 사용함으로써 문제를 해결할 수 있다.
}

// 5. 지난시간에 만난 callback hell을 고치자