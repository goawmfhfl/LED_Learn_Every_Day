
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
// 이를 단축 평가라고한다.
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

console.clear()
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
getStringLength('hello')

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
    console.log(length)
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