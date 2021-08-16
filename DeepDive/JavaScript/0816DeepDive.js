// 카운트 상태 변수
{
    let num = 0 ;
    
    // 카운트 상태 변경 함수
    const increase = function(){
        return ++num;
    };
    console.log(increase());
    console.log(`num: ${num}`);
    console.log(increase());
    console.log(`num: ${num}`);
    console.log(increase());
    console.log(`num: ${num}`);
}
console.log("------");
{
    const increase = function(){
        //카운트 상태 변수
        let num = 0;
        // 클로저
        return ++num;
    }

    console.log(increase()); // 1
    console.log(increase()); // 1
    console.log(increase()); // 1
}
console.log("------");
{
    const increase = (function(){
        // 카운트 상태 변수
        let num = 0;
        // 클로저
        return function(){
            return ++num;
        };
    }())
    console.log(increase()); 
    console.log(increase()); 
    console.log(increase()); 
}

console.log("------");

{
    const counter = (function(){
        // 카운트 상태 변수
        let num = 0;

        //클로저인 메서드를 갖는 객체를 반화한다
        //객체 리터럴은 스코프를 만들지 않는다.
        // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
        return {
            // num:0, // 프로퍼티는 public하므로 은닉되지 않는다.
            increase(){
                return ++num;
            },
            decrease(){
                return num > 0 ? --num : 0;
            }
        };
    }())
    console.log(`increase${counter.increase()}`) // 1
    console.log(`increase${counter.increase()}`) // 2
    console.log(`decrease${counter.decrease()}`) // 1
    console.log(`decrease${counter.decrease()}`) // 0

}
console.log("------");
{
    const Counter = (function(){
        //1. 카운트 상태 변수
        let num = 0;
        function Counter(){
            // this.num = 0 // 2. 프로퍼티는 public하므로 은닉되지 않는다.
        }
        Counter.prototype.increase = function(){
            return ++num;
        };
        Counter.prototype.decrease = function(){
            return num > 0 ? --num : 0;
        };
        return Counter;
    }())
    const counter = new Counter()
    console.log(`counter ${counter.increase()}`); // 1
    console.log(`counter ${counter.increase()}`); // 2

    console.log(`counter ${counter.decrease()}`); // 1
    console.log(`counter ${counter.decrease()}`); // 0
}
console.log("------");
{
    //함수를 인수로 전달하고 함수를 반환하는 고차 함수
    // 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다
    function makeCounter(predicate){
        // 카운트 상태를 유지하기 위한 자유 변수
        let counter = 0;

        // 클로저를 반환
        return function(){
            // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
            counter = predicate(counter);
            return counter;
        };
    }
    function increase(n){
        return ++n
    }
    function decrease(n){
        return --n;
    }

    //함수로 함수를 생성한다
    // makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다
    const increaser = makeCounter(increase); // 1
    console.log(`increaser : ${increaser()}`);
    console.log(`increaser : ${increaser()}`);

    // increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 떄문에 카운터 상태가 연동하지 않는다
    const decreaser = makeCounter(decrease);
    console.log(`decreaser : ${decreaser()}`);
    console.log(`decreaser : ${decreaser()}`);
}

console.log("------");

{

    // 함수를 반환하는 고차 함수
    // 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다
    const counter = (function (){
        let counter = 0;
        return function (predicate){
            counter = predicate(counter);
            return counter
        };
    }());
    // 보조 함수
    function increase(n){
        return ++n
    }
    // 보조 함수
    function decrease(n){
        return --n;
    }
    // 보조 함수를 전달하여 호출 
    console.log(counter(increase)); // 1
    console.log(counter(increase)); // 2

    // 자유 변수를 공유한다
    console.log(counter(decrease)); // 1 
    console.log(counter(decrease)); // 0
}