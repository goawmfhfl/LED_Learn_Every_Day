// 함수 생성 시점과 함수 호이스팅

{
    // console.log(add); // [Function: add]
    // console.log(sub); // undefined

    // console.log(add(2,5)); // 7
    // console.log(sub(2,5)); // sub is not a function

    // 함수 선언문

    function add(x,y){
        return x + y
    }

    // 함수 표현식

    var sub = function(x,y){
        return x - y
    }
}
{
    function Circle(radius){
        //인스턴스 초기화
        this.radius = radius;
        this.getDiameter = function(){
            return 2 * this.radius;
        };
    }
    // 인스턴스 생성
    const circle1 = new Circle(5)// 반지름이 5인 Circle 객체를 생성
}
{
    function Person(name){
        this.name = name;
    }
    const me = new Person('Lee')
    console.log(me.constructor === Person);
}
{
    let Person = '';
    {
        // 호이스팅이 발생하지 않는다면 ''이 출력되어야 한다
        console.log(Person);
        // ReferenceError: Cannot access 'Person' before initialization
        // 변수 선언문
        // let Person ;
    }
}
{
    class Person {
        constructor(name){
            //인스턴스 생성 및 초기화
            this.name = name;
        }
    }
const me = new Person('Choi')
console.log(me);
}

{
    function Person(name){
        this.name = name;

    }
    Person.prototype.sayHi = function(){
        console.log(`Hi! My name is ` + this.name);
    }
    
    Person.sayHello = function(){
        console.log('Hello!');
    }

    const me = new Person('choi') // Person { name: 'Choi' }
    console.log(me.name); // choi
    me.sayHi() // Hi! My name is choi
    Person.sayHello() // Hello!
}