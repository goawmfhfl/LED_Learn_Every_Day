
{
var x = 10;
// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다
var str = x.toString();
console.log(typeof str,str) // string 10
// x 변수의 값이 변경된 것은 아니다
console.log(typeof x,x) // number 10
}

{
var x = 10;
// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + '';

console.log(typeof str, str); // string 10
// 역시나 x 변수의 값이 변경된 것은 아니다

console.log(typeof x, x); // number 10
}

// 암묵적 타입 변환
{
// 피연산자가 모두 문자열 타입이어야 하는 문맥
console.log('10' + 2 ) // 10
// 피연산자가 모두 숫자 타입어어야 하는 문맥
console.log(5 * '10' ) // 50
// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
console.log(!0);
if(1){}
}

// 암묵적 타입 변환 - 문자열 타입으로 변환

console.log(1+'2') //12
{
    // 숫자타입
    console.log(0 + '') // 0
    console.log(-0 + '') // 0
    console.log(1 +  '') // 1
    console.log(-1 +  '') // -1
    console.log(NaN +  '') // NaN
    console.log(Infinity +  '') // Infinity
    console.log(-Infinity +  '') // -Infinity

    //불리언 타입
    console.log(true + '') // true
    console.log(false +  '') // false

    // null 타입
    console.log(null + '') // null

    // undefined 타입
    console.log(undefined + '') // undefined

    // 심벌 타입

    // console.log((Symbol()) + '')//Uncaught TypeError: Cannot convert a Symbol value to a string

    // 객체 타입

    console.log(({}) + '') // [object Object]
    console.log(Math + '') // [object Math]
    console.log([] + '') // ''
    console.log([10,20] + '') // 10,20
    console.log((function(){}) + '') //function(){}
    console.log(Array + '') // function Array() { [native code] }

}


// 암묵적 타입 변환 - 숫자 타입으로 변환
{
    console.log( 1 - '1') //0
    console.log( 1 * '10') // 10
    console.log( 1 / 'one') // NaN
}
// 피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로
// 표현식의 평가 결과는 NaN이 된다.

console.log('1' > 0) // true
/*
자바스크립트 엔진은 비교 연산자 표현식을 평가하기 위해 비교 연산자의 피연산자 중에서
숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.
*/

{
    // 문자열 타입
    console.log( + '') // 0
    console.log( + '0') // 0
    console.log( + '1') // 1
    console.log( + 'string') // NaN

    // 불리언 타입
    console.log( + true) // 1
    console.log( + false) // 0

    // null 타입
    console.log( + null) // 0

    // undefined
    console.log( + undefined) // NaN

    // 객체 타입
    console.log( + {} ) // NaN
    console.log( + [] ) // 0
    console.log( + [10, 20] ) // NaN
    console.log( + (function(){})) // NaN
}

// 빈 문자열 '' , 빈 배열 [] , null , false 는 0으로
// true 는 1로 변환된다.
// 객체와 빈 배열이 아닌 배열, undefined 는 변환되지 않으 NaN로 된다.


// 불리언 타입으로 변환
{
    if ('') console.log('1');
    if (true) console.log('2');
    if (0) console.log('3');
    if ('str') console.log('4');
    if (null) console.log('5');

    // 2 4
    // 불리언 타입이 아닌 값을
    // Trurhy 값 (참으로 평가되는 값) // true
    // Falsy 값 (거짓으로 평가되는 값) // false

    if (!false) console.log(false + ' is falsy value'); 
    if (!undefined) console.log(undefined + ' is falsy value');
    if (!null) console.log(null + ' is falsy value');
    if (!0) console.log(0 + ' is falsy value');
    if (!NaN) console.log(NaN + ' is falsy value');
    if (!'') console.log('' + ' is falsy value');

}

{
function isFalsy(v){
    return !v;
}
function isTruthy(v){
    return !!v;
}
// 모두 true 를 반환한다

isFalsy(false);
isFalsy(undefined);
isFalsy(0);
isFalsy(null);
isFalsy(NaN);
isFalsy('');

// 모두 true 를 반환한다

isTruthy(true)
isTruthy('0')
isTruthy({})
isTruthy([])
}

// 9.3 명시적 타입 변환
// 1. 표준 빌트인 생성자 함수 (string, Number, Boolean)를 new연산자 없이 호출하는 방법
// 2. 빌트인 메서드를 사용하는 방법
// 3. 암묵적 타입 변환을 이용하는 방법

// 표준 built-in 생성자 함수와 표준 빌트인 메서드는 자바스크릅티에서 기본 제공하는 함수다
// 표준 빌트인 생성자 함수는 객체를 생성하기 위한 함수이며 new 연산자와 함께 호출한다
// 표준 빌트인 메서드는 자바스크립트에서 기본 제공하는 빌트인 객체의 메서드다.

// 9.3.1 문자열 타입으로 변환
//1. string 생성자 함수를 new 연산자 없이 호출하는 방법
//2. Object.prototype.toString 메서드를 사용하는 방법
//3. 문자열 연결 연산자를 이용하는 방법


// 9.3.2 숫자열 타입으로 변환
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 2. parseInt. parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
// 3. + 단항 산술 연산자를 이용하는 방법
// 3. * 단항 산술 연산자를 이용하는 방법

// 9.3.3 불리언 타입으로 변환
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 2. ! 부정 논리 연산자를 두 번 사용하는 방법

// 9.4 단축평가
// 9.4.1 논리 연산자를 사용한 단축 평가
// 1. 논리합(||) 또는 논리곱(&&)연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다
// 2. 논리곱(&&) 연산자는 두 개의 피연산자가 모두 true로 평가될 떄 true를 반환한다
// 3. 논리곱(&&) 연산자는 논리 연산의 결과를 결정하는 두 번쨰 피연산자를 그대로 반환한다
// 4. 논리합(||) 연산자는 두 개의 피연산자 중 하나만 true 평가될 때 true를 반환한다
// 5. 논리 연산의 결과를 결정한 첫 번째 피연산자를 바로 반환한다
// 논리곱과 논리합 연산자는 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환한다
// 단축평가는 표현식을 표현하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다

{
    // 논리합 || 연산자
    'cat' || 'Dog' // 'cat'
    'false' || 'Dog' // 'Dog'
    'cat' || 'false' // 'cat'
    
    // 논리곱 && 연산자
    'cat' && 'Dog' // 'Dog'
    false && 'Dog' // false
    'Cat' && false // false
}

// 단축 평가를 사용하면 if 문을 대체할 수 있다.
// 어떤 조건이 Truthy 값(참으로 평가되는 값)일 때
// 무언가를 해야 한다면 논리곱(&&) 연산자 표현식으로 if문을 대체할 수 있다
{
    let done = true
    let message = '';

    // 주어진 조건이 true 일 때
    if (done) message = '완료';
    //if 문은 단축 평가로 대체 가능하다
    // done이 true라면 message에 '완료'를 할당
    message = done && '완료'
    console.log(message);
}

// 조건이 Falsy 값 (거짓으로 평가되는 값)일 때 무언가를 해야 한다면 논리합(||) 연산자 표현식으로
// if 문을 대체할 수 있다
{
    let done = false
    let message = '';

    // 주어진 조건이 false일 때
    if(!done) message = '미완료'

    //if 문은 단축 평가로 대체 가능하다.
    // done이 false라면 message에 '미완료'를 할당
    message = done || '미완료';
    console.log(message);
}

// 참고로 삼항 조건 연산자는 if...else 문을 대체할 수 있다
{
    let done = true
    let message = '';

    //if ...else 문
    if (done) message = '완료'
    else message = '미완료'
    // if...esle 문은 삼항 조건 연산자로 대체 가능하다.
    message = done ? '완료' : '미완료'
    console.log(message);
}
// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
{
// let elem = null
// var value = elem.value; Uncaught TypeError: Cannot read property 'value' of null
}
{
    var elem = null;
    // elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
    // elem이 Truthy 값이면 elem.value; 로 평가한다.
    var value = elem && elem.value;
}

//함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다.
//이때 단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는
//에러를 방지할 수 있다


function getStringLength(str){
    str = str || '';
    return console.log(str.length)
}

getStringLength('') // 0
getStringLength('hi') // 2

{

//ES 6 매개변수의 기본값 설정
function getStringLength(str = ''){
    
    return console.log(str.length)
}
getStringLength(); // 0
getStringLength('hi'); // 2
getStringLength('hello') // 5

}

// 9.4.2 옵셔널 체이닝 연산자
//ES11 에서 도입된 옵셔널 체이닝 연산자 ?. 는 좌항의 피연산자가 null 또는 undefined인 경우
// undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다
{
    let elem = null;
    let value = elem?.value;
    console.log(value) // undefined

    // 옵셔널 체이닝 연산자 ?.는 객체를 가리키기를 기대하는 변수가 
    // null 또는 undefinde가 아닌지 확인하고 프로퍼티를 참조할 때 유용하다. 
}

{
    let elem = null
    let value = elem && elem.value;
    console.log(value) // null
}

// 논리 연산자 &&는 좌항 피연산자가 false로 평가되는 Falsy 값 (false undefined null 0 -0 NaN '')
// 이면 좌항 피연산자를 그대로 반환한다. 좌항 피연산자가 Falsy 값인 0이나 ''인 경우도 마찬가지다
// 하지만 0이나 ''은 객체로 평가될 때도 있다
{
    var str = '';
    //문자열의 길이를 참조한다
    var length = str && str.length
    // 문자열의 길이를 참조하지 못한다
    console.log(length); // ''
}
// 옵셔널 체이닝 연산자 ?. 는 좌항 연산자가 false로 평가되는 Falsy 값 (false undefined null 0 -0 NaN '')
// 이라도 null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
{
    var str = '';

    //문자열의 길이를 참조한다. 이때 좌항 피연산자가 flase로 평가되는 Falsy 값이라도
    // null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
    var length = str?.length;
    console.log('length :',length)  // length : 0
}

// 9.4.3 null 병합 연산자

// null 병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고
// 그렇지 않으면 좌항의 피연산자를 반환한다.
// null 병합 연산자 ??는 변수에 기본값을 설정할 때 유용하다

{
    var foo = null ?? 'default string';
    console.log(foo) // 'defalut string'
}

// null 병합 연산자 ??가 도입되기 이전에는 논리 연산자 ||를 사용한 단축 평가를 통해
// 변수에 기본값을 설정했다. 논리 연산자 ||를 사용한 단축 평가의 경우 좌항의 피연산자가
// false로 평가되는 Falsy 값 이면 우항의 피연산자를 반환한다.
// 만약 Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
{
    // Flasy 값인 0이나 ''도 기본값으로 유효하다면 예기치 않은 동작이 발생할 수 있다
    var foo = '' || 'defalut string'
    console.log(foo); //'defalut string'
    
}
{
    // 좌항의 피연산자가 Falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 반환한다
    var foo = '' ??'defalut string'
    console.log(foo) //''
}

console.log(" 5월 21일 금요일 공부 기록입니다 ")

/**
 * 자바스크립트는 객체 기반의 프로그래밍 언어이며, 자바스크립트를 구성하는 거의 모든 것이 객체다.
 * 원시 값을 제외한 나머지 값(함수, 배열, 정규 표현식 등)은 모두 객체다.
 * 원시 타입의 값, 즉 원시 값은 변경 불가능한 값이지만 객체 타입의 값, 즉 객체는 변경 가능한 값이다
 * 객체는 프로퍼티의 집합이다.
 * 프로퍼티 값이 함수일 경우 매서드라 부른다.
 */
{
    var person = {
        name: 'choi',
        age: '20'
    }
    // name , age 프로퍼티
    // 'choi' '20' 프로퍼티 값
    var counter = {
        num : 0,
        increase: function(){
            this.num++
        }
    }

    // function = 메서드
}

// 프로퍼티 객체의 상태를 나타내는 값
// 메서드 프로퍼티를 참조하고 조작할 수 있는 동작

// 10.2 객체 리터럴에 의한 객체 생성

// 인스턴스란 ? 클래스에 의해 생성되어 메모리에 저장된 실체를 말한다..?
// 객체지향 프로그래밍에서 객체는 클래스와 인스턴스를 포함한 개념이다.

// 자바스크립트는 프로토타입 기반 객체지향 언어로서
// 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방법을 지원한다.

// 객체 리터럴은 중괄호 내에 0개 이상의 프로퍼티를 정의한다. 변수에 할당되는 시점에
// 자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성한다

{
    var person = {
        name : 'choi',
        sayHello : function (){
            console.log(`Hello! My name is ${this.name}.`)
        }
    }
    console.log(typeof person) //object
    console.log(person)

    var empty = {}
    console.log(typeof empty) // object
}

// 10.3 프로퍼티
{
    var person = {
        // 프로퍼티 키는 name, 프로퍼티 값은 'choi'
        name : 'choi',
        // 프로퍼티 키는 age, 프로퍼티 값은 20
        age : 20
    }
}

// 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
// 프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값

{
    var person = {
        firstName:'jae young', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
        'last-name':'choi' // 식별자 네이밍 규칙을 준수하지 않은 프로퍼티 키
    }
    console.log(person) // {firstName: "jae young", last-name: "choi"}
}

{
    person = {
        firstName: 'jae young',
        // last-name : 'choi', // 문법 에러
    }
}

{
    var obj = {}
    var key = 'hello'
    obj[key] = 'world'
    console.log(obj) //  {hello: "world"}
}

{
    var foo = {
    // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
        '' : ''
    }
    console.log(foo) // {"": ""}
}
{
    var foo = {
        0: 1,
        1: 2,
        2: 3,
    }
    console.log(foo) // {0: 1, 1: 2, 2: 3}
    // 프로퍼티 키에 문자열이나 심벌 값 외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 된다
}

{
    var foo = {
        var: '',
        function: ''
    }
    console.log(foo) // {var: "", function: ""}
    // var function과 같은 예약어를 프로퍼티 키로 사용해도 에러가 발생하지 않는다.
    // 하지만 권장하지는 않는다.
}

{
    var foo = {
        name: 'jae young',
        name: ' choi jae young'
    }
    console.log(foo)
    // 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가
    // 먼저 선언한 프로퍼티를 덮어쓴다.
}

// 10.4 메서드

// 자바스크립트의 함수는 객체다.
// 따라서 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다

{
    var circle = {
        radius: 5, // 프로퍼티

        getDiameter: function(){ // 메서드
            return 2 * this.radius; // this는 circle을 가리킨다
        }
    }
    console.log(circle.getDiameter()) // 10
}

// 10.5 프로퍼티 접근

// 프로퍼티에 접근하는 방법은 다음과 같이 두 가지다.
//1. 마침표 프로퍼티 접근 연산자(.)를 사용하는 마침표 표기법
//2. 대괄호 프로퍼티 접근 연산자([...])를 사용하는 대괄호 표기법

{
    var person = {
        name : 'choi'
    }
    console.log(person.name) // choi
    console.log(person['name']) // choi

    // 대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는
    // 반드시 따옴표로 감싼 문자열이어야 한다.
}

// 10.6 프로퍼티 값 갱신
{
    var person = {
        name : 'jaeyoung'
    };

    //person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
    person.name = 'kim';
    console.log(person) // {name: "kim"}
}

// 10.7 프로퍼티 동적 생성

{
    let person = {
        name : 'jaeyoung'
    }
    person.age = 20;
    console.log(person) // {name: "jaeyoung", age: 20}
    // 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고
    // 프로퍼티 값이 할당된다.
}

// 10.8 프로퍼티 삭제

{
    var person = {
        name: 'jaeyoung'
    };
    // 프로퍼티 동적 생성

    person.age = 20;
    // person 객체에 age 프로퍼티가 존재한다
    // 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
    delete person.age
    // person 객체에 address 프로퍼티가 존재하지 않는다
    // 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다
    delete person.address

    console.log('delete :',person) // delete : {name: "jaeyoung"}
}


// 10.9 ES6에서 추가된 객체 리터럴의 확장 기능

// 10.9.1 프로퍼티 축약 표현

{
    // ES5
    var x = 1, y = 2;
    var obj = {
        x:x,
        y:y
    }
    console.log(obj)

}
{
    // ES6 에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때
    // 프로퍼티 키를 생략할 수 있다. 이때 프로퍼티 키는 변수 이름으로 자동 생성된다.

    let x = 1, y =2
    const obj = { x , y}
    console.log(obj);
}


// 10.9.2 계산된 프로퍼티 이름
{

    // ES5

    var prefix = 'prop'
    var i = 0;

    var obj = {};

    obj[prefix + '-' + ++i]= i;
    obj[prefix + '-' + ++i]= i;
    obj[prefix + '-' + ++i]= i;

    console.log(obj) // {prop-1: 1, prop-2: 2, prop-3: 3}
}

{
    // ES6
    const prefix = 'prop'
    let i = 0

    // 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
    const obj = {
        [`${prefix}-${++i}`]: i,
        [`${prefix}-${++i}`]: i,
        [`${prefix}-${++i}`]: i
    }
    console.log(obj) // {prop-1: 1, prop-2: 2, prop-3: 3}
}

//10.9.3 메서드 축약 표현
// ES5에서 메서드를 정의하려면 프로퍼티 값으로 함수를 할당한다.
{
    var obj = {
        name: 'jaeyoung',
        sayHi:function(){
            console.log('Hi' + this.name)
        }
    }
    obj.sayHi()
}

//ES 6에서는 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다.

{
    const obj = {
        name: 'jaeyoung',
        sayHi(){
            console.log('Hi' + this.name)
        }
    }
    obj.sayHi()
}

// 11장 원시 값과 객체의 비교
// 원시 타입의 값, 즉 원시 값은 변경 불가능한 값이다. 이에 비해 객체(참조) 타입의 값,
// 즉 객체는 변경 가능한 값이다.

// 원시 값을 변수에 할당하면 변수에는 실제 값이 저장된다. 이에 비해 객체를 변수에 할당하면
// 변수에는 참조 값이 저장된다.

// 11.1 원시 값
// 11.1.1 변경 불가능한 값
// 원시 타입의 값 , 즉 원시 값은 변경 불가능한 값이다.
// 변수와 값은 구분해서 생각해야한다. 변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체
// 또는 그 메모리 공간을 식별하기 위해 붙인 이름이고,
// 값은 변수에 저장된 데이터로서 표현식이 평가되어 생성된 결과를 말한다
// 변경 불가능하다는 것은 변수가 아니라 값에 대한 진술이다.

{
    // const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
    const o = {}
    o.a = 1

    // const 키워드를 사용해 선언한 변수에 할당한 원시 값은 변경할 수 없다
    // 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
    console.log(o)

    const x = 1
    // x = 2
    // console.log(x) // Uncaught TypeError: Assignment to constant variable.
}
// 원시 값은 변경 불가능한 값이기 때문에 값을 직접 변경할 수 없다.
// 따라서 변수 값을 변경하기 위햇 원시 값을 재할당하면 새로운 메모리 공간을 확보하고 재할당한 값을 저장한 후
// 변수가 참조하던 메모리 공간의 주소를 변경한다. 값의 이러한 특성을 불변성이라 한다.

// 11.1.2 문자열과 불변성

{
    let str1 = ''; // 0개의 문자로 이뤄진 문자열
    let str2 = "Hello"; // 5개의 문자로 이뤄진 문자열
}

{
    let str = 'Hello'
    str = 'world'

    // 첫 번째 문이 실행되면 문자열 'Hello'가 생성되고 식별자 str은 문자열 'Hello'가 저장된
    // 메모리 공간의 첫 번째 메모리 셀 주소를 가리킨다.
    // 그리고 두 번째 문이 실행되면 이전에 생성된 문자열 'Hello'를 수정하는 것이 아니라
    // 새로운 문자열 'world'를 메모리에 생성하고 식발자 str은 이것을 가리킨다. 이때 문자열
    // 'hello' 'world'는 모두 메모리에 존재한다. 식별자 str은 문자열 'hello'를 가리키고 있다가
    // 문자열 'world'를 가리키도록 변경되었을 뿐이다.
}

// 유사 배열 객체
{
    let str = 'string'
    console.log(str[0]); // s
    console.log(str.length); // 6
    console.log(str.toUpperCase()) // STRING
}
{
    let str = 'string'
    str[0] = 'S'
    console.log(str)

    // 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
    // 하지만 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
}

//11.1.3 값에 의한 전달
{
    let score = 80;
    let copy = score;
    console.log(score)
    console.log(copy)

    score = 100
    console.log(score)
    console.log(copy)// ?
    // 이 질문의 핵심은 '변수에 변수를 할당했을 때 무엇이 어떻게 전달되는가?
    // 이처럼 변수에 원시 값을 갖는 변수를 할당하면 할당받는 변수(copy)에는
    // 할당되는 변수(score)의 원시 값이 복사되어 전달된다
    // 이를 값에 의한 전달 이라고 한다.
}

{
    let score = 80
    let copy = score
    console.log(score,copy) // 80 80
    console.log(score === copy) // true

    //이 때 score변수와 copy 변수는 숫자 값 80을 갖는다는 점에서는 동일하다
    // 하지만 score 변수와 copy변수의 값 80은 다른 메모리 공간에 저장된 별개의 값이다.

    score = 100
    console.log(score,copy) // 100 80
    console.log(score === copy) // false
}

// 11.2 객체
// 11.2.1 변경 가능한 값
// 객체 타입의 값, 즉 객체는 변경 가능한 값이다.
// 객체를 할당한 변수가 기억하는 메모리 주소를 통해 메모리 공간에 접근하면
// 참조 값에 접근할 수 있다. 참조 값은 생성된 객체가 저장된
// 메모리 공간의 주소, 그 자체다

{
    // 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
    var person = {
        name : 'jaeyoung'
    }

    // person 변수에 저장되어 있는 참조 값으로 실제 객체에 접근한다
    console.log(person) // {name: "jaeyoung"}

    // 위 예제에서 person 변수는 객체 {name: "jaeyoung"} 를 가리키고(참조하고)있다
}

/**
 * 원시 값은 변경 불가능한 값이므로 원시 값을 갖는 변수의 값을 변경하려면 재할당 외에는 방법이 없다.
 * 하지만 객체는 변경 가능한 값이다.
 * 따라서 객체를 할당한 변수는 재할당 없이 객체를 직접 변경할 수 있다.
 * 즉, 재할당 없이 프로퍼티를 동적으로 추가할 수도 있고 프로퍼티 값을 갱신할 수도 있으며
 * 프로퍼티 자체를 삭제할 수도 있다
 */

{
    var person = { name: 'jaeyoung'}
    // 변경
    person.name = 'choi'
    // 추가
    person.address = 'seoul'
    // 삭제
    delete person.name

    console.log(person)
}

// 객체는 이러한 구조적 단점에 따른 부작용이 있다
// 그것은 원시 값과는 다르게 여러 개의 식별자가 하나의 객체를 공유할 수 있다는 것이다.
{
    // 깊은 복사

    const v = 1 ;
    const c1 = v;
    console.log(c1 === v)

    // 얕은 복사

    const o = {x:1}
    const c2 = o
    console.log(c2 === o)
    
}

// 11.2.2 참조에 의한 전달
{
    let person = {
        name : "lee"
    }

    let copy = person
    console.log(copy)
    
    // 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달된다
    // 이를 참조에 의한 전달이라고 한다.
    // 위의 상황은 두 개의 식별자가 하나의 객체를 공유한다는 것을 의미한다.
    // 그렇기에 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
}
{
    let james = {
        name : 'jaeyoung'
    }

    let copy = james

    console.log(copy === james)

    copy.name = 'choi'
    james.address = 'seoul'

    console.log(copy) // {name: "choi", address: "seoul"}
    console.log(james) // {name: "choi", address: "seoul"}
}

{
    var person1 = {
        name : "jaeyoung"
    }
    var person2 = {
        name : "jaeyoung"
    }

    console.log(person1 === person2) // false
    console.log(person1.name === person2.name) // true

    // 객체 리터럴은 평가될 때마다 객체를 생성한다. 따라서 person1 변수와 person2 변수가
    // 가리키는 객체는 비록 내용은 같지만 다른 메모리에 저장된 별개의 객체다
    // 즉 person1변수와 person2 변수의 참조 값은 전혀 다른값이다. 따라서 1은 false다.
    // 하지만 프로퍼티 값을 참조하는 person1.nmae 과 person2.name는 값으로
    // 평가될 수 있는 표현식이다. 두 표현식 모두 원시 값 'jaeyoung'으로 평가된다
    // 따라서 2는 true다.
}

// 12장 함수
// 수학의 함수는 입력을 받아 출력을 내보내는 일련의 과정을 정의한 것이다.

{
    function add (x,y){
        return x + y ;
    }
    var result = add(2,5)
    console.log(result)
}
// 프로그래밍 언어의 함수는 일련의 과정을 문으로 궇련하고 코드 블록으로 감싸서 하나의 실행
// 단위로 정의한 것이다.


//12.2 함수를 사용하는 이유
// 함수는 몇 번이든 호출할 수 있으므로 코드의 재사용이라는 측면에서 매우 유용하다
// 함수는 유지보수의 편의성을 높이고 실수를 줄여 코드의 신뢰성을 높이는 효과가 있다.
// 적절한 함수 이름은 함수의 내부 코드를 이해하지 않고도 함수의 역할을 파악할 수 있게 돕는다
// 이는 코드의 가독성을 향상시킨다.

//12.3 함수리터럴
// 자바스크립트의 함수는 객체 타입의 값이다.

{
    var f = function add (x,y){
        return x + y
    }
}

// 함수는 객체지만 일반 객체와는 다르다. 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.

//12.4 함수 정의
// 함수 정의란 함수를 호출하기 이전에 인수를 전달받을 매개변수와 실행할 문들, 그리고 반환할 값을
// 지정하는 것을 말한다
// 변수는 선언 한다고 했지만 함수는 정의 한다고 표현했다. 함수 선언문이 평가되면
// 식별자가 암묵적으로생성되고 함수 객체가 할당된다.
// 따라서 ECMAScript 사양에서도 변수에는 선언
// 함수에는 정의 라고 표현한다

// 12.4.1 함수 선언문
{
    function add (x,y){
        return x + y;
    }

    // 함수 참조
    // console.dir() 는 함수 객체의 프로퍼티까지 출력한다
    // console.log() node.js 환경에서는 console.log와 같은 결과가 출력된다.

    console.dir(add) // ƒ add(x,y)
    console.log(add(2,5)) // 7
}

{
    // function(x,y){
    //     return x + y;
    // }
}

// 함수 선언문은 함수 이름을 생략할 수 없다.
// 함수 선언문은 표현식이 아닌 문이다.

// 표현식이 아닌 문은 변수에 할당할 수 없다.
// 함수 선언문도 표현식이 아닌 문이므로 변수에 할당할 수 없다.
{
    var add = function add(x,y){
        return x + y;
    }
    console.log(add(2,5))
}

{

    // 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다
    // 함수 선언문에서 함수 이름을 생략할 수 없다.
    function foo (){ console.log('foo')}
    foo() // foo
    // foo는 자바스크립트 엔진이 암묵적으로 생성한 식별자다.

    // (function bar(){console.log('bar')});
    // bar() // Uncaught TypeError: foo(...) is not a function

    // () 내에 있는 함수 리터럴은 함수 선언문으로 해석되지 않고 함수 리터럴 표현식으로 해석된다
    // 그룹 연산자의 피연산자는 값으로 평가될 수있는 표현식이어야 한다.
    // 표현식이 아닌 문인 함수 선언문은 피연산자로 사용될 수 없다.
}

// 함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다.
// 함수 몸체 외부에서는 함수 이름으로 함수를 호출할 수 없다.

// 자바스크립트 엔진은 함수 선언문을 해석해 함수 객체를 생성한다.
// 이때 함수 이름은 함수 몸체 내부에서만 유효한 식별자이므로 함수 이름과는
//별도로 생성된 함수 객체를 가리키는 식별자가 필요하다
// 함수 객체를 가리키는 식별자가 없으면 생성된 함수 객체를 참조할 수 없으므로 호출할 수도 없다
// 따라서 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의
// 식별자를 암묵적으로 생성하고 거기에 함수 객체를 할당한다

{
    var add = function add(x,y){
        return x + y;
    }
    console.log(add (2,5))
    // 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다
    // 함수 이름과 변수 이름이 일치하므로 함수 이름으로 호출되는 듯하지만
    // 사실은 식별자로 호출된 것이다.
}

// 12.4.2 함수 표현식
// 자바스크립트의 함수는 객체 타입의 값이다. 자바스크립트의 함수는 값처럼 변수에 할당할 수도 있고
// 프로퍼티 값이 될 수도 있으며 배열의 요소가 될 수도 있다.
// 이처럼 값의 성질을 갖는 객체를 일급 객체라고 한다. 
// 함수가 일급객체라는 것은 함수를 값처럼 자유롭게 사용할 수 있다는 의미다.


// 함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.

{
    var add = function foo(x,y){
        return x + y;
    }
    console.log(add(2,5))
    // 함수 리터럴의 함수 이름은 생략할 수 있다. 이러한 함수를 익명 함수라 한다.
    
    // 함수 이름으로 호출하면 참조에러가 발생한다
    // 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
    // console.log(foo(2,5)) 에러 foo is defined

    // 자바스크립트 엔진은 함수 선언문의 함수 이름으로 식별자를 암묵적 생성하고 생성된 함수 객체를
    // 할당하므로 함수 표현식과 유사하게 동작하는 것처럼 보인다.
}
// 함수 선언문은 표현식이 아닌 문이고 함수 표현식은 표현식인 문이다.


// 12.4.3 함수 생성 시점과 함수 호이스팅.

{
    // 함수 참조
    console.dir('sub',sub)
    // console.dir(sub1) // undefined

    // 함수 호출
    console.log('add 1 ',add1(2,5)) // add 1 7

    // 함수 선언문
    function add1(x,y){
        return x + y;
    };

    // 함수 표현식
   var sub = function sub1(x,y){
        return x - y;
    };
}
// 함수 선언문으로 정의한함수와 함수 표현식으로 정의한 함수의 생성 시점은 다르다.
//1.  함수 선언문으로 함수를 정의하면 런타임 이전에 함수 객체가 먼저 생성된다.
//2. 자바스크립트 엔진은함수 이름과 동일한 이름의 식별자를 암묵적으로 생성
//3. 생성된 함수 객체를 할당
// 런타임 이전에 이미 함수 객체가 생성되어 있고 함수 이름과 동일한 식별자에 할당까지 완료된 상태다
// 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을
// 함수 호이스팅이라고한다

// var 키워드를사용한 변수 선언문 이전에 변수를 참조하면 변수 호이스팅에 의해
// undefined로 평가되지만 함수 선언문으로 정의한함수를 함수 선언문 이전에 호출하면
// 함수 호이스팅에 의해 호출이 가능하다.
// 변수 할당문의 값은 할당문이 실행되는 시점, 즉 런타임에 평가되므로 함수 표현식의 함수 리터럴도 할당문이
// 실행되는 시점에 평가되어 함수 객체가 된다.

// 함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라
// 변수 호이스팅이 발생한다.

// 12.4.4 function 생성자 함수

{
    var add = new Function('x','y','return x + y');
    console.log(add(2,5)) // 7
}

//12.4.5 화살표 함수
// 화살표 함수는 항상 익명 함수로 정의한다
{
    const add = (x,y) => x + y;
    console.log(add(2,5));//7
}

//12.5 함수 호출

//12.5.1 매개변수와 인수
{
    // 함수 선언문
    function add4(x,y){
        return x + y
    }

    // 함수 호출
    // 인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다
    var result = add4(1,2)
    console.log(result)
}

// 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 생성되고 일반 변수와 마찬가지로
// undefined로 초기화 된 이후 인수가 순서대로 할당된다.

{
    function add (x,y){
        console.log(x,y); 
        return x + y;
    }

    add (2,5)
    var result = add(2,5)

    console.log(result)
}

{
    function add(x,y){
        return x + y
    }
    console.log(add(2)); //NaN
}

// 매개변수 x에는 인수 2가 전달되지만 매개변수에 y에는 전달할 인수가 없다.
// y는 undefined로 초기화된 상태 그대로다.
// 따라서 함수 몸체의 문 x + y는 2+undefined와 같으므로 NaN이 반환된다

{
    function add(x,y){
        return x + y
    }
    console.log(add(2,5,10)); //7
}

// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다
// 버려지는 것은 아니다 모든 인수는 암묵적으로 arguments객체의 프로퍼티로 보관된다
{
    function add(x,y){
        console.log(arguments)
        //Arguments(3) [2, 5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]
        return x + y
    }
    console.log(add(2,5,10)); //7
}

// 12.5.2 인수 확인

{
    function add(x,y){
        if(typeof x !== 'number' || typeof y!== 'number'){
            throw new TypeError('인수는 모두 숫자 값이어야 합니다.')
        }
        return x + y;
    }
    // console.log(add(2)) // Uncaught TypeError: 인수는 모두 숫자 값이어야 합니다.
    // console.log(add('a','b'))// Uncaught TypeError: 인수는 모두 숫자 값이어야 합니다.
}
{
    function add (a,b,c){
        a = a || 0;
        b = b || 0;
        c = c || 0;
        return a + b + c
    }
    console.log(add(1,2,3)) // 6
    console.log(add(1,2)) // 3
    console.log(add(1)) // 1
    console.log(add()) // 0
}

// ES6에서 도입된 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를
// 간소화할 수 있다.

{
    function add ( a = 0, b = 0, c = 0 ){
        return a + b + c
    }
    console.log(add(1,2,3)) // 6
    console.log(add(1,2))// 3
    console.log(add(1)) // 1
    console.log(add(0)) // 0
}

// 12.5.3 매개변수의 최대 개수
// 매개변수 개수는 적을수록 좋다.
// 이상적인 함수는 한 가지 일만 해야 하며 가급적 작게 만들어야한다

//12.5.4 반환문
// 반환문은 두가지 역할을 한다.
// 첫째 반환문은 함수의 실행을 중단하고 함수 몸체를 빠져 나간다.
{
    function multyply(x,y){
        return x * y
        console.log('실행되지 않는다')
    }
    var result = multyply(3,5)
    console.log(result)
    
}
// 둘째 반환문은 return 키워드 뒤에 오는 표현식을 평가해 반환한다
{
    function foo (){
        return
    }
    console.log(foo()) // undefined
}
// 반환문은 생략할 수 있다. 
{
    function foo (){
    }
    console.log(foo()) // undefined
}
{
    function multyply (x,y){
        //return 키워드와 반환값 사이에 줄바꿈이 있으면
        return // 세미콜론 자동 삽입 기능(ASI)에 의해 세미콜론이 추가된다
        x * y // 무시된다.
    }
    console.log(multyply(3,5))// undefined
}


// 12.6 참조에 의한 전달과 외부 상태의 변경
{
    function changeVal(primitive,obj){
        primitive += 100;
        obj.name = 'choi';
    }
    var num = 100
    var person = {name : 'jaeyoung'};

    
    console.log(num) // 100
    console.log(person) //{name : 'jaeyoung'};

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다
    changeVal(num,person)

// 원시 값은 원본이 훼손되지 않는다
    console.log(num) //  100

// 객체는 원본이 훼손된다.
    console.log(person) // {name: "choi"}
}

// 12.7 다양한 함수의 형태
// 12.7.1 즉시 실행 함수
{
    // 익명 즉시 실행 함수
    (function(){
        var a = 3;
        var b = 5;
        return a * b
    }())
}

// 그룹연산자 내의 기명 함수는 함수 선언문이 아니라 함수 리터럴로 평가되며
// 함수 이름은 함수 몸체에서만 참조할 수 있는 식별자이므로
// 즉시 실행 함수를 다시 호출할 수는 없다


{
    var res =(function(){
        var a = 5;
        var b = 3;
        return a * b
    }())

    console.log(res)

    // 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
    res = (function (a,b){
        return a* b
    }(3,5))

    console.log(res)
}


// 12.7.2 재귀 함수
// 함수가 자기 자신을 호출하는 것을 재귀 호출 이라 한다.
// 재귀 함수는 반복되는 처리를 위해 사용한다.
{
    function countdown(n){
        for (var i = n; i>= 0; i--) console.log(i)
    }
    countdown(10)
}

{
    function countdown(n){
        if (n < 0) return;
        console.log(n);
        countdown(n - 1)
    }
    countdown(10)
    // 자기 자신을 호출하는 재귀 함수를 사용하면 박복되는 처리를 반복문
    // 없이 구현할 수 있다.
}

// 이부분은 이해가 잘 안된다. 너무 얿다..
{
    var factorial = function foo(n){
        // 탈출 조건 n이 1이하일 때 재귀 호출을 멈춘다
        if (n <= 1) return 1;
        // 함수를 가리키는 식별자로 자기 자신을 재귀 호출
        return n * factorial(n - 1)
    }
    console.log(factorial(5))
}

// 재귀 함수는 자신을 무한 재귀 호출한다. 재귀 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다.
{
    function factorial(n){
        if( n <= 1 ) return 1

        
        var res = n;
        while(--n) res *= n
        return res;
    }
    // res = 3 * =  3 * 3 
    // res = 9 * = 9 * 2
    // res = 18 * = 18 * 1
    console.log(factorial(3)) //  3 * 2 * 1
    console.log(factorial(4)) //  4 * 3 * 2 * 1
    console.log(factorial(5)) // 5 * 4 * 3 * 2 * 1
}


//12.7.3 중첩함수
{
    function outer(){
        var x = 1;
        // 중첩 함수
        function inner(){
            var y = 2;
            // 외부 함수의 변수를 참조할 수 있다
            console.log( x+y )
        }
        inner()
    }
    outer()
}


//12.7.4 콜백함수
{
    // n만큼 어떤 일을 반복한다
    function repeat1(n){
        // i를 출력한다
        for (var i = 0; i < n; i++) console.log(i)
    }
    repeat1(5) // 0 1 2 3 4

    // n만큼 어떤 일을 반복한다
    function repeat2(n){
        for (var i = 0; i < n; i++){
            // i가 홀수일 때만 출력한다
            if(i % 2)(console.log('repeat2 :',i))
        }
    }
    repeat2(5) // 1 3 
}

{
    //외부에서 전달받은 f를 n만큼 반복 호출한다
    function repeat (n,f){
        for (var i = 0; i < n; i++){
            f(i) // i를 전달하면서 f호출
            // console.log('logAll : ',i) // logAll : 0 1 2 3 4
        }
    }

    var logAll = function(i){
        console.log('logAll : ',i) // logAll : 0 1 2 3 4
    }

    repeat (5,logAll) // 0 1
    repeat (5,function(i){
        if(i % 2) console.log('고차함수',i);
    }) // 고차함수 : 1 3 출력
    
    var logOdds = function (i){
        if ( i % 2){
            console.log('logOdds :', i)
        }
    }
    repeat (5 , logOdds) // logOdds: 1 3
        
}
// 고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다
// 다시 말해 콜백 함수는 고차 함수에 의해 호출되며
// 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다
// 따라서 고차함수에 콜백 함수를 전달할 때 콜백 함수를 호출하지 않고 함수 자체를 전달해야 한다

{
    var res = [1,2,3].map(function (item){
       return item * 2; 
    })
    console.log('map :',res); //map : (3) [2, 4, 6]

    res = [1, 2, 3].filter(function(item){
    return item % 2
    })
    console.log('filter :' ,res) // filter : (2) [1, 3]

    res = [1, 2, 3].reduce(function(acc, cur){
        return acc + cur
    },0);
    console.log('reduce :', res) // reduce : 6
}

// 12.7.5 순수 함수와 비순수 함수
// 함수형 프로그래밍에서는 어떤 외부 상태에 의존하지도 않고 변경하지도 않는,
// 즉 부수 효과가 없는 함수를 순수 함수라 하고
// 외부 상태에 의존하거나 외부 상태를 변경하는, 즉 부수 효과가 있는 함수를 비순수 함수라고 한다.

{
    // 순수함수

    var count = 0; // 현재 카운트를 나타내는 상태
    // 순수 함수 increase 는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
    function increase(n){
        return ++n
    }

    // 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
    count = increase(count);
    console.log(count) // 1
    count = increase(count);
    console.log(count) // 2
}
{
    // 비순수 함수
    // 비순수 함수는 외부 상태에 의존하거나 외부 상태를 변경하는 함수다

var count = 0

function increase(){
    return ++count
}
increase();
console.log(count) // 1
increase();
console.log(count) // 2
}
// 함수가 외부 상태를 변경하면 상태 변화를 추적하기 어려워진다. 따라서 함수 외부 상태의 변경을
// 지양하는 순수 함수를 사용하는 것이 좋다.

// 함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과를 최대한 억제해 오류를 피하고 프로그램의
// 안정성을 높이려는 노력의 일환이라 할 수 있다. 자바스크립트는 멀티 패러다임 언어이므로 객체지향
// 프로그래밍뿐만 아니라 함수형 프로그래밍을 적극적으로 활용하고 있다.







