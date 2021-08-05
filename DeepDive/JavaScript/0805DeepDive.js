// 소스코드의 평가와 실행
{
    var x;
    x = 1
}

// 실행 컨텍스트의 역할
{
    // 전역 변수 선언
    const x = 1;
    const y = 2;

    // 함수 정의
    function foo(a){
        // 지역 변수 선언
        const x = 10;
        const y = 20;

        console.log(a + x + y); // 130
    }

    // 함수 호출
    foo(100);

    // 매서드 호출
}

// 실행 컨텍스트 스택
{
    const x = 1;

    function foo (){
        const y = 2;

        function bar(){
            const z = 3;
            console.log(x + y + z);
        }
        bar()
    }
    foo()
}


