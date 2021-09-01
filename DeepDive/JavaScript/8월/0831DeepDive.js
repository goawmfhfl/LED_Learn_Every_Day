{
    const numbers = [1,4,9]
    
    // map 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
    // 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.
    const roots = numbers.map(item => Math.sqrt(item))

    //위 코드는 다음과 같다
    // const roots = numbers.map(Math.sqrt);

    // map 메서드는 새로운 배열을 반환한다
    console.log(roots); // [ 1, 2, 3 ]
    // map 메서드는 원본 배열을 변경하지 않는다.
    console.log(numbers); // [ 1, 4, 9 ]
}
{
    // map메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
    [1,2,3].map((item,index,arr)=>{
        console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
        return item
    })
// 요소값: 1, 인덱스: 0, this: [1,2,3]
// 요소값: 2, 인덱스: 1, this: [1,2,3]
// 요소값: 3, 인덱스: 2, this: [1,2,3]
}
console.log('---------');
{
const numbers = [1,2,3,4,5];

// filter 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다
// 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환합니다.
// 다음의 경우 numbers 배열에서 홀수인 요소만 필터링한다(1은 true로 평가된다)

const odds = numbers.filter(item => item%2)
console.log(odds); // [ 1, 3, 5 ]
}
console.log('---------');

{
    class User{
        constructor(){
            this.users = [
                {id:1, name:'Lee'},
                {id:2, name:'kim'}
            ];
        }
        // 요소 추출
        findById(id){
            //id가 일치하는 사용자만 반환한다.
            return this.users.filter(user => user.id === id)
        }
        
        remove(id){
            // 요소 제거
            this.users = this.users.filter(user => user.id !== id)
        }
    }

    const users = new User()

    let user = users.findById(1);
    console.log(user); // [{id:1, name:'Lee'}]

    // id가 1인 사용자를 제거한다
    users.remove(1);

    user = users.findById(1)
    console.log(user);
}
{
    // 1부터 4까지 누적한다.
    const sum = [1,2,3,4].reduce((accumulator, currentValue, index, array)=> accumulator+currentValue,0)
    console.log(sum); // 10
}
{
    const value = [1,2,3,4,5,6];
    const average = value.reduce((acc,cur,i,{length})=>{
        // 마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균을 구해 반환한다.
        console.log(acc+cur);
        return i === length - 1 ? (acc+cur) / length : acc + cur
    }, 0);
    console.log('average',average); // average 3.5
}
console.log('최대값 구하기');
{
const value = [1,2,3,4,5];
const max = value.reduce((acc,cur) => (acc > cur ? acc : cur),0);
console.log(max); // 5
}
console.log('요소의 중복 횟수 구하기');
{
    const fruits = ['banana','apple','orange','orange','apple'];
    
    const count = fruits.reduce((acc,cur)=> {
        // 첫 번째 순회 시 acc는 초기값인 {}이고 cur은 첫 번째 요소인 'banana'다.
        // 초기값으로 전달받은 빈 객체에 요소값인 cur을 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로 할당한다.
        // 만약 프로퍼티 값이 undefined(처음 등장하는 요소)이면 프로퍼티 값을 1로 초기화한다.
        acc[cur]=(acc[cur]||0) + 1;
        return acc;
    },{})
    console.log(count);
}
console.log('중첩 배열 평탄화');
{
    const value = [1,[2,3],4,[5,6]];
    const flatten = value.reduce((acc,cur) => acc.concat(cur),[]);
    console.log(flatten); // [ 1, 2, 3, 4, 5, 6 ]
}
console.log('중첩 요소 제거');
{
    const value = [1,2,1,3,5,4,5,3,4,4]
    const result = value.reduce((acc,cur,i,arr)=>{
        // 순회 중인 요소의 인덱스가 자신의 인덱스라면 처음 순회하는 요소다.
        // 이 요소만 초기값으로 전달받은 배열에 담아 반환한다.
        // 순회 중인 요소의 인덱스가 자신의 인덱스가 아니라면 중복된 요소다.
        if(arr.indexOf(cur) === i ) acc.push(cur) 
        return acc;
    },[])
    console.log(result); // [ 1, 2, 3, 5, 4 ]
}
{
    const values = [1,2,1,3,5,4,5,3,4,4]
    const result = values.filter((v,i,arr)=>{
        return arr.indexOf(v) === i
    })
    console.log(result); [ 1, 2, 3, 5, 4 ]
}
{
    const values = [1,2,1,3,5,4,5,3,4,4]
    const result = [...new Set(values)];
    console.log(result); // [ 1, 2, 3, 5, 4 ]
}
{
    const products = [
        {id: 1, price: 100},
        {id: 2, price: 200},
        {id: 3, price: 300}
    ]
    const priceSum = products.reduce((acc,cur)=> acc.price + cur.price);
    console.log(priceSum); // NaN

    // 1번째 순회시 acc  => {id: 1, price: 100}  cur => {id: 2, price: 200}
    // 2번째 순회시 acc = 300 cur => {id: 3, price: 300}
    // 2번째 순회시에 300 + {id:3, price:300} = NaN
}
{
    const products = [
        {id: 1, price: 100},
        {id: 2, price: 200},
        {id: 3, price: 300}
    ]
    const priceSum = products.reduce((acc,cur)=> acc + cur.price , 0);
    console.log(priceSum); // NaN

    // 1번째 순회시 acc  => 0  cur => {id: 1, price: 100}
    // 2번째 순회시 acc = 100 cur => {id: 2, price: 200}
    // 3번째 순회시 acc = 300 cur => {id:3, price:300} = NaN
    // return acc(300) + cur.price(300) = 600
}