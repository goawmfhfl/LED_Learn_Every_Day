{

    const array = [1,2,3];

    // 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
    console.log(Symbol.iterator in array); // true

    // 이터러블인 배열은 for...of 문으로 순회 가능하다
    for(const item of array){
        console.log(item); // 1 2 3
    }

    // 이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있다.
    console.log([...array]); // [1,2,3]

    // 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
    const [a, ...rest] = array;
    console.log(a, rest); // 1 [ 2, 3 ]
}
{
    //배열은 이터러블 프로토콜을 준수한 이터러블이다.
    const array = [1,2,3]

    //Symbol.iterator 메서드는 이터레이터를 반환한다.
    const iterator = array[Symbol.iterator]()

    //Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.
    console.log('next' in iterator); // true
}
{
    //배열은 이터러블 프로토콜을 준수한 이터러블이다.
    const array = [1,2,3];

    //Symbol.iterator 메서드는 이터레이터를 반환한다. 이터레이터는 next 메서드를 갖는다.
    const iterator = array[Symbol.iterator]()

    // next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 잍터레이터 리절트 객체를 반환한다
    // 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 객체다
    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: 3, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }
}

{
    for(const item of [1,2,3]){
        // item 변수에 순차적으로 1,2,3 이 할당된다.
        console.log(item);
    }
}
{
    // 이터러블
    const iterable = [1,2,3]

    // 이터러블의 Symbol.iterator 메서드를 호출하여 이터레이터를 생성한다.
    const iterator = iterable[Symbol.iterator]();

    for(;;){
        //  이터레이터의 next 메서드를 호출하여 이터러블을 순회한다.
        //  이때 next 메서드는 이터레이터 리절트 객체를 반환한다.

        const res = iterator.next()

        // next 메서드가 반환한 이터레이터 리절트 객체의 done 프로퍼티 값이 true이면 이터러블의 순회를 중단한다.
        if(res.done) break;

        // 이터레이터 리절트 객체의 value 프로퍼티 값을 item 변수에 할당한다
        const item = res.value;
        console.log(item);
    }
}
console.log('----------');
{
    const arrayLike = {
        0:1,
        1:2,
        2:3,
        length : 3
    };
    
    // 유사 배열 객체는 length 프로퍼티를 갖기 떄문에 for 문으로 순회할 수  있다.
    for(let i = 0; i<arrayLike.length; i++){
        //유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.
        console.log(arrayLike[i]);
    }

    // for(const item of arrayLike){
    //     console.log(item); // TypeError: arrayLike is not iterable
    // }
}
{
    const arrayLike = {
        0:1,
        1:2,
        2:3,
        length : 3
    };

    // Array.from은 유사 배열 객체 또는 이터러블을 배열로 반환한다
    const arr = Array.from(arrayLike)
    console.log(arr); // [ 1, 2, 3 ]
}
{
    const fibonacci = {
        // Symvol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수한다
        [Symbol.iterator](){
            let [pre,cur] = [0,1] // 배열 디스트럭처링 할당
            const max = 10; // 수열의 최대값

            // Symbol.iterator 메서드는 next메서드를 소유한 이터레이터를 반환해야 하고
            // next 메서드는 이터레이터 리절트 객체를 반환해야한다.
            return{
                next(){
                    [pre,cur] = [cur, pre+cur]; 
                    // 이터레이터 리절트 객체를 반환한다
                    return {value: cur, done: cur>=max};
                }
            }
        }
    }
    for(const num of fibonacci){
        console.log(num); // 1 2 3 5 8
    }
}
{
    const fibonacci = function(max){
        let [pre,cur] = [0,1] // 배열 디스트럭처링 할당
        return{
            [Symbol.iterator](){
                return{
                    next(){
                        [pre,cur] = [cur, pre+cur]; 
                        // 이터레이터 리절트 객체를 반환한다
                        return {value: cur, done: cur>=max};
                }
            }
        }
    }
}
            for(const num of fibonacci(10)){
                console.log(num); // 1 2 3 5 8
            }
}
{
    const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function'
    console.log(isIterable([])); // // true
    console.log(isIterable('')); // // true
    console.log(isIterable(new Map())); // // true
    console.log(isIterable(new Set())); // true
    console.log(isIterable({})); // false
}
{
    const arr = [1,2,3]
    console.dir(arr);
}
{
    const arrayLike = {
        0:1,
        1:2,
        2:3,
        length : 3
    };

    // Array.from은 유사 배열 객체 또는 이터러블을 배열로 반환한다
    const arr = Array.from(arrayLike)
    console.log(arr); // [ 1, 2, 3 ]
    
    for(const num of arr){
        console.log('Array.from :',num);
    }
}