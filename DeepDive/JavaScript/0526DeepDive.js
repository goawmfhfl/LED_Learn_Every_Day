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
    var fow = 123
    var fow = 456
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

    console.log('전역변수 :',foo) // 1
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
    console.log('foo :',foo)
}

{
    console.log(test) //undefined
    var test;
    console.log(test) //undefined

    test = 1 // 할당문에서 초기화 단계가 실행된다
    console.log(test) //1
}


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
    //console.log(foo) // Cannot access 'foo' before initialization
    const foo = 1;
    console.log('const : ',foo)
}   
{
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
// 자바스크립트 엔진에서 실제로 동작하지만 개발자가 직접 접근할 수 있도록 외부로 공개된 객체의 프로퍼티는 아니다.
// 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공한다

// 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
// 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는
// 프로퍼티 어티르뷰트를 기본값으로 자동 정의한다
// 프로퍼티의 상태란 프로퍼티의 값,값의갱신가능여부,열거가능여부,재정의가능여부를 말한다.
{
    const person = {
        name : 'Lee'
    }
    console.log(Object.getOwnPropertyDescriptor(person,'name'));
    //value: "Lee", writable: true, enumerable: true, configurable: true
}
// 매서드를 호출할 때
// 첫 번째 매개변수에 객체의 참조를 전달하고
// 두 번째 매개변수에는 프로퍼티 키를 문자열로 전달한다.
// 이떄 getOwnPropertyDescriptor 메서드는 프로퍼티 어트리뷰트 정보를 제공하는
// 프로퍼티 디스크립터 객체를 반환한다.
// 존재하지 않을 경우에는 undefined 가 출력된다



// 16.3 데이터 프로퍼티와 접근자 프로퍼티
// 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.

// 1. data propery 데이터 프로퍼티
// 키와 값으로 구성된 일반적인 프로퍼티다. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.

// 2. accessor propery 접근자 프로퍼티
// 자체적으로 값을 갖지 않고
// 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티.

// 16.3.1 데이터 프로퍼티

// 프토퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값
{
    const value = {
        name : 'jaeyoung'
    }
    console.log(value['name']) // jaeyoung 
    console.log(Object.getOwnPropertyDescriptor(value,'name'))
    // {value: "Lee", writable: true, enumerable: true, configurable: true}
    // 나머지는 이미지 참조
}
// 프로퍼티 값의 변경 가능 여부 writable: true, // false일 경우 value값 변경 불가
// 프로퍼티의 열거 가능 여부 enumerable: true, // false 일 경우 열거할 수 없음 
// 프로퍼티의 재정의 가능 여부 configurable: true, // 프로퍼티 삭제, 어트리뷰트 값 변경 금지.


// 16.3.2 접근자 프로퍼티
// 접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때
// 사용하는 접근자 함수로 구성된 프로퍼티다.

// get 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수
// 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 get의 값 즉 getter이
// 호출되고 그 결과가 프로퍼티 값으로 반환된다

// set
// 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수다
// 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트/ set의 값 setter이
// 호출되고 그 결과가 프로퍼티 값으로 저장된다.
// https://blog.naver.com/goawmfhfl1/222342884728

{
    class User{
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    
        get age(){
            return this._age;
        }
        set age(value){
            // if(value < 0){
            //      throw Error('age can not be negative')
            //  }
            this._age = value < 0 ? 0 : value 
            // 삼항연산자 0이 더 크다면? 참일경우 0을 호출 아닐경우 
            // 설정해둔 value 호출
        }
    }
    
    const user1 = new User('steve','Job', 20);
    console.log(user1.age) // 0 호출
}
//age라는 getter를 정의하면 기존에 설정했던 this.age = age;는 메모리에 있는 데이터를 불러오는 게 아니라 바로 get age()를 호출한다. 기존에 선언되어 있던 this.age = age는 무시가 된다. 
// 그리고 세터를 정의하는 순간 this.age = age 우변을 호출할 때, 즉 값으로 할당할 때 메모리 값을 할당하는 게 아니라 세터를 호출하게 된다. 그 말은 set age(value){ this.age = value; } 세터 안에서 전달된 value를 this.age에 할당할 때 메모리 값을 업데이트하는 것이 아니라 세터를 호출한다.


{
    const person = {
        //데이터 프로퍼티
        firstName : 'jaeyoung',
        lastName : 'choi',
        // fullName은 접근자 함수로 구성된 접근자 프로퍼티다
        // getter 함수
        get fullName(){
            return `${this.firstName} ${this.lastName} `
        },
        set fullName(name){
            [this.firstName, this.lastName] = name.split(' ');
        }
    }

    // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
    console.log(person.firstName + ' ' + person.lastName); // jaeyoung choi
    // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
    // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
    person.fullName = 'my name'
    console.log(person) // {firstName: "my", lastName: "name"}
    // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
    // 접근저 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
    console.log(person.fullName) // my name 

    let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
    console.log(descriptor)
    descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
    console.log(descriptor)
}

// 16.4 프로퍼티 정의
// 프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나,
// 기저ㅗㄴ 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말한다.

// object.defineProperty(person)
// 한번에 하나만 정의할 수 있음
// object.defineProperties
// 여러 개의 프로퍼티를 한 번에 정의할 수 있다.

// 16.5 객체 변경 방지
/**
 * 객체는 변경 가능한 값이므로 재할당 없이 변경할 수 있다,
 * 즉 프로퍼티를 추가하거나 삭제할 수 있고
 * 프로퍼티 값을 갱신할 수 있으며
 * object.defined defineProperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의 할 수 있다
 */


// 자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공한다
// 객체 변경 방지 메서드들은 객체의 변경을 금지하는 강도가 다르다.

// 16.5.1 // 객체 확장 금지.
// 객체 확장 금지란 프로퍼티 추가 금지를 의미한다
// 즉 , 확장이 금지된 객체는 프로퍼티 추가가 금지된다
// 확장이 금지된 객체인지 아닌지는 object.isExtensible 메서드로 확인할 수 있다
{
    const person = {
        name : 'choi'
    }
    console.log(Object.isExtensible(person)) // true
    // 객체 확장 금지
    Object.preventExtensions(person);
    console.log(Object.isExtensible(person)) // false

    person.age = 20;
    console.log(person) // name: "choi"}

    // Object.defineProperty(person,'age',{value : 20})
    // Cannot define property age, object is not extensible
}

// 16.5.2 // 객체 밀봉
// 프로퍼티 추가 및 사제와 프로퍼티 어트리뷰트 재정의 금지를 의미한다
// 밀봉된 객체는 읽기와 쓰기만 가능하다

{
    const person = {
        name : 'choi'
    }
    console.log(Object.isSealed(person)); // false
    Object.seal(person); // ?? 
    console.log(Object.isSealed(person)) // true
    person.age = 20
    delete person.name;
    // 값 갱신은 가능하다.
    person.name = 'kim';
    console.log(person)
    // 재 정의가 불가하다.
    // Object.defineProperty(person, 'name', {configurable:true})
    // Cannot redefine property: name 
}


// 16.5.3 객체 동결
// 동결된 객체는 읽기만 가능하다
{
    const person = {
        name : 'choi'
    }
    console.log(Object.isFrozen(person)); // false
    Object.freeze(person);
    console.log(Object.isFrozen(person)); // true
}

// 16.5.4 불변객체
// 얕은 변경 방지로 직속 프로퍼티만 변경이 방지되고 중첩 객체까지는 영향을 주지는 못한다
// Object.freeze 메서드로 객체를 동결하여도 중첩 객체까지 동결할 수 없다.
{
    const person = {
    name : 'choi',
    address: {
        city : 'seoul'
    }
    }
    Object.freeze(person);

    console.log(Object.isFrozen(person)) // true
    console.log(Object.isFrozen(person.address)) // false

    person.address.city = 'jeju';
    console.log(person); // ?? 
}
// 이상 코드는 너무 어려웜..

{
    function deepFreeze(target){
        // 객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않은 객체만 동결한다
        if (target && typeof target === 'object' && !Object.isFrozen(target)){
            Object.freeze(target);
            // 모튼 프로퍼티를 순회하며 재귀적으로 동결한다
            // Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다
            // forEach 메서드는 배열을 순회하며 각 요소에 대하여 콜백 함수를 실행한다
            Object.keys(target).forEach(key => deepFreeze(target[key]));
        }
        return target;
    }

    const person = {
        name: 'choi',
        address: {city : 'seoul'}
    }

    deepFreeze(person);

    console.log(Object.isFrozen(person)); // true
    console.log(Object.isFrozen(person.address)) // true
    person.address.city = 'jeju';
    console.log(person);
    // 어렵다.
}