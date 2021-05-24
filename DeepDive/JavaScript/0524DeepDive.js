console.log('5월 24일 공부 기록입니다')

//15.1 var키워드로 선언한 변수의 문제점
//15.1.1 변수 중복 선언 허용
{
    var x = 1;
    var y = 1;
// var키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var키워드가 없는 것처럼 동작한다.
    var x = 100;

    // 초기화문이 없는 변수 선언문은 무시된다
    var y ;

    console.log(x) // 100
    console.log(y) // 1
}

//15.1.2 함수 레벨 스코프
{
    var x = 1

    if(true){
        // x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
        // 이는 의도치 않게 변수값이 변경되는 부작용을 발생시킨다
        var x = 10;
    }
    console.log(x) // 10
}

// 15.1.3 변수 호이스팅
// var키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진
// 것처럼 동작한다. . 즉 변수 호이스팅에 의해 var키워드로 선언한 변수는 변수 선언문 이전에 참조할 수 있다.
// 단 할당문 이전에 변수를 참조하면 언제나 undefined를 반환한다

{
    // 이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다(1. 선언단계)
    // 변수 foo는 undefined로 초기화된다. (2. 초기화 단계)
    console.log(foo)
    // 변수에 값을 할당(3. 할당 단계)
    foo = 123
    console.log(foo)
    // 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
    var foo;
}


//15.2 let 키워드
//15.2.1 변수 중복 선언 금지
// let키워드로 이름이 같은 변수를 중복 선언하면 문법 에러가 발생한다
{
    var foo = 123
    var foo = 456

    let bar = 123;
    // let bar = 456; Identifier 'bar' has already been declared
//  let const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
}

//15.2.2 블록 레벨 스코프
// let 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다

{
    
    let foo = 1; // 전역변수

    {
        let foo = 2; // 지역변수
        let bar = 3;
    }

    console.log(foo) // 1
    // console.log(bar) // ncaught ReferenceError: bar is not defined
}

{
    let i = 10;
    function foo (){
        let i = 100;

        for(let i = 1; i < 3 ; i++){
            console.log(i); // 1 2
        }
        console.log(i) // 100
    }
    foo();
    console.log(i) // 10
}

// 15.2.3 변수 호이스팅

{
    // console.log(foo) Cannot access 'foo' before initialization
    let foo;
}

{
    console.log(test) //undefined
    var test;
    console.log(test) //undefined

    test = 1 // 할당문에서 할당 단계가 실행된다
    console.log(test) //1
}

// let 키워드로 선언한 변수는 "선언단계" "초기화단계" 가 분리되어 진행된다.
// 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언 단계가 먼저 실행되지만
// 초기화 단계는 변수 선언문에 도달했을 때 실행된다.
{
    // console.log(TDZ); Cannot access 'TDZ' before initialization

    let TDZ; 
    console.log(TDZ); // undefined

    TDZ = 1 
    console.log(TDZ) // 1

}

// 변수를 참조할 수 없는 구간을 일시작 사각지대(TDZ)라고 부른다

// ES6 에서 도입된 let const class를 사용한 선언문은 호이스팅이 발생하지 않는 것처럼 동작한다

// 15.3  const 키워드
// 선언과 초기화
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야한다.
{
    const foo = 1;
}
{
    // const bar; Missing initializer in const declaration  
}

//15.3.2 재할당금지
{
    const foo = 1
    // foo = 2 Uncaught TypeError: Assignment to constant variable.
}

// 15.3.3 상수
// 상수는 재할당이 금지된 변수를 말한다
// 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 한다.
// const 키워드로 선언된 변수에 원시 값을 할당할 경우 원시 값은 변경할 수 없는 값이고
// const 키워드에 의해 재할당이 금지되므로 할당된 값을 변경할 수 있는 방법은 없다.

// 15.3.4 const 키워드와 객체
// const 키워드로 선언된 변수에 객체를 할당할 경우 값을 변경할 수 있다.

// 16 프로퍼티 어트리뷰트
// 16.1 내부 슬롯과 내부 메서드
// [[]] 이중 대괄호로 감싼 이름들이 내부 슬롯과 내부 메서드다.
// 일부 내부 스롯과 내부 메서드에 한하야 간접적으로 접근할 수 있는 수단을 제공한다.

{
    const p = {};
    // 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다
    // p.[[Prototype]]
    p.__proto__
}

// 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
// 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는
// 프로퍼티 어티르뷰트를 기본값으로 자동 정의한다
// 프로퍼티의 상태란 프로퍼티의 값,값의갱신가능여부,열거가능여부,재정의가능여부를 말한다.

// 프로퍼티 어티르뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값인 내부 슬롯 [[value]],[[writable]],[[Eunumrable]].[[Configurable]]이다
// object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수 있다
{
    const person = {
        name : 'Lee'
    }
    console.log(Object.getOwnPropertyDescriptor(person,'name'));
    //value: "Lee", writable: true, enumerable: true, configurable: true
    // 프로퍼티 디스크립터 객체를 반환한다.

    // 매서드를 호출할 때
    // 첫 번째 매개변수에 객체의 참조를 전달하고
    // 두 번째 매개변수에는 프로퍼티 키를 문자열로 전달한다.
    // 이떄 getOwnPropertyDescriptor 메서드는 프로퍼티 어트리뷰트 정보를 제공하는
    // 프로퍼티 디스크립터 객체를 반환한다.
}

// 16.3 데이터 프로퍼티와 접근자 프로퍼티
// 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.

// 1. data propery 데이터 프로퍼티
// 키와 값으로 구성된 일반적인 프로퍼티다. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.

// 2. accessor propery 접근자 프로퍼티
// 자체적으로 값을 갖지 않고
// 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티.

// 16.3.1 데이터 프로퍼티

//value: "Lee",
// 프로퍼티 값의 변경 가능 여부 writable: true, // false일 경우 value값 변경 불가
// 프로퍼티의 열거 가능 여부 enumerable: true, // false 일 경우 열거할 수 없음 
// 프로퍼티의 재정의 가능 여부 configurable: true, // 프로퍼티 삭제, 어트리뷰트 값 변경 금지.


