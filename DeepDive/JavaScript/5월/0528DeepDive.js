console.log('5월 28일 학습 내용입니다.')

// 17장 생성자 함수에 의한 객체 생성
// 17-1 Object 생성자 함수

{
    const person = new Object();

    person.name = 'choi';
    person.sayHello = function(){
        console.log(`Hi My name is ${this.name}`)
    }
    console.log(person)
    person.sayHello()

    // 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여
    // 객체를 완성할 수 있다.
}

// 생성자 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다
// 생성자 함수에 의해 생성된 객체를 인스턴스라 한다.

// 17.2 생성자 함수
// 객체 리터럴에 의한 객체 생성 방식의 문제점
// 하나의 객체만 생성한다. 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우
// 매번 같은 프로퍼티를 기술해야 하기 떄문에 비효율적이다.
{
    const circle1 ={
        radius: 5,
        getDiameter(){
            return 2 * this.radius;
        }
    };
    console.log(circle1.getDiameter());

    const circle2 ={
        radius: 10,
        getDiameter(){
            return 2 * this.radius;
        }
    }
    console.log(circle2.getDiameter());
    // 객체 리터럴에 의해 객체를 생성하는 경우 프로퍼티 구조가 동일함에도 불구하고 매번 같은 프로퍼티와
    // 메서드를 기술해야 한다. 앞의 예제처럼 객체가 한두 개라면 넘어갈 수도 있겠지만 만약 수십 개의 객체를
    // 생서앻야 한다면 문제가 크다.

    // radius에 입력값만 다르게 했을 뿐인데 같은 함수를 동일하게 불러 내야 하는 단점이 있음
} 

//17.2.2 생성자 함수에 의한 객체 생성 방식의 장점


{
    function Cirle(radius){
        this.radius = radius;
        this.getDiameter = function(){
            return 2 * this.radius;
        }
    }
    const circle1 = new Cirle(5)
    const circle2 = new Cirle(10)
    const circle3 = Cirle(15)
    console.log(circle1) // Cirle {radius: 5, getDiameter: ƒ}
    console.log(circle1.getDiameter()) // 10
    console.log(circle2.getDiameter()) // 20

// this는 자기 참조 변수다.
// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
// 생성자 함수를 정의하고 new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.

    console.log(circle3) // undefined
    // 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
    console.log(radius) // 15
}

//17.2.3 생성자 함수의 인스턴스 생성 과정
// 생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 탬플릿 으로서 동작하여
// 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화 ( 인스턴스 프로퍼티 추가 및 초기값 할당) 하는 것이다
// 자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.

// 암묵적으로 빈 객체가 생성된다. 이 빈 객체가 바로 생성자 함수가 생성한 인스턴스다.
// 그리고 암묵적을 생성된 빈 객체, 즉 인스턴스는 this에 바인딩된다.
// 바인딩이란 식별자와 값을 연결하는 과정을 의미한다.
// this 바인딩은 this가 가리킬 객체를 바인딩하는 것이다.


// 1. 인스턴스 생성과 this 바인딩
// 2. 인스턴스 초기화
{
    function Circle(radius){
        // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
        console.log(this); // Circle{}

        // 2. this에 바인딩되어 있는 인스턴스를 초기화시킨다
        this.radius = radius;
        this.getDiameter = function(){
            return 2 * this.radius;
        }
        // 3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환한다.
    }

    const CirCle = new Circle(1) 
    console.log(CirCle) 

}
// 3. 인스턴스 반환
{
    function Circle(radius){
        console.log(this);

        this.radius = radius;
        this.getDiameter = function(){
            return 2 * this.radius;
        }
        // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
        return{}

        // 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다
        // return{100}
    }

    const CirCle = new Circle(1) 
    console.log(CirCle)// {}
}

// 17.2.4 내부메서드 [[call]] [[construct]]
// 함수는 객체이므로 일반 객체와 동일하게 동작할 수 있다.
// 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드를 모두 가지고 있기 때문이다

// 함수는 객체이지만 일반 객체와는 다르다
// 일반 객체는 호출할 수 없지만 , 함수는 호출할 수 있다.

// 함수가 일반 함수로서 호출 되면 함수 객체의 내부 메서드 [[call]]이 호출되고
// new 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 [[construct]]가 호출된다.

{
    function foo (){}
    // 일반적인 함수로서 호출 : [[call]]이 호출된다
    foo()
    // 생성자 함수로서 호출 [[construct]]가 호출된다.
    new foo()
}

// 모든 함수 객체는 내부 메서드 call을 갖고 있으므로 호출할 수 있다. 하지만 모든 함수 객체가
// construct를 갖는 것은 아니다
// 다시 말해, 함수 객체는 constructor일 수도 있고 non - constructor일 수도 있다.


// 17.2.5 non constructor 와 constructor의 구분

// constructor 함수 선언문, 함수 표현식 , 클래스
// non constructor 매서드(es6 매서드 축약 표현) , 화살표 함수


// 17.2.6 new 연산자 
// 일반 함수와 생성자 함수에 특별한 형식적 차이는 없다
// new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다
// call이 호출되는 것 이 아니라 consturct가 호출된다.
// 단 non이 아닌 consturct이어야 한다.

{
    // 생성자 함수로서 정의하지 않은 일반 함수

    function add (x,y){
        return x + y
    }

    // 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
    let inst = new add()

    // 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
    console.log(inst); // add {}

    // 객체를 반환하는 일반 함수
    function createUser(name,role){
        return[name,role]
    }
    // 일반 함수를 new 연산자와 함께 호출
    inst = new createUser('choi','jaeyoung')
    // 함수가 생성된 객체를 반환한다.
    console.log(inst) // (2) ["choi", "jaeyoung"]
}
// 반대로 new 연산자 없이 생성자 함수를 호출하면 일반 함수로 호출된다
// 즉 [[constructor]] 이 아닌 [[call]]이 호출된다
{
    function Circle(radius){
        this.radius = radius;
        this.getDiameter = function(){
            return 2 * this.radius;
        }
    }
// new 연산자 없이 생성자 함수를 호출하면 일반 함수로서 호출된다.
    const CirCle = Circle(5) 
    console.log(CirCle)// undefined
    console.log(radius) // 5
    console.log(getDiameter()) //10
}

//246쪽 부분이 이해가안간다. 
// circle 함수를 일반적인 함수로서 호출하면 함수 내부의 this는 전역 객체 window를 가리킨다
// 위 예제의 circle 함수는 일반 함수로서 호출되었기 떄문에 circle 함수로 내부의 this는
// 전역객체 window를 가리킨다.
// 따라서 radius 프로퍼티와 getDiameter 메서드는 전역 객체의 프로퍼티와 메서드가 된다.

// 17.2.7 new.target
// new target은 this와 유사하게 constructor인 모든 함수 내부에서 암묵적인 지역 변수와
// 같이 사용되며 메타 프로퍼티라고 부른다.

// new연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다
// new 연산자없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined이다

{
    function Circle(radius){
        //이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다
        if(!new.target){
            // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다
            return new Circle(radius);
        }
        this.radius = radius;
        this.getDiameter = function(){
            return 2 * this.radius;
        }
    }
    const circle = Circle(5);
    console.log(circle.getDiameter())
}

// new target을 사용할 수 없을 경우 247쪽을 참고하자
// 스코프 세이프 생성자 패턴


// 18장 함수와 일급 객체
{
    // 1. 함수는 무명의 리터럴로 생성할 수 있다
    // 2. 함수는 변수에 저장할 수 있다
    // 런타임(할당단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다
    const increase = function(num){
        return ++num
    };

    const decrease = function(num){
        return --num
    };

    //2 함수는 객체에 저장할 수 있다
    const predicates = {increase, decrease};

    //3. 함수의 매개변수에 전달할 수 있다.
    //4. 함수의 반환값으로 사용할 수 있다.
    function makeCounter(perdicate){
        let num = 0
        return function(){
            num = perdicate(num)
            return num;
        }
    }

    // 3. 함수는 매개변수에 함수를 전달할 수 있다.
    const increaser = makeCounter(predicates.increase)
    console.log(increaser()) // 1
    console.log(increaser()) // 2

    const decreaser = makeCounter(predicates.decrease)
    console.log(decreaser()) // -1
    console.log(decreaser()) // -2

    // 순서를 이해해보자. 
    // const predicates = {increase, decrease}; 에는 현재 이미 함수가 들어가있다
    // ++num 인자가 perdicate라는 매개변수가 된다.
    // 0 = ++num(0)
    // num = perdicate(num) 이부분이 이해가 너무안간다.
    // 무튼 이것의 결과로 num의 값이 1로 변환된 것은 알겠다.


}

// 일급 객체로서 함수가 가지는 가장큰 특징은 일반 객체와 같이함수의 매개변수에 전달할 수 있으며,
// 함수의 반환값으로 사용할 수도 있다는 것이다. 이는 함수형 프로그래밍을 가능케 하는 자바스크립트의
// 장점 중 하나다.

// 함수는 객체이지만 일반 객체와는 차이가 있다. 일반 객체는 호출할 수 없지만
// 함수 객체는 호출할 수 있다. 

// 18.2 함수 객체의 프로퍼티


// __proto__는 접근자 프로퍼티이며, 함수 객체 고유의 프로퍼티가 아니라 Objec.prototype 객체의
// 프로퍼티를 상속받은 것을 알 수 있다. Object.prototype 객체의 프로퍼티는 모든 객체가
// 상속받아 사용할 수 있다.
// 즉 Object.Prototype 객체의 __proto__ 접근자 프로퍼티는 모든 객체가 사용할 수 있다.


//18.2.1 arguments 프로퍼티
// arguments객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한
// 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다

// 함수를 저의할 때 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급된다.
// 즉, 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화된
// 이후 인수가 할당된다.

// 유사 배열 객체란 length 프로퍼티를 가진 객체로 for 문으로 순회할 수 있는 객체를 말한다.


//18.2.5 __proto__ 접근자 프로퍼티
// 모든 객체는 [[prototype]]이라는 내부 슬롯을 갖는다.
// 객체 지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.
// __proto__ 프로퍼티는 [[Prototype]]내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티
// 간접적인 접근 방법을 제공한다.

// 19. 프로토타입
// 19.1 객체지향 프로그래밍.
// 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 말한다.
// 실체는 특징이나 성질을 나타내는 속성을 가지고 있고, 이를 통해 실체를 인식하거나 구별할 수 있다.
// 예를 들어 사람은 이름 주소 성별 나이 신장 성격 등 다양한 속성을 갖는다.

// 프로그래밍에 접목시켜 생각해보자
// 나는 이름과 주소라는 속성에만 관심이 있다.
// 필요한 속성만 간추려 내어 표현하는 것을 추상화라고한다.

{
    const person = {
        name : 'choi',
        address : 'seoul'
    };
    console.log(person) // {name: "choi", address: "seoul"}
}

// 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라 한다.

