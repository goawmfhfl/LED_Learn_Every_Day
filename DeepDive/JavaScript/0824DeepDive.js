
{
// 함수는 객체다
function foo(){}

// 함수는 객체이므로 프로퍼ㅣ를 소유할 수 있다.
foo.prop = 10;

//함수는 객체이므로 메서드를 소유할 수 있다
foo.method = function(){
    console.log(this.prop);
}
foo.method() // 10
}

{
    function foo(){}

    // 일반 함수로서 호출: [[call]]이 호출 된다
    foo();

    // 생성자 함수로서 호출: [[construct]]가 호출된다
    new foo();
}

{
    // 일반 함수 정의: 함수 선언문, 함수 표현식
    function foo (){}
    const bar = function(){};
    // 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
    const baz = {
        x:function(){}
    };
    //일반 함수로 정의된 함수만이 constructor다
    console.log(new foo());  // -> foo{}
    console.log(new bar());  // -> bar{}
    
}
{
    // 화살표 함수 정의
    // const arrow = () => {};
    // new arrow(); // TypeError: arrow is not a constructor

    // // 메서드 정의 : ES6의 메서드 축약 표현만 메서드로 인정한다
    // const obj = {
    //     x(){}
    // };
    // new obj.x() // TypeError : obj.x is not a constructor
}
{
    class Base{
        constructor(name){
            this.name = name;
        }
        sayHi(){
            return `Hi ${this.name}`
        }
    }
    class Derived extends Base{
        // 화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다
        sayHi = () => `${super.sayHi()} how are you doing?`
    }

    const derived = new Derived('Lee');
    console.log(derived.sayHi());
}
{
    (function(){
        // 화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다
        const foo = () => console.log(arguments);
        // [Arguments] { '0': 1, '1': 2 }
        foo(3,4)
    }(1,2))

    // const foo = () => console.log(arguments);
    // foo(1,2) // arguments is not defined
}
{
    function foo(param, ...rest){
        //매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
        console.log(param) // 1 
        console.log(rest); // [ 2, 3, 4, 5 ]
    }
    foo(1,2,3,4,5)

    function bar(param1,param2,...rest){
        //매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
        console.log(param1) // 1 
        console.log(param2) // 2
        console.log(rest);  // [ 3, 4, 5 ]
    }
    bar(1,2,3,4,5)
}
{
    // 매개변수의 개수를 사전에 알 수 없는 가변 인자 함수
    function sum(){
        //가변 인자 함수는 arguments 객체를 통해 인수를 전달받는다
        console.log(arguments);
        //[Arguments] { '0': 1, '1': 2 }
    }
    sum(1,2)
}
{
    function sum(){
        //유사 배열 객체인 arguments 객체를 배열로 변환한다
        var array = Array.prototype.slice.call(arguments);
        return array.reduce((pre,cur)=> pre+cur,0)
    }
    console.log('[[call]]',sum(1,2,3,4,5));
}
{
    function sum(...args){
        //Rest 파라미터 args에는 배열 [1,2,3,4,5]가 할당된다.
        return args.reduce((pre,cur)=> pre + cur, 0)
    }
    console.log('[[call]]',sum(1,2,3,4,5));
}
{
    function sum(x,y){
        return x+y;
    }
    console.log(sum(1)); // NaN
}
{
    function sum(x=0, y=0){
        return x+y
    }
    console.log(sum(1,2)); // 3
    console.log(sum(1)); // 1
}
{
    // 선형 검색을 통해 배열에 특정 요소가 존재하는지 확인한다
    // 배열에 특정 요소가 존재하면 특정 요소의 인덱스를 반환하고, 존재하지 않으면 -1을 반환합니다.

    function linearSearch(array,target){
        const length = array.length;

        for(let i = 0; i<length; i++){
            if(array[i] === target) return i;
        }
        return -1;
    }
    console.log(linearSearch([1,2,3,4,5,6],3)); // 2
    console.log(linearSearch([1,2,3,4,5,6],0)); // -1
}
{
    console.log(Object.getOwnPropertyDescriptors([1,2,3]));
}
{
    const arr = [
        'string',
        10,
        true,
        null,
        undefined,
        NaN,
        Infinity,
        [],
        {},
        function(){}
    ];

}