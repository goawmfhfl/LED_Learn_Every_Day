{
    var x = 1;
    const y = 2;

    function foo(a){
        var x = 3;
        const y = 4;

        function bar(b){
            const z = 5;
            console.log((a + b + x + y + z));
        }
        bar(10)
    }
    foo(20)
}

{
    let foo = 1;
    {
        // let const 키워드로 선언한 변수가 호이스팅 되지 않는다면 전역 변수를 참조해야 한다
        // 하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에
        // 참조 에러가 발생한다

        console.log(foo); // 레퍼런트 참조 불가.
        let foo = 2; // 지역변수
    }
}