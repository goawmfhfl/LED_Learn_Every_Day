var i = 10;
    function foo (){
        var i = 100;

        for(var i = 1; i < 3 ; i++){
            console.log('for문 :',i); // ??
        }
        console.log('함수선언문 :', i) // ??
    }
    foo();
    console.log('전역스코프 :',i) // ??