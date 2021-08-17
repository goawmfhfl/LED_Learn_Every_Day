{
    function Person(name,age){
        this.name = name; // public
        let _age = age; // private
    
        //인스턴스 메서드
    
        this.sayHi = function(){
            console.log(`Hi My name is ${this.name}. I am ${_age}.`);
        };
    }
    
    const me = new Person('Lee',20);
    me.sayHi(); // Hi My name is Lee. I am 20.
    console.log(me.name); // Lee
    console.log(me._age); // undefined
    
    const you = new Person('kim',30);
    you.sayHi(); // Hi My name is kim. I am 30.
    console.log(you.name); // kim
    console.log(you._age); // undefined
}

{
    function Person(name,age){
        this.name = name; // public
        let _age = age; // private
    }
    Person.prototype.sayHi = function(){
        // console.log(`Hi! My name is ${this.name}. I am${_age}`);
    }
    
    // const me = new Person('Lee',20);
    // me.sayHi(); // Hi My name is Lee. I am 20.
}
console.log("----------");
{
    const Person =(function(){
        let _age = 0; // private

        // 생성자 함수
        function Person(name, age){
            this.name = name
            _age = age;
        }

        Person.prototype.sayHi = function(){
            console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
        }
        return Person;
    }());

    const me = new Person('Lee',20);
    me.sayHi(); // Hi My name is Lee. I am 20.
    console.log(me.name); // Lee
    console.log(me._age); // undefined
    
    const you = new Person('kim',30);
    you.sayHi(); // Hi My name is kim. I am 30.
    console.log(you.name); // kim
    console.log(you._age); // undefined
}

console.log("----------");

{
    var Person = (function (){
        //생성자 함수
        function Person(name){
            this.name = name;
        }

        // 프로토타입 메서드
        Person.prototype.sayHi = function(){
            console.log(`Hi! My name is ` + this.name);
        };

        return Person;
    }())

    // 인스턴스 생성
    var me = new Person('Lee');
    me.sayHi(); // Hi my name is Lee

}

console.log("----------");

{
    class Person{
        // 생성자
        constructor(name){
            // 인스턴스 생성 및 초기화
            this.name = name; // name 프로퍼티는 public 하다
        }

        // 프로토타입 메서드
        sayHi(){
            console.log(`Hi! My name is ${this.name}`);
        }

        // 정적 메서드
        static sayHello(){
            console.log('Hello!');
        }
    }
    // 인스턴스 생성
    const me = new Person('Lee')
    // 인스턴스의 프로퍼티 참조
    console.log(me.name); // Lee
    // 프로토타입 메서드 호출
    me.sayHi(); // my name is Lee
    // 정적 메서드 호출
    Person.sayHello() // Hello!
}

console.log("----------");

{
class Person{}
console.log(typeof Person);
}

console.log("----------");

{
    const Person = '';
    {
        // 호이스팅이 발생하지 않는다면 ''이 출력되어야 한다

        // console.log(Person);
        // ReferenceError: Cannot access 'Person' before initialization

        // 클래스 선언문
        class Person{}
    }
}

console.log("----------");

{
    class Person{}

    // 인스턴스 생성
    const me = new Person();
    console.log(me); // Person {}
}
{
    class Person{}
    // const me = Person()
    // console.log(me);
}

console.log("----------");

{
    // const Person = class MyClass{};
    // // 함수 표현식과 마찬가지로 클래스를 가리키는 식별자로 인스턴스를 생성해야 한다

    // const me = new Person();
    // // 클래스 이름 MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자다.
    // console.log(MyClass); // ReferenceError: MyClass is not defined
    
    // const you = new MyClass() // ReferenceError: MyClass is not defined
}
{
    class Person {
        //생성자
        constructor(name){
            //인스턴스 생성 및 초기화
            this.name = name;
        }
    }
    console.log(typeof Person); // function
    console.log(Person); // [class Person]

    const me = new Person('Lee')
    console.log(me);
}
{
    class Person {
        constructor(name,address){
            this.name = name;
            this.address = address
        }
    }
    const me = new Person('choi','seoul');
    console.log(me); //  Person { name: 'Lee', address: 'seoul' }
    
}
console.log("----------");
{
    class Person {
        constructor(name){
            this.name = name;

            return {};
        }
    }
    const me = new Person('choi');
    console.log(me); // {}

}
console.log("----------");
{
    class Person {
        constructor(name){
            this.name = name;

            return 100;
        }
    }
    const me = new Person('choi');
    console.log(me); // Person { name: 'choi' }
}
console.log("----------");
{
    function Person(name){
        this.name = name;
    }
    // 프로토타입 메서드
    Person.prototype.sayHi = function(){
        console.log(`Hi My name is ${this.name}`);
    };
    const me = new Person('Lee');
    me.sayHi() // Hi My name is Lee
}
console.log("----------");
{
    class Person{
        constructor(name){
            //인스턴스 생성 및 초기화
            this.name = name;
        }
        // 프로토타입 메서드
        sayHi(){
            console.log(`Hi My name is ${this.name}`);
        }
    }
    const me = new Person('Lee');
    me.sayHi();
}

console.log("----------");
{
    function Person(name){
        this.name = name;
    }

    // 정적 메서드

    Person.sayHi = function(){
        console.log('Hi!');
    }

    // 정적 메서드 호출
    Person.sayHi(); // Hi !
    
}
console.log("----------");
{
    class Person{
        //생성자
        constructor(name){
            //인스턴스 생성 및 초기화
            this.name = name;
        }
        static sayHi(){
            console.log('Hi');
        }
    }
    Person.sayHi()
}

