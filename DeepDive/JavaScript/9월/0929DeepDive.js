{
    // 무한 이터러블을 생성하는 함수
    const infiniteFibonacci = (function(){
        let[pre,cur] = [0,1]
    
        return{
            [Symbol.iterator](){return this;},
            next(){
                [pre,cur] = [cur, pre + cur];
                // 무한 이터러블이므로 done 프로퍼티를 생략한다
                return { value:cur };
            }
        };
    }());
    // // infiniteFibonacci는 무한 이터러블이다.
    // for(const num of infiniteFibonacci){
    //     if( num > 10000 ) break;
    //     console.log(num); // 1 ~ 6765
    // }

}

{
    // 무한 이터러블을 생성하는 제너레이터 함수
    const infiniteFibonacci = (function*(){
        let[pre,cur] = [0,1]
        while (true) {
            [pre,cur] = [cur,pre+cur]
            yield cur;
        }
    }())
    
    // // infiniteFibonacci는 무한 이터러블이다.
    // for(const num of infiniteFibonacci){
    //     if( num > 10000 ) break;
    //     console.log(num); // 1 ~ 6765
    // }
}

{

    // async 함수 선언문 
    async function foo(n) { return n; }
    foo(1).then(v => console.log(v)); //1

    // async 함수 표현식
    const bar = async function (n) { return n; }
    bar(2).then(v => console.log(v))

    // async 화살표 함수
    const baz = async n => n;
    baz(3).then(v => console.log(v))

    // async 메서드
    const obj = {
        async foo(n){return n;}
    };
    obj.foo(4).then(v => console.log(v));

    // async 클래스 메서드
    class MyClass {
        async bar(n) {return n;}
    }
    const myClass = new MyClass;
    myClass.bar(5).then(v => console.log(v)); 


}

{
    async function foo() {
        const a = await new Promise(resolve => setTimeout(() => resolve(1),1000))
        const b = await new Promise(resolve => setTimeout(() => resolve(2),2000))
        const c = await new Promise(resolve => setTimeout(() => resolve(3),3000))
        console.log([a,b,c]); // [1,2,3]
    }
    foo() // [Done] exited with code=0 in 6.127 seconds
}
{
    async function foo() {
        const res = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1),1000)),
        new Promise(resolve => setTimeout(() => resolve(2),2000)),
        new Promise(resolve => setTimeout(() => resolve(3),3000))
        ]);
        console.log(res); // [ 1, 2, 3 ]
        // [Done] exited with code=0 in 3.055 seconds
    };
    foo();
}
{
    async function bar(n) {
        const a = await new Promise(resolve => setTimeout(() => resolve(n),1000))
        const b = await new Promise(resolve => setTimeout(() => resolve(a+1),2000))
        const c = await new Promise(resolve => setTimeout(() => resolve(b+1),3000))
        console.log([a,b,c]); // [1,2,3]
    }
    bar(1) // [Done] exited with code=0 in 6.127 seconds
}
{
    try{
        setTimeout(()=> {throw new Error('Error!');}, 1000);
    }catch(e){
        console.error('캐치한 에러',e);
    }
}