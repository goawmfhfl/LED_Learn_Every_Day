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

// 익명함수 형태가 소괄호로 묶여진다.
// () 뒤에있는 호출문으로 매개변수를 전달할 수 있다.

// 즉시실행함수에 매개변수 전달하기