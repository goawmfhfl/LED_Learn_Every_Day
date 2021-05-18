/*

프로미스를 간결하고 간편하고 동기적으로 실행되는것처럼
보이게 만들어주는 방법

기존에 존재하는 프로미스위에 간편한 api를 제공하는 것
syntactic sugar (class)

// async & await
// clear style of using promise :>
프로미스를 유지해서 써야하는 경우가 있고
async & await 로 변환해줘야 하는 경우가 있다.

*/

// 1. async

function fetchUser(){
    // do network request in 10 secs...
    // 사용자의 데이터를 백엔드를 받아오는 함수
    // 10초정도 걸린다고 가정해보자.
    // 10초가 지면 사용자의 이름을 호출한다
    return 'herman';
}
const user = fetchUser();
console.log(user);

// 자바스크립트는 동기적(런타임)으로 코드를 수행한다
// fetchuser 호출이되었으니 함수 선언된 곳으로 감
// 실행블럭을 실행한다 10초가 걸리니 10초동안 머무르고 난 후에
// 넷트워크 데이터를 받고나서 herman이 할당되고 그다음에 user에 할당되고
// 그다음에 console.log(user);로 출력이 된다

//만약 웹페이지에 ui를 수행하는 코드가 있다면
// 사용자는 10초동안 텅텅 빈 웹페이지를 보게될것임
// 이럴때는 비동기적으로 처리하는게 필요함.

{
    function fetchUser(){
        return new Promise((resolve,reject) =>{
        // do network request in 10 secs...
        // resolve,reject를 실행블럭에서 찾을수 없으면 Promise {<pending>} 상태를 반환함
        // resolve,reject를 활용해서 완료해줘야함
        resolve('herman'); // Promise {<fulfilled>: "ellie"}
        })
    }
    const user = fetchUser();
    user.then(console.log); // herman
    console.log(user);
}

// async case

// 함수앞에 async라는 함수를 붙여주면 된다.
// promise 를 쓰지않아도 함수안에 있는 코드 블럭이
// promise 로 변환됨

{
    async function fetchUser(){
        // do network request in 10 secs...
        return 'herman';
    }
    const user = fetchUser();
    user.then(console.log); // herman
    console.log(user);

}

// 2. await
// await 함수는 async가 붙어있는 함수 안에서만 사용할 수 있다.
{
    
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
// delay promise를 리턴한다


async function getApple(){
    await delay(1000);
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍌';

    // function getBanana(){
    //     return delay(1000)
    //     .then(()=> '🍌')
    // }
}

// 1초를 정해줬기 때문에 1초가 지나면
// resolve를 호출한다.
// 사과를 리턴하는 promise가 만들어질것임
// 왜냐하면 async로 인해서 promise문이 만들어졌기 때문임

//콜백지옥 개선전

// {
//     function pickFruits(){
//         return getApple().then(apple => {
//             return getBanana().then(banana =>`${apple} + ${banana}`);
//         });
//     }
    
//     pickFruits().then(console.log);
// }

//콜백지옥 개선후
async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`
}

pickFruits().then(console.log);
}

// 매우 간단해짐.


// 에러가 발생한다면?

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

    async function pickFruits(){
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`
    }
    
    pickFruits().then(console.log);
    
}

// try catch문을 알려주긴 하셨지만
// 그에 따른 자세한 설명은 해주지 않으셨음
// 어떻게 동작되는지 try catch문이 뭔지.

// await 병렬 처리
// 순차적으로 진행하게 될 경우
// 비효율적이다
// 바나나 애플을 불러오는데 서로 연관이 되어있지 않기 때문에
// 기다릴 필요가 전혀 없다


// 개선방법 1.
// 병렬적으로 나오게 하는 방법.
// 동시다발적으로 수행
// 하지만 뭔가 지저분하다.
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
        return `${lemon} + ${peach}`
    }
    
    pickFruits().then(console.log);

}

// 3. useFul Promise APIs
// 3-1 promise.all 
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
pickAllFruits().then(console.log); // 🍎+🍌

}

// promise.all 함수는
// 프로미스 배열을 전달하게 되면 모든 프로미스들이 병렬적으로 다 받을때까지 모와준다
// 배열 형태로 [getApple(),getBanana()] 받아지면
// 배열로 나타난다
// 배열을 string으로 바꾸기 위해서 join('')을 썻다

// 3. useFul Promise APIs
// 3-1 promise.race
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

// 숙제 HomeWork
