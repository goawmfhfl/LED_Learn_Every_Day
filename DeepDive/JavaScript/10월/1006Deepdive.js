{
    const circle = {
        // 프로퍼티 객체 고유의 상태 데이터
        radius : 5,
        // 메서드 : 상태 데이터를 참조하고 조작하는 동작
        getDiameter(){
                // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
                // 자신이 속한 객체인 ciecle을 참조할 수 있어야 한다
            return 2 * circle.radius;
        }
    }
    console.log(circle.getDiameter());
}
{
    const circle = {
        radius : 5,
        getDiameter(){
            // this는 메서드를 호출한 객체를 가리킨다.
            return 2 * this.radius;
        }
    };

    console.log(circle.getDiameter()); // 10
}
{
    // this는 어디서든지 참조 가능하다
    // 전역에서 this는 전역 객체 window를 가리킨다
    console.log(this);

    function square(number) {
        // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
        console.log(this);
        return number * number;
    }
    console.log(square(2)); // 4 

    const person = {
        name:'choi',
        getName(){
            //메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
            console.log(this); // { name: 'choi', getName: [Function: getName] }
            return this.name;
        }
    }
    console.log(person.getName()); // choi

    function Person(name) {
        this.name = name;
        // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
        console.log(this); // Person { name: 'choi' }
    }
    const me = new Person('choi') 

}

{
    // this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.

    const foo = function() {
        console.dir(this);
    }

    // 동일한 함수도 다양한 방식으로 호출할 수 있다.

    // 1. 일반 함수 호출
    // foo 함수를 일반적인 방식으로 호출
    // foo 함수 내부의 this는 전역 객체 window를 가리킨다.

    foo();

}
{
        // this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.

        const foo = function() {
            console.dir(this);
        }
    
        // 동일한 함수도 다양한 방식으로 호출할 수 있다.
    
        // 1. 일반 함수 호출
        // foo 함수를 일반적인 방식으로 호출
        // foo 함수 내부의 this는 전역 객체 window를 가리킨다.
    
        foo(); // Window
    
        // 2. 메서드 호출
        // foo 함수를 프로퍼티 값으로 할당하여 호출
        // foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다
        const obj = { foo };
        obj.foo(); // Object
    
        // 3.생성자 함수 호출
        // foo 함수를 new 연산자와 함께 생성자 함수로 호출
        // foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
    
        const me = new foo()
        console.log(me); // foo {}
    
        // 4. function prototype.apply/call/bind 메서드에 의한 간접 호출
        // foo 함수 내부의 this는 인수에 의해 결정된다
        const bar = { name : 'bar' };
    
        foo.call(bar); // Object
        foo.apply(bar); // Object
        foo.bind(bar)(); // Object
    
        // 전달한 bar 객체 리터럴이 this가 된 것을 알 수 있다.
    
}
{
    var value = 1;
    const obj = {
        value: 100,
        foo(){
            console.log("foo's this ", this); // foo's this  {value: 100, foo: ƒ}
            console.log("foo's this.vlaue ",this.value); // foo's this.vlaue  100 
            // 메서드 내에서 정의한 중첩 함수
            function bar() {
                console.log("bar's this ", this); // Window
                console.log("bar's this.vlaue ",this.value); // 1
            };
        bar()
        },
    }
    obj.foo();
}
{
    var value = 1 ;

    const obj = {
        value: 100,
        foo(){
            console.log("foo's this :", this); // obj 객체
            // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
            setTimeout(function(){
                console.log('callback"s this:', this); // window
                console.log('callback"s this.value :', this.value); // 1
                
            },100);
        }
    };
    obj.foo()
}
{
    var value = 1;
    const obj = {
        value : 100,
        foo(){
            // this 바인딩을 변수 that에 할당한다.
            const that = this;

            // 콜백 함수 내부에서 this 대신 that을 참조한다
            setTimeout(function(){
                console.log(that.value); // 100
            },100);
        }
    }
    obj.foo();
}
{
    var value = 1;

    const obj = {
        value : 100,
        foo(){
            setTimeout(() => console.log(this.value),100)
        }
    };
    obj.foo();
}
{


    const person = {
        name:'choi',
        getName(){
            return this.name;
        }
    };

    const anotherPerson = {
    name:'kim'
};
    anotherPerson.getName = person.getName
    console.log(anotherPerson.getName()); // 'kim'

    const getName = person.getName
    console.log(getName());
		// 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
}