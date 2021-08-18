{
    function test1(){
        console.log("함수 1 실행됩니다.");
    }
    
    function test2(){
        console.log("함수 2 실행됩니다.");
    }
    
    (function(a,b){
        console.log(a,b);
        test1()
        test2()
    })(1,['홍길동','이순신'])
}
// Deep Dive

console.log("-----------");

{
    (function(){
        var a = 3;
        var b = 5;
        return a * b;
    }())
}
{
    // (function foo(){
    //     var a = 3;
    //     var b = 5;
    //     return a * b;
    // }())

    // foo() // ReferenceError: foo is not defined
}

{
    console.log(typeof (function f(){})); // function
    console.log(typeof (function (){})); // function
}
console.log("-----------");
{
    // 첫 번째 방법이 가장 일반적이다
    // (function (){
        //...
    // }())

    // 두 번째 방법
    // (function (){

    // })();
}

// 일반 함수 처럼 값을 반환할 수 있고 인수를 전달할 수도 있다.
{
    var res = (function(){
        var a = 3
        var b = 5
        return a * b ;
    }())
    
    console.log("IIFE :",res);

    res = (function (a,b){
        return a * b
    }(3,5))

    console.log('parameter :',res);
}
console.log("-----------");
{
    class Person{
        //생성자
        constructor(name){
            this.name = name;
        }
        sayHi(){
            console.log(`Hi! My name is ${this.name}`);
        }
    }
    const me = new Person('Lee');
    me.sayHi()

    console.log(Object.getPrototypeOf(me) === Person.prototype); // true
    console.log(me instanceof Person); // true

    console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true
    console.log(me instanceof Object); // true

    console.log(me.constructor === Person); // true

}

// 정적 메서드와 프로토타입 메서드의 차이
console.log("-----------");

{
    class Squere{
        static area(width,height){
            return width * height
        }
    }
    console.log(Squere.area(10,10));
}

console.log("-----------");

{
    class Squere{
        constructor(width,height){
            this.width = width
            this.height = height
        }

        //프로토타입 메서드
        area(){
            return this.width * this.height
        }
    }
    const square = new Squere(10,10)
    console.log(square.area());

}
console.log("-----------");
{
    class Person{
        //생성자
        constructor(name){
            // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
            console.log(this); // Person{}
            console.log(Object.getPrototypeOf(this) === Person.prototype); // true

            //2. this에 바인딩되어 있는 인스턴스를 초기화한다.
            this.name = name;
            
            //3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
            // return
        }
    }
    const person = new Person('choi')
    console.log(person);
}

console.log("-----------");

{
    class Person{
        constructor(name){
            //인스턴스 프로퍼티 
            this.name = name; // name 프로퍼티는 public 하다
        }
    }
    const me = new Person('CHOI')
    // name은 public 하다
    console.log(me.name); // CHOI

}

console.log("-----------");

{
    const person = {
        // 데이터 프로퍼티
        firstName : 'Jaeyoung',
        lastName : 'Choi',

        //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
        // getter 함수
        get fullName(){
            return `${this.firstName} ${this.lastName}`
        },

        set fullName(name){
            [this.firstName, this.lastName] = name.split(' ');
        }
    };
    // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
    console.log(`${person.firstName} ${person.lastName}`);

    // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
    // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
    person.fullName = 'Chul Soo';
    console.log(person); // { firstName: 'Chul', lastName: 'Soo', fullName: [Getter/Setter] }

    // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
    // 접근자 프로퍼티 fullName에 접근하면 getter함수가 호출된다.
    console.log(person.fullName);  // Chul Soo

    // fullName은 접근자 프로퍼티다
    // 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다
    console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));
    // {
    //     get: [Function: get fullName],
    //     set: [Function: set fullName],
    //     enumerable: true,
    //     configurable: true
    //   }
}

console.log("-----------");

{
    class person {
        constructor(firstName,lastName){
        this.firstName = 'Jaeyoung',
        this.lastName = 'Choi'
        }

        //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
        // getter 함수

        get fullName(){
            return `${this.firstName} ${this.lastName}`
        }
        set fullName(name){
            [this.firstName, this.lastName] = name.split(' ');
        }
    };
    const me = new person('Ungmo', 'Lee');
    // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
    console.log(`${me.firstName} ${me.lastName}`);

    // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
    // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
    person.fullName = 'Chul Soo';
    console.log(me); // { firstName: 'Chul', lastName: 'Soo', fullName: [Getter/Setter] }

    // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
    // 접근자 프로퍼티 fullName에 접근하면 getter함수가 호출된다.
    console.log(me.fullName);  // Chul Soo

    // fullName은 접근자 프로퍼티다
    // 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다
    console.log(Object.getOwnPropertyDescriptor(person.prototype, 'fullName'));
    // {
    //     get: [Function: get fullName],
    //     set: [Function: set fullName],
    //     enumerable: false,
    //     configurable: true
    //   }
}

console.log("-----------");

{
    class Person{
        //클래스 필드 정의
        name = 'Lee'
    }
    const me = new Person('Lee')
    console.log(me); // Person { name: 'Lee' }
}
console.log("-----------");
{
    class Person{
        // 클래스 필드를 초기화하지 않으면 undefined를 갖는다
        name; //  undefined
    }

    const me = new Person()
    console.log(me);
}

console.log("-----------");

{
    class Person{
        name = 'Lee';

        getName = function(){
            return this.name;
        }
        // 화살표 함수로 정의할 수도 있다
        // getName = () => this.name
    }
    const me = new Person
    console.log(me); // Person { name: 'Lee', getName: [Function: getName] }
    console.log(me.getName()); // Lee

}

console.log("-----------");

{
    class Person{
        #name = '';
        constructor(name){
            //private 필드 참조
            this.name = name;
        }
    }
        // 화살표 함수로 정의할 수도 있다
        // getName = () => this.name
    const me = new Person('Choi')
    // console.log(me.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
}

console.log("-----------");

{
    class Person{
        #name = '';
        constructor(name){
            this.#name = name;
        }
        // name은 접근자 프로퍼티다
        get name(){
            return this.#name.trim();
        }
    }
        // 화살표 함수로 정의할 수도 있다
        // getName = () => this.name
    const me = new Person('Choi')
    console.log(me.name); 
}

console.log("-----------");

{
    class MyMath{
        // static public 필드 정의
        static PI = 22/7;
        // static private 필드 정의
        static #num = 10;

        // static 메서드
        static increment(){
            return ++MyMath.#num;
        }
    }
    console.log(MyMath.PI); // 3.142857142857143
    console.log(MyMath.increment()); // 11
}