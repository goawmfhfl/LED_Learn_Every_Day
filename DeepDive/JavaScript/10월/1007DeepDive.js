
{
    /**
     * 주어진 this 바인딩과 인수 리스트 배열을 사용하여 함수를 호출한다
     * @param thisArg - this로 사용할 객체
     * @param argsArray - 함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
     * @param returns 호출된 함수의 반환값
     */
    
    // Function.prototype.apply(thisArg[, argsArray])
    
    /**
     * 주어진 this 바인딩과 ,로 구분된 인수 리스트를 사용하여 함수를 호출한다.
     * @param thisArg - this로 사용할 객체
     * @param arg1,arg2, ... - 함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
     * @param returns 호출된 함수의 반환값
     */
    
    // Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])
}
{
    function getThisBinding(){
        return this;
    }

    const thisArg = {
        a : 1 ,
        b : 2 ,
        c : 3 ,
    };

    console.log(getThisBinding());
    console.log(getThisBinding.apply(thisArg)); // {a: 1, b: 2, c: 3}
    console.log(getThisBinding.call(thisArg)); // {a: 1, b: 2, c: 3}
}
{
    function covertARgsToArray(){
        console.log(arguments);

    // arguments 객체를 배열로 변환
    // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성한다

    const arr = Array.prototype.slice.call(arguments);
    // const arr = Array.prototype.slice.apply(arguments);

    console.log(arr);
    return arr;

    };
    covertARgsToArray(1,2,3)
}
{
    const person = {
        name : 'Lee',
        foo(callback){
				// 1
            setTimeout(callback,100);
        }
    };

    person.foo(function(){
        console.log(`Hi My name is ${this.name}.`); // 2
    })
    // 일반 함수로서 호출된 콜백 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다
    // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.
}
{
    const person = {
        name : 'Lee',
        foo(callback){
            //bind 메서드로 callback 함수 내부의 this 바인딩을 전달
            setTimeout(callback.bind(this),100)
        }
    };

    person.foo(function(){
        console.log(`Hi My name is ${this.name}.`);
    })
}