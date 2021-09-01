{
    const arr = [1,2,3]
    arr.length = 3;
    console.log(arr); // [ 1, 2, 3 ]
}

{
    const arr = [1,,3]
    console.log(arr.length);
}

{
    const arr = new Array(10)

    console.log(arr); // [ <10 empty items> ]
    console.log(arr.length); // 10
}
{
    Array.of(1) // -> [1]
    Array.of(1,2,3) // -> [1,2,3,]
    Array.of('stirng') // -> ['stirng']
}

{
    // 유사 배열 객체를 변환하여 배열을 생성한다.
    console.log(Array.from({length : 2, 0:'a', 1:'b'})); // [ 'a', 'b' ]

    // 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
    console.log(Array.from('Hello') );  // [ 'H', 'e', 'l', 'l', 'o' ]
}
{
    // Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined 요소로 채운다
    console.log(Array.from({length:3})); // [ undefined, undefined, undefined ]
    // Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다
    console.log(Array.from({length:3},(_,i) => i)); // [ 0, 1, 2 ]
}

{
    // 유사 배열 객체
    const arrayLike = {
        '0' : 'apple',
        '1' : 'banana',
        '2' : 'orange',
        length : 3
    }
    for(let i=0; i<arrayLike.length; i++){
        console.log(arrayLike[i]); // apple banana orange
        
    }
}

{
    const arr = [1,2]
// 인덱스가 0인 요소를 참조
    console.log(arr[0]);
// 인덱스가 1인 요소를 참조
    console.log(arr[1]);
// 인덱스가 2인 요소를 참조, 배열 arr에는 인덱스가 2인 요소가 존재하지 않습니다
    console.log(arr[2]);
}
{
    // 희소 배열
    const arr = [1, ,3]

    // 배열 arr에는 인덱스가 1인 요소가 존재하지 않습니다.
    console.log(Object.getOwnPropertyDescriptors(arr));

/*
'0': { value: 1, writable: true, enumerable: true, configurable: true },
'2': { value: 3, writable: true, enumerable: true, configurable: true },
length: { value: 3, writable: true, enumerable: false, configurable: false }
*/
console.log(arr[1]); // undefined
console.log(arr[3]); // undefined
}
{
    const arr = [0];

    //배열 요소의 추가
    arr[1] = 1
    console.log(arr); // [ 0, 1 ]
    console.log(arr.length); // 2

    arr[100] = 100;
    console.log(arr); // [ 0, 1, <98 empty items>, 100 ]
    console.log(arr.length); // 101

    console.log('100 :',arr[100]);

    console.log(Object.getOwnPropertyDescriptors(arr));
    /*
'0': { value: 0, writable: true, enumerable: true, configurable: true },
'1': { value: 1, writable: true, enumerable: true, configurable: true },
'100': { value: 100, writable: true, enumerable: true, configurable: true },
length: { value: 101, writable: true, enumerable: false, configurable: false }
  */
}
console.log('----------');
{
    const arr = [1,2,3]
    delete arr[1]
    console.log(arr); // [ 1, <1 empty item>, 3 ]

    // length 프로퍼티에 영향을 주지 않는다. 즉 희소 배열이 된다.
    console.log(arr.length); // 3

}
{
    const arr = [1,2,3]
    // Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
    // arr[1]부터 1개의 요소를 제거
    arr.splice(1,1)  // 3
    console.log(arr); // [1,3]

    // length 프로퍼티가 자동 갱신된다
    console.log(arr.length); // 2
}

console.log('----------');

{
    const arr = [1]
    // push 메서드는 원본 배열 (arr)을 직접 변경합니다
    arr.push(2)
    console.log(arr); // [1,2]

    //concat 메서드는 원본 배열(arr)을 직접 변경하지 않고 새로운 배열을 생성하여 반환한다.
    const result = arr.concat(3);
    console.log(arr); // [1,2]
    console.log(result); // [1,2,3,]
}

{
    console.log(Array.isArray([])); // true
    console.log(Array.isArray([1,2])); // true

    console.log(Array.isArray()); // false
    console.log(Array.isArray(1,2)); // false
}
{
    const arr = [1,2,2,3]
    // 배열 arr에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환합니다.
    console.log(arr.indexOf(2));  // 1
    // 배열 arr에 요소 4가 없으므로 -1을 반환한다
    console.log(arr.indexOf(4));  // -1
    // 두 번째 인수는 검색을 시작할 인덱스가. 두 번째 인수를 생략하면 처음부터 검색한다
    console.log(arr.indexOf(2,2)); // 2
}

{
    const foods = ['apple','banana']
    //foods 배열에 'orange'요소가 존재하는지 확인한다.
    if(foods.indexOf('orange') === -1){
        //foods 배열에 'orange' 요소가 존재하지 않으면 'oragne' 요소를 추가한다
        foods.push('orange')
    }
    console.log(foods);
}
{
    const foods = ['apple','banana']
    //foods 배열에 'orange'요소가 존재하는지 확인한다.
    if(!foods.includes('orange')){
        //foods 배열에 'orange' 요소가 존재하지 않으면 'oragne' 요소를 추가한다
        foods.push('orange')
    }
    console.log(foods); // [ 'apple', 'banana', 'orange' ]
}

console.log('----------');

{
    const arr = [1,2]
    let result = arr.push(3,4)
    // 인수로 전달받은 모든 값을 원본 배열 arr의 마지막 요소로 추가하고 변경된 length 값을 반환한다
    console.log(result); // 4
    console.log(arr); // [1,2,3,4]
}

{
    const arr = [1,2]
    arr[arr.length] = 3;
    console.log(arr); // [ 1, 2, 3 ]
}
{
    const arr = [1,2]
    const newArr = [...arr,3]
    console.log(newArr); // [ 1, 2, 3 ]
}
console.log('----------');
{
    const arr = [1,2]
    let reuslt = arr.pop()
    console.log(arr); // [1]

    // 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환합니다.
    console.log(reuslt); // 1
}
console.log('----------');
{
    const arr = [1,2]
    let result = arr.unshift(3,4)
    console.log(result); // 4

    // unshift 메서드는 원본 배열을 직접 변경한다
    console.log(arr); // [ 3, 4, 1, 2 ]
}
console.log('----------');
{
    const arr = [1,2]
    const newArr = [3,...arr]
    console.log(newArr); // [ 3, 1, 2 ]
}
console.log('----------');
{
    const arr = [1,2]

    // 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다
    let result = arr.shift()
    console.log(result); // 1
    // shift 메서드는 원본 배열을 직접 변경한다
    console.log(arr); // [2]
}
console.log('----------');
{
    const arr1 = [1,2];
    const arr2 = [3,4];

    // 배열 arr2를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
    // 인수로 전달한 값이 배열인 경우 배열을 헤체하여 새로운 배열의 요소로 추가한다.

    let result = arr1.concat(arr2);
    console.log(result); // [1,2,3,4]

    // 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다
    result = arr1.concat(3)
    console.log(result); // [1,2,3]

    // 배열 arr2와 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다
    result = arr1.concat(arr2, 5);
    console.log(result); // [1,2,3,4,5]

    // 원본 배열은 변경되지 않는다
    console.log(arr1); // [ 1, 2 ]

}
console.log('----------');
{
    const arr1 = [3,4]

    // unshift 메서드는 원본 배열을 직접 변경합니다
    // 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없습니다.
    arr1.unshift(1,2)
    // unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있다.
    console.log(arr1); // [1,2,3,4]

    // push 메서드는 원본 배열을 직접 변경한다
    // 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
    arr1.push(5,6)
    // push 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있다.
    console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

    // unshift와 push메서드는 concat 메서드로 대체할 수 있다.
    const arr2 = [3,4]
    // arr1.unshift(1,2)를 다음과 같이 대체할 수 있다
    let result = [1,2].concat(arr2)
    console.log(result); // [ 1, 2, 3, 4 ]

    // arr1.push(5,6)를 다음과 같이 대체할 수 있습니다.
    result = result.concat(5,6)
    console.log(result); // [ 1, 2, 3, 4, 5, 6 ]

}
console.log('----------');
{
    const arr = [3,4]
    // unshift와 push 메서드는 인수로 전달받은 배열을 그대로 원본 배열의 요소로 추가한다
    arr.unshift([1,2])
    arr.push([5,6])
    console.log(arr); // [[1,2],3,4,[5,6]]

    // concat 메서드는 인수로 전달받은 배열을 헤체하여 새로운 배열의 요소로 추가한다
    let result = [1,2].concat([3,4])
    console.log(result); // [ 1, 2, 3, 4 ]
    result = result.concat([5,6])
    console.log(result); // [ 1, 2, 3, 4, 5, 6 ]
}
{
    let result = [1,2].concat([3,4])
    console.log(result); // [ 1, 2, 3, 4 ]

    // concat 메서드는 ES6의 스프레드 문법으로 대체할 수 있다
    result = [...[1,2],...[3,4]];
    console.log(result); // [ 1, 2, 3, 4 ]
}