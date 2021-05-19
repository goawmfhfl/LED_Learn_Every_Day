/*
// async & await
// clear style of using promise :>
async & await = syntactic sugar

프로미스를 간결하고 간편하고 동기적으로 실행되는것처럼 보이게 만들어주는 방법으로
기존에 존재하는 프로미스위에 간편한 api를 제공하는 것이다.
비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고
개발자가 읽기 좋은 코드를 작성할 수 있게 도와준다.

사용법으로는
먼저 함수의 앞에 async라는 예약어를 붙인다
함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 await을 붙인다
일반적으로 await의 대상이 되는 비동기 처리 코드는 Axios 등 프로미스를 반환하는 API 호출 함수이다


*/

// 비교를 위한 기존의 Promise문의 비동기적 처리 
{
    const promise = new Promise((resolve,reject) => {
        console.log('통신중......');
        setTimeout(()=>{
    resolve('Herman')
        },2000)
    })
    
    promise.then((value) => {
        console.log(value); // 'Herman'
    })

}

// 1-1. async 이해하기
// 함수앞에 async라는 함수를 붙여주면 된다.
// promise를 쓰지않아도 함수안에 있는 코드 블럭이 promise 로 변환되어 콜백된다.

{
    async function fetchUser(){
        // do network request in 10 secs...
        return 'herman';
    }
    const user = fetchUser();
    user.then(user => console.log(user)); // herman
    console.log(user); // Promise {<fulfilled>: "herman"}
}

// 1 - 2  async & await 구문 활용
{
    function fetchItems() {
        return new Promise(function(resolve, reject) {
        let items = [1,2,3];
        resolve(items)
        });
    }
        
    async function loadItem(){
        let fetchItemResult = await fetchItems()
        console.log(fetchItemResult);
    }


// 여기서 주의해야 할 점은 비동기 처리 메서드는
// 프로미스 객체를 반환해야 await가 의도한 대로 동작합니다.

// 즉, 예문에서는 프로미스 객체 resolve(item)을 반환하였기에
// await fetchItem()이 의도한대로 작동함

// 일반적으로 await의 대상이 되는 비동기 처리 코드는
// Axios 등프로미스를 반환하는 API 호출 함수입니다.

}

// case 1 - 3 예문 
{
    function fetchUser() {
        let url = 'https://jsonplaceholder.typicode.com/users/1'
        return fetch(url).then(function(response) {
        return response.json();
        });
    }
    function fetchTodo() {
        let url = 'https://jsonplaceholder.typicode.com/todos/1';
        return fetch(url).then(function(response) {
        return response.json();
        });
    }
    async function logTodoTitle() {
        let user = await fetchUser();
        if (user.id === 1) {
        let todo = await fetchTodo();
          console.log(todo.title); // delectus aut autem
        }
    }
    logTodoTitle();

}

// 만약 async 와 await을 활용하지 않았다면?

{
fetchUser()
    .then(user => {
        return new Promise((resolve,reject) => {
            if(user.id === 1){
                resolve(fetchTodo())
            }
        })
    })
    .then(todo => console.log(todo.title));
}

// case 3에서 에러가 발생한다면?
// 예외처리
// try catch 
{

    async function logTodoTitle() {
        try {
        var user = await fetchUser();
        if (user.id === 1) {
            var todo = await fetchTodo();
            console.log(todo.title); // delectus aut autem
        }
        } catch (error) {
        console.log(error);
        }
    }

}

/* pending */ 
// promise 글에다가 추가하도록하자.

{
    function fetchUser(){
        return new Promise((resolve,reject) =>{
        // do network request in 10 secs...
        resolve('herman'); // Promise {<fulfilled>: "herman"}
        //reject(new Error('Error')); // async.await.js:123 Uncaught (in promise) Error: Error
        })
    }
    const user = fetchUser();
    user.then(user => console.log(user)); // herman
    console.log(user); // Promise {<fulfilled>: "herman"}

    // resolve,reject를 실행블럭에서 찾을수 없으면 Promise {<pending>} 상태를 반환함
    // resolve,reject를 활용해서 완료해줘야함
}



// 3. useFul Promise APIs

/* 과일 구하기 */

// case 1 
{    
    function delay(ms){
            return new Promise(resolve => {setTimeout(resolve,ms)})
    }
       
        async function getApple(){
            await delay(1000);
            return '🍎';
        }
        async function getBanana(){
            await delay(1000);
            return '🍌';
        }
        async function pickFruits(){
            const apple = await getApple();
            const banana = await getBanana();
            return `pickFruits : ${apple} + ${banana}`
        }
        
        pickFruits().then(console.log);
        }
// 결과를 보면 2초뒤에 pickFruits : 🍎 + 🍌 값이 출력되는 것을 알 수 있다.
// 하지만 둘 사이에는 큰 연관성이 없다.
// 바나나가 먼저 나와도 상관없고 사과가 먼저 나와도 상관지만 delay가 더해져 출력되는
// 시간이 지연되었다.
// 이럴 경우에는 동시에 출력하는게 좀 더 효율적이다.


// case 1 - 1 병렬적으로 나오게 하는 방법
{
    function delay(ms){
        return new Promise(resolve => setTimeout(resolve,ms));
    }
    
    async function getLemon(){
        await delay(1000);
        return '🍋';
    }
    
    async function getPeach(){
        await delay(1000);
        return '🍑';
    }

    async function pickFruits(){
        const lemonPromise = getLemon();
        const peachPromise = getPeach();
        const lemon = await lemonPromise;
        const peach = await peachPromise;
        return `${lemon} + ${peach}` // delay = 1000ms 출력 = 🍋 + 🍑
    }
    
    pickFruits().then(console.log);

}

// 동시다발적으로 수행하게 하였고 원하는 결과를 얻었다
// 하지만 불필요한 상수가 만들어졌으며 코드의 가독성이 떨어지게 되었다.


// useFul Promise APIs
// 3-1 promise.all 


// case 2
{

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(1000);
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}


function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log); // 🍎 + 🍌

}

// promise.all 함수는 프로미스 배열을 전달하게 되면
// 모든 프로미스들이 병렬적으로 다 받을 때까지 모와준다
// 배열 형태로 [getApple(),getBanana()] 받아지면
// string으로 바꾸고 문자열 삽입을 위해서 join 매서드를 사용하여
// 🍎 + 🍌 라는 출력값을 알 수 있다.

// useFul Promise APIs
// 3-2 promise.race

//Promise.race() 메소드는 Promise 객체를 반환한다
// 이 프로미스 객체는 iterable 안에 있는 프로미스 중에
// 가장 먼저 완료된 것의 결과값으로 그대로 이행하거나 거부한다
// 전달받은 배열에 전달된 promise 중에 가장 먼저 값을 return하는 요소만 전달됨
{
    function delay(ms){
        return new Promise(resolve => setTimeout(resolve,ms));
    }
    async function getApple(){
        await delay(1000);
        return '🍎';
    }
    async function getBanana(){
        await delay(2000);
        return '🍌';
    }
    function pickOnlyOne(){
        return Promise.race([getApple(),getBanana()]);
    }

    pickOnlyOne().then(console.log); // 🍎
}