{
    const arr = [1,2,3]
    // arr[0]부터 arr[1]이전(arr[1] 미포함)까지 복사하여 반환한다
    console.log(arr.slice(0,1)); // ->[1]

    // arr[1]부터 arr[2]이전(arr[2] 미포함)까지 복사하여 반환한다
    console.log(arr.slice(1,2)); // ->[2]

    // 원본은 변경되지 않는다.
    console.log(arr); // [1,2,3]
}
console.log('----------');
{
    const arr = [1,2,3]
    console.log(arr.slice(1)); // [ 2, 3 ]
}
console.log('----------');
{
    const arr = [1,2,3]
    console.log(arr.slice(-1)); // [ 3 ]
    console.log(arr.slice(-2)); // [ 2, 3 ]
}
console.log('----------');
{
    const arr = [1,2,3];
    const copy = arr.slice();
    console.log(copy); // [ 1, 2, 3 ]
    console.log(copy === arr); // false
}
console.log('----------');
{
    const arr = [1,2,3,4]
    console.log(arr.join()); // 1,2,3,4
    console.log(arr.join('')); // 1234
    console.log(arr.join(':')); // 1:2:3:4
}
console.log('----------');
{
    const arr = [1,2,3,4];
    const result = arr.reverse()
    console.log(arr); // [ 4, 3, 2, 1 ]
    console.log(result); // [ 4, 3, 2, 1 ]
}
console.log('----------');
{
    const arr = [1,2,3,]
    arr.fill(0);
    console.log(arr); //[ 0, 0, 0 ]
}
{
    const arr = [1,2,3]
    // 인수로 전달받은 값 0을 배열의 인덱스 1부터 끝까지 요소로 채운다
    arr.fill(0,1);
    // fill 메서드는 원본 배열을 직접 변경한다.
    console.log(arr);
}
console.log('----------');
{
    const arr = [1,2,3,4,5]
// 인수로 전달받은 값 0을 배열의 인덱스 1부터 3이전(인덱스 3 미포함)까지 요소로 채운다.
    arr.fill(0,1,3);
// fill 메서드는 원본 배열을 직접 변경한다.
    console.log(arr); // [ 1, 0, 0, 4, 5 ]
}
console.log('----------');
{
    const arr = new Array(3)
    console.log(arr); // [ <3 empty items> ]
    const result = arr.fill(1)
    console.log(result); // [ 1, 1, 1 ]
    console.log(arr); // [ 1, 1, 1 ]
}
console.log('----------');
{
    // 인수로 전달받은 정수만큼 요소를 생성하고 0부터 1씩 증가하면서 요소를 채운다
    const sequences = (length = 0) => Array.from({length},(_,i)=>i);
    console.log(sequences(3)); // [ 0, 1, 2 ]
}
console.log('----------');
{
    const arr = [1,2,3,]
    console.log(arr.includes(2)); // true
    console.log(arr.includes(100)); // false
}
console.log('----------');
{
    const fruits = ["Banana","Orange","Apple"]
    // 오름차순으로 정렬
    fruits.sort();
    // sort 메서드는 원본 배열을 직접 변경한다.
    console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]
}
console.log('----------');
{
    const points = [40,100,1,5,2,25,10];
    points.sort();
    console.log(points);//[1, 10, 100, 2, 25, 40, 5]
}
console.log('----------');
{
    const points = [40,100,1,5,2,25,10];
    points.sort((a,b)=>a-b);
    console.log(points); // [1,2,5,10,25,40,100]
    console.log(points[0],points[points.length - 1]); // 1 100

    // 숫자 배열의 내림차순 정렬. 비교 함수의 반환값이 0보다 작으면 b를 우선하여 정렬한다.
    points.sort((a,b)=>b-a);
    console.log(points); // [100,40,25,10,5,2,1]
    console.log(points[0],points[points.length - 1]); // 100 1
}
{
    const numbers = [1,2,3]
    const pows = [];
    numbers.forEach(item => pows.push(item**2));
    console.log(pows); // [ 1, 4, 9 ]
}
{
    [1,2,3].forEach((item,index,arr)=>{
        console.log(`요소값: ${item}, 인덱스: ${index}, this ${JSON.stringify(arr)}`);
    })
    // 요소값: 1, 인덱스: 0, this [1,2,3]
    // 요소값: 2, 인덱스: 1, this [1,2,3]
    // 요소값: 3, 인덱스: 2, this [1,2,3]
}
{
    const numbers = [1,2,3];
    //forEach 메서드는 원본 배열을 변경하지 않지만 콜백 함수를 통해 원본 배열을 변경할 수는 있다.
    // 콜백 함수의 세 번째 매개변수 arr은 원본 배열 numbers를 가리킨다
    // 따라서 콜백 함수의 세 번째 매개변수 arr을 직접 변경하면 원본 배열 numbers가 변경된다.
    numbers.forEach((item,index,arr)=> {arr[index] = item ** 2;})
    console.log(numbers); // [ 1, 4, 9 ]
}
// {
//     class Numbers {
//         numberArray = [];
//         multiply(arr){
//             arr.forEach(function(item){
//                 //TypeError: Cannot read property 'numberArray' of undefined
//                 this.numberArray.push(item*item);
//             },)
//         }
//     }
//     const numbers = new Numbers();
//     numbers.multiply([1,2,3])
// }

console.log('----------');
{
    class Numbers {
        numberArray = [];

        multiply(arr){
            arr.forEach(function(item){
                this.numberArray.push(item*item);
            },this)
        }
    }

    const numbers = new Numbers();
    numbers.multiply([1,2,3]);
    console.log(numbers.numberArray); // [ 1, 4, 9 ]
    
}
{
    class Numbers {
        numberArray = [];

        multiply(arr){
            arr.forEach(item => this.numberArray.push(item*item))
        }
    }

    const numbers = new Numbers();
    numbers.multiply([1,2,3]);
    console.log(numbers.numberArray); // [ 1, 4, 9 ]
}
