

// 🌟🌟🌟 Ternary Operator 삼항 연산자 🌟🌟🌟

// case 1 => if...else...
{
// ❌ Bad Code 
    function getResult(score){
        let result;
        if(score > 5){
            result = '👍🏻';
        } else if (score <= 5){
            result = '👎🏻';
        }
    
        return result
    }
    
    console.log(getResult(6));
}

// case 2 => Ternary Operator
{
    // ✅ Good Code
    function getResult(score){
        return score >= 5 ? '👍🏻' : '👎🏻'
    }

    console.log(getResult(6));
}


// 🌟🌟🌟 Nullish Coalescing Operator 🌟🌟🌟

// Case 1 => ❌ Bad Code 
{
    function printMessager(text){
        let message = text;
        if(text === null || text === undefined){
            message = 'Nothing to display 😂'
        }
        console.log(message);
        return message
    }
    console.log(printMessager("Hello"));
}

// 🚨 Case 2 -> 매개변수에 Defalut 값 할당
{
    function printMessager(text = 'Nothing to display 😂' ){
        console.log(text);
    }
    printMessager("Hello"); // Hello
    printMessager(undefined) // Nothing to display 😂
    printMessager(null) // null

    /*
    undfined 인 경우에만 디폴트 값이 할당된다
    */
}


// 🚨 Case 3 -> Nullish Coalescing Operator ??
{
    function printMessager(text){
        const message = text ?? 'Nothing to display 😂'
        console.log(message);
    }
    printMessager("Hello"); // Hello
    printMessager(undefined) // Nothing to display 😂
    printMessager(null) // Nothing to display 😂
}


// 🚨 Case 4 -> Logical OR operator ||
{
    function printMessager(text){
        const message = text || 'Nothing to display 😂'
        console.log(message);
    }
    printMessager("Hello"); // Hello
    printMessager(undefined) // Nothing to display 😂
    printMessager(null) // Nothing to display 😂
    printMessager(0) // or -0 => Nothing to display 😂
    printMessager('') // or "",`` => Nothing to display 😂
    printMessager(NaN) // Nothing to display 😂
}

/*

알고 넘어가기

✅ Nullish Coalescing Operator ??

leftExpr ?? rightExpr

leftExpr(왼쪽코드) 가 null , undefined 인 경우 rightExpr(오른쪽코드) 실행 

✅ Logical OR operator ||

leftExpr || rightExpr

leftExpr(왼쪽코드) 가 flasy인 경우 rightExpr(오른쪽코드) 실행 

💡 what is falsy?

- Boolean : false
- Number : 0 , -0
- undefined
- null
- NaN
- "" , '' , `` (빈 문자열)

*/

// 🚨 Case 5 -> Nullish Coalescing Operator ??
{

    const result = getInitialState() ?? fetchFromServer();
    console.log(result); // "Hello World"
    
    function getInitialState(){
        return null;
    }

    function fetchFromServer(){
        return "Hello World"
    }
}

// 🌟🌟🌟 Object Destructuring 🌟🌟🌟

// case 1 => Bad Code
{
    const person = {
        name: 'Julia',
        age: 20,
        phone: '01077777777'
    }

    function displayPerson(person){
        displayAvatar(person.name)
        displayName(person.name)
        displayProfile(person.name, person.age)
    }
}

// case 2 => Bad Code
{
    const person = {
        name: 'Julia',
        age: 20,
        phone: '01077777777'
    }
    
    function displayPerson(person){
        const name = person.name;
        const age = person.age;
        displayAvatar(name)
        displayName(name)
        displayProfile(name,age)
    }
}

// case 3 =>  Object Destructuring
{
    const person = {
        name: 'Julia',
        age: 20,
        phone: '01077777777'
    }
    
    function displayPerson(person){
        const {name, age} = person
        displayAvatar(name)
        displayName(name)
        displayProfile(name,age)
    }
}


// 🌟🌟🌟 Spread Syntax - Object 🌟🌟🌟

// case1 => BadCase
{
    const item = {type: '👔', size: 'M'};
    const detail = {price: 20, made: 'Korea', gender: 'M'};

    // ❌ Bad Code
    item['price'] = detail.price;

    const newObject = new Object();
    newObject['type'] = item.type;
    newObject['size'] = item.size;
    newObject['priece'] = detail.price;
    newObject['made'] = detail.made;
    newObject['gender'] = detail.gender;
    console.log(newObject);
    // {type: "👔", size: "M", priece: 20, made: "Korea", gender: "M"}
}

// case2 => BadCase
{
    const item = {type: '👔', size: 'M'};
    const detail = {price: 20, made: 'Korea', gender: 'M'};

    // ❌ Bad Code
    const newObject = {
        type: item.type,
        size: item.size,
        price: detail.price,
        made: detail.made,
        gender: detail.gender
    }
    console.log(newObject);
    // {type: "👔", size: "M", priece: 20, made: "Korea", gender: "M"}
}

// case3 => Object.assign

{
    const item = {type: '👔', size: 'M'};
    const detail = {price: 20, made: 'Korea', gender: 'M'};

    const shirt0 = Object.assign(item, detail);
    console.log(shirt0);
    // {type: "👔", size: "M", priece: 20, made: "Korea", gender: "M"}
}

// case4 => Spread Syntax
{
    const item = {type: '👔', size: 'M'};
    const detail = {price: 20, made: 'Korea', gender: 'M'};

    const shirt0 = {...item, ...detail};
    console.log(shirt0);
    //{type: "👔", size: "M", price: 20, made: "Korea", gender: "M"}

    const shirt1 = {...item, ...detail, price:40 , size:'L', type:"👕"};
    console.log(shirt1);
    // {type: "👕", size: "L", price: 40, made: "Korea", gender: "M"}

    // 인수 뒤에 새로운 상태데이터를 업데이트 함으로써 새로운 Object를 만들 수 있다.
}

// case5 => Spread Syntax - Array
{
    let fruits = ['🍎', '🍊', '🍉'];

    fruits.push('🍓')
    console.log(fruits); // (4) ["🍎", "🍊", "🍉", "🍓"]

    //fruits.push('🍇')
    fruits = [...fruits, '🍇']
    console.log(fruits); //  ["🍎", "🍊", "🍉", "🍓", "🍇"]

    //fruits.unshift('🍒')
    fruits = ['🍒', ...fruits]
    console.log(fruits); // ["🍒", "🍎", "🍊", "🍉", "🍓", "🍇"]

    let People = ['👨🏻‍🦱', '👧🏻', '🧔🏻‍♂️', '👩🏻']
}


// case6 => Spread Syntax 배열 합치기
{
    let fruits = ['🍎', '🍊', '🍉', '🍇'];
    let People = ['👨🏻‍🦱', '👧🏻', '🧔🏻‍♂️', '👩🏻']

    // concat Case
    let combined = fruits.concat(People)
    console.log(combined);
    // (8) ["🍎", "🍊", "🍉", "🍇", "👨🏻‍🦱", "👧🏻", "🧔🏻‍♂️", "👩🏻"]

    // spread Case
    combined = [...fruits, ...People];
    console.log(combined);
    // (8) ["🍎", "🍊", "🍉", "🍇", "👨🏻‍🦱", "👧🏻", "🧔🏻‍♂️", "👩🏻"]
}



// 🌟🌟🌟 Optional Chaining 🌟🌟🌟

// case 1
{
    const bob = {
        name:'julia',
        age: 20,
    };
    
    const anna = {
        name:'julia',
        age:20,
        job:{
            title:'software Engineer',
        },
    };


    function displayJobTitle(person){
        if(person.job && person.job.title){
            console.log(person.job.title)
        }
        else{
            return console.log('No Job Yet 😀');
        }
    }
    displayJobTitle(anna) // software Engineer
    displayJobTitle(bob) // No Job Yet 😀
}

// case 2 -> Optional Chaining
{
    const bob = {
        name:'julia',
        age: 20,
    };
    
    const anna = {
        name:'julia',
        age:20,
        job:{
            title:'software Engineer',
        },
    };
    function displayJobTitle(person){
        if(person.job?.title){
            console.log(person.job.title)
        }
        else{
            return console.log('No Job Yet 😀');
        }
    }
    displayJobTitle(anna) // software Engineer
    displayJobTitle(bob) // No Job Yet 😀
}

// case 3 -> Optional Chaining + Nullish Coalescing Operator ??
{
    const bob = {
        name:'julia',
        age: 20,
    };
    
    const anna = {
        name:'julia',
        age:20,
        job:{
            title:'software Engineer',
        },
    };

    function displayJobTitle(person){
        const title = person.job?.title ?? 'No Job Yet 😀';
        console.log(title);
    }
    displayJobTitle(anna) // software Engineer
    displayJobTitle(bob) // No Job Yet 😀
}

// 🌟🌟🌟 Template Literals (Template String) 🌟🌟🌟

// Case 1 => Bad Case
{
    const Person = {
        name: 'Julia',
        score: 4,
    };

    // ❌ Bad Case
    console.log(
        'Hello ' + Person.name + ', your currnt score is: ' + Person.score
    ); // Hello Julia, your currnt score is: 4
}

// Case 2 => good Case
{
    const Person = {
        name: 'Julia',
        score: 4,
    };
    console.log(`Hello ${Person.name}, your currnt score is: ${Person.score}`);
    // Hello Julia, your currnt score is: 4
}

// Case 3 => more good Case
{
    const Person = {
        name: 'Julia',
        score: 4,
    };
    const { name,score } = Person
    console.log(`Hello ${name}, your currnt score is: ${score}`);
    // Hello Julia, your currnt score is: 4
}

// Case 4 => more more good Case 유지 보수성 👍🏻
{
    const user1 = {
        name: 'jaeyoung',
        score: 10,
    };

    function greetings(person){
        const { name,score } = person
        return console.log(`Hello ${name}, your currnt score is: ${score}`);
        // Hello Julia, your currnt score is: 4
    }
    greetings(user1);
}



// 🌟🌟🌟 Loop 🌟🌟🌟
    //배열 안에서 짝수를 선택하자
    //선택한 짝수에 4를 곱하자
    //곱해진 값의 총합을 구하자 

//배열 안에서 짝수를 선택하자 case 1  Bad Case
{
    const items = [1,2,3,4,5,6];

    function getAllEvens(itmes){
        const result = [];
        for(let i=0; i<items.length; i++){
            if(items[i] % 2 === 0){
                result.push(items[i])
            }
        }
        return result
    }
    console.log(getAllEvens(items)); // [2, 4, 6]
}

//배열 안에서 짝수를 선택하자 case 1 good Case - filter()
{
    const items = [1,2,3,4,5,6];

    function getAllEvens(itmes){
        return itmes.filter(num=> num % 2 ===0)
    }
    console.log(getAllEvens(items)); // [2, 4, 6]
}

//선택한 짝수에 4를 곱하자 case 3 bad Case
{
    const items = [1,2,3,4,5,6];

    function multiplyByFour(items){
        const result = [];
        for(let i = 0; i<items.length; i++){
            result.push(items[i] * 4)
        }
        return result
    }
    console.log(multiplyByFour(items));
    //[4, 8, 12, 16, 20, 24]
}

//선택한 짝수에 4를 곱하자 case 4 good Case map()
{
    const items = [1,2,3,4,5,6];

    function multiplyByFour(items){
        return items.map((num)=> num*4)
    }
    console.log(multiplyByFour(items));
    //[4, 8, 12, 16, 20, 24]
}

// 값의 총합을 구하자 case 5 bad case
{
    const items = [1,2,3,4,5,6];

    function SumArray(items){
        let sum = 0;
        for(let i=0; i<items.length; i++){
            sum += items[i]
        }
        return sum;
    }
    console.log(SumArray(items)); // 21
}

// 값의 총합을 구하자 case 6 good case reduce()
{
    const items = [1,2,3,4,5,6];

    function SumArray(items){
        return items.reduce((a,b)=>a+b,0)
    }
    console.log(SumArray(items)); // 21
} 

    //배열 안에서 짝수를 선택하자
    //선택한 짝수에 4를 곱하자
    //곱해진 값의 총합을 구하자 

    // case 7 good code
    {
        const items = [1,2,3,4,5,6]

        const evens = items.filter((num)=> num % 2 === 0);
        const multiple = evens.map((num) => num * 4);
        const sum = multiple.reduce((a,b)=> a+b,0);

        console.log(sum); // 48
    }

     // case 8 more good code
    {
        const items = [1,2,3,4,5,6]

        const result = items
        .filter((num)=> num % 2 === 0)
        .map((num) => num * 4)
        .reduce((a,b)=> a+b,0)

        console.log(result); // 48
    }


    // 🌟🌟🌟 Async . Await 🌟🌟🌟

    // promise -> Async / await

    // case 1 -> Bad Code
{
    function displayUser(){
        fetchUser()
        .then((user)=>{
            fetchProfile(user)
            .then((profile) =>{
                updateUI(user, profile);
            })
        })
    }
}

// case 2 -> good Code
{
    async function displayUser(){
        const user = await fetchUser();
        const profile = await fetchProfile(user);
        updateUI(user, profile);
    }
}
console.clear();
// 🌟🌟🌟 Async . Await 🌟🌟🌟

{
    const array = ['🐶', '🐱', '🐈', '🐶', '🐕', '🐱',]
    console.log([...new Set(array)]);

    // Set 메서드가 먼저 실행되어 중복되는 요소들을 제거함
    // 전개 연산자로 인하여 요소들이 제거된 배열들이 만들어짐
    
}