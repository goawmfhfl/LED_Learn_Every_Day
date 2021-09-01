

{
    var foo = function(){};
    // ES6 이전의 모든 함수는 callable 이면서 constructor다.
    console.log(foo()); // undefined
    console.log(new foo()); // foo{}
}
{
    var foo = function(){
        return 1;
    };

    // 일반적인 함수로서 호출
    foo(); // 

    // 생성자 함수로서 호출
    new foo();

    // 메서드로서 호출
    var obj = {foo : foo};
    obj.foo()

}
console.log('----------');
{
    // 프로퍼티 f에 바인딩된 함수는 callable이며 constructor다
    var obj = {
        x:10,
        f: function(){return this.x;}
    }

    // 프로퍼티 f에 바인딩된 함수를 메서드로서 호출
    console.log(obj.f());

    // 프로퍼티 f에 바인딩된 함수를 일반 함수로서 호출
    var bar = obj.f;
    console.log(bar());

    // 프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
    console.log(new obj.f()); // f{}

}

{
    [1,2,3].map(function(item){
        return item * 2
    }); // 2, 4, 6
}
console.log('----------');
{
    const obj = {
        x:1,
        // foo는 메서드다
        foo(){return this.x},
        // bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
        bar: function(){return this.x}
    }
    console.log(obj.foo()); // 1
    console.log(obj.bar()); // 1

    // console.log(new obj.foo()); // TypeError: obj.foo is not a constructor
    console.log(new obj.bar()); // bar{}

    // obj.foo는 contructor가 아닌 ES6 메서드이므로 prototype 프로퍼티가 없다
    console.log(obj.foo.hasOwnProperty('prototype')); // false

    // obj.bar는 contructor인 일반 함수이므로 prototype 프로퍼티가 존재한다
    console.log(obj.bar.hasOwnProperty('prototype')); // true
}

console.log('----------')
{
    const base = {
        name: 'Lee',
        sayHi(){
            return `Hi! ${this.name}`
        }
    };

    const derived = {
        __proto__ : base,
        // sayHi는 ES6의 메서드다. ES6 메서드는 [[HomeObject]]를 갖는다.
        // sayHi의 [[HomeObject]]는 derived.prototype을 가리키고
        // super는 sayHi의 [[HomeObject]]의 프로토타입인 base.prototype을 가리킨다.
        sayHi(){
            return `${super.sayHi()}. how are you doing?`
        }
    };
    console.log(derived.sayHi()); 
}
{
    const multiply = (x,y) => x*y;
    console.log(multiply(2,3)); 
}
{
    // const arrow = (x,y)=>{...}
    // const arrow = x => {...}
}
{
    //concise body
    const power = x => x**2;
    console.log(power(2)); 

    // 위 표현은 다음과 동일하다
    // block body
    // const power = x => {return x ** 2;};
}
{
    const create = (id,content) => ({id,content});
    console.log(create(1,'javascript')); // { id: 1, content: 'javascript' }
}
{
    const sum = (a,b)=>{
        const result = a + b
        return result;
    }
}
{
    const person = (name => ({
        sayHi(){return `Hi? My name is ${name}`}
    }))('Lee');
    console.log(person.sayHi()); // Hi? My name is Lee

    console.log(person);
}
{
    // ES5
    [1,2,3].map(function(v){
        return v * 2
    })

    // ES6
    // [1,2,3].map(v => v*2); // [2,4,6]
}
{
    //const Foo = () => {};
    //new Foo()
}
{
    function normal(a,a){return a+a};
    console.log(normal(1,2)); // 4
    
    // const arrow = (a,a)  => {a + a} // SyntaxError: Duplicate parameter name not allowed in this context
}

// {
//     class Prefixer {
//         constructor(prefix){
//             this.prefix = prefix;
//         }
//         add(arr){
//             console.log(arr);
//             //add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다
//             // 1
//             return arr.map(function(item){
//                 return this.prefix + item; // 2
//                 });
//                 // TypeError: Cannot read property 'prefix' of undefined
//             }
//     }
//     const prefixer = new Prefixer('-webkit-')
//     console.log(prefixer.add(['transition','user-select']));
// }

{
    class Prefixer{
        constructor(prefix){
            this.prefix = prefix
        }
        add(arr){
            return arr.map(item => this.prefix + item)
        }
    }
    const prefixer = new Prefixer('-webkit-')
    console.log(prefixer.add(['transition','user-select']));
    // [ '-webkit-transition', '-webkit-user-select' ]
}
{
    window.x = 1;

    const normal = function(){ return this.x};
    const arrow = () => this.x;

    console.log(normal.call({x:10})); // 10
    console.log(arrow.call({x:10})); // 1
} ㅍ