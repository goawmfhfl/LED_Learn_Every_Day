{
    const mySymbol = Symbol()
    console.log(typeof mySymbol); // symbol

    console.log(mySymbol); // Symbol()
}
{
    const mySymbol = Symbol('mySymbol')
    //심벌도 래퍼 객체를 생성한다.
    console.log(mySymbol.description); // mySymbol
    console.log(mySymbol.toString()); // Symbol(mySymbol)
}
{
    // 전역 심벌 레지스트리에 mySymbol 이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
    const s1 = Symbol.for('mySymbol')
    // 전역 심벌 레지스트리에 mySymbol 이라는 키로 저장된 심벌 값이 있으면 해당 심벌 값으로 반환
    const s2 = Symbol.for('mySymbol')
    console.log(s1===s2); // true
}

{
    // Symbol.keyFor 메서드를 사용하면 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출할 수 있다

    // 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
    const s1 = Symbol.for('mySymbol')
    // 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
    console.log(Symbol.keyFor(s1));// mySymbol

    // Symbol 함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않는다.
    const s2 = Symbol('foo')
    // 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
    console.log(Symbol.keyFor(s2));  // undefined
}
{
    const Direction = {
        UP : 1,
        DOWN : 2,
        LEFT : 3,
        RIGHT : 4
    };

    //변수에 상수를 할당
    const myDirection = Direction.UP;

    if(myDirection === Direction.Up){
        console.log('You are going UP.')
    }
}
{
    const Direction = {
        UP : Symbol('up'),
        DOWN : Symbol('down'),
        LEFT : Symbol('left'),
        RIGHT : Symbol('right')
    };

    //변수에 상수를 할당
    const myDirection = Direction.UP;

    if(myDirection === Direction.Up){
        console.log('You are going UP.')
    }

}
{
    const obj = {
        //심벌 값으로 프로퍼티 키를 생성
        [Symbol.for('mySymbol')] : 1
    }
    console.log(obj[Symbol.for('mySymbol')]); // 1
}
{
    const obj = {
        //심벌 값으로 프로퍼티 키를 생성
        [Symbol.for('mySymbol')] : 1
    }
    for (const key in obj){
        console.log(key);
    }
    console.log(Object.keys(obj)); // []
    console.log(Object.getOwnPropertyNames(obj)); // []
}
{
    const obj = {
        //심벌 값으로 프로퍼티 키를 생성
        [Symbol.for('mySymbol')] : 1
    }
    for (const key in obj){
        console.log(key);
    }
    console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(mySymbol) ]

    const symbolkey1 = Object.getOwnPropertySymbols(obj)[0]
    console.log(obj[symbolkey1]); // 1
}
{
    // 표준 빌트인 객체를 확장하는 것은 권장하지 않는다.
    Array.prototype.sum = function(){
        return this.reduce((acc,cur)=>acc+cur, 0)
    };
    [1,2].sum()
}
{
    // 심벌 값으로 프로퍼티 키를 동적 생성하면 다른 프로퍼티 키와 절대 충돌하지 않아 안전하다
    Array.prototype[Symbol.for('sum')] = function(){
        return this.reduce((acc,cur)=>acc+cur, 0)
    };
    [1,2].sum()
}
{
    const iterable = {
        // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수
        [Symbol.iterator](){
            let cur = 1;
            const max = 5;
            // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환
            return{
                next(){
                    return{value: cur++, done:cur > max+1};
                }
            }
        }
    }
    for (const num of iterable){
        console.log((num)); // 1 2 3 4 5
    }
}