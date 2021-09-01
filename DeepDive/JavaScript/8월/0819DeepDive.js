{
    class Squere{
        //정적 메서드
        static area(width, height){
            return width * height
        }
    }
    console.log(Squere.area(10,10)); // 100
}
// 프로토타입 메서드
{
    class Squere{
        constructor(width,height){
            this.width = width;
            this.height = height;
        }

        area(){
            return this.width * this.height
        }
    }
    const squere = new Squere(10,10);
    console.log(squere.area());
}
console.log('-----');
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
    console.log(me.name); // choi
    // console.log(me.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
}
// Animal
console.log('-----');
{
    class Animal{
        constructor(age, weight){
            this.age = age;
            this.weight = weight;
        }

        eat(){ return 'eat'}
        move(){ return 'move'}
    }   

    class Bird extends Animal{
        fly(){return 'fly';}
    }

    const bird = new Bird(1,5)

    console.log(bird); // Bird { age: 1, weight: 5 }
    console.log(bird instanceof Bird); // true
    console.log(bird instanceof Animal); // true

    console.log(bird.eat()); // eat
    console.log(bird.move()); // move
    console.log(bird.fly()); // fly
}
console.log('-----');
{
    // 수퍼(베이스/부모)클래스
    class Base{}
    // 서브(파생/자식)클래스
    class Derived extends Base{}
}
console.log('----------');
{
    // 생성자 함수
    function Base(a){
        this.a = a;
    }
    class Derived extends Base {}

    const derived = new Derived(1)
    console.log(derived); // Derived { a: 1 } 
}
console.log('----------');
{
    function Base1(){}
    class Base2{}
    let condition = true;

    //조건에 따라 동적으로 상속 대상을 결정하는 서브클래스
    class Derived extends (condition ? Base1 : Base2){}
    const derived = new Derived();

    console.log(derived); // Derived {}
    console.log(derived instanceof Base1); // true
    console.log(derived instanceof Base2); // false
}
console.log('----------');
{
    class Base{
        constructor(){}
    }
    class Derived extends Base{
        constructor(...args){super(...args);}
    }

    const derived = new Derived();
    console.log(derived); // Derived {}
}

{
    //수퍼클래스
    class Base {
        constructor(a,b){
            this.a = a;
            this.b = b;
        }
    }
    // 서브 클래스
    class Derived extends Base{
        // 다음과 같이 암묵적으로 constructor가 정의된다.
        // constructor(...args){super(...args)}
    }
    const derived = new Derived(1,2);
    console.log(derived); // Derived { a: 1, b: 2 }
}