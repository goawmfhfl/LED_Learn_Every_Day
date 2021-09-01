// 함수의 내부에서 정의된 중첩 함수인 경우
{
    const x =1;
    function outerFunc(){
        const x =10;
        function innerFunc(){
            console.log(x);
        }
        innerFunc()
    }
    outerFunc()
}

// 함수의 내부에서 정의된 중첩 함수가 아닌 경우
{
    const x = 1;

    function outerFunc(){
        const x = 10;
        innerFunc()
    }

    function innerFunc(){
        console.log(x); // 1
    }
    outerFunc();
}


// 정적 스코프, 렉시컬 스코프
{

const x = 1

function foo(){
    const x = 10;
    bar();
}

function bar(){
    console.log(x);
}
foo(); // 1
bar(); // 1


}

console.clear()

// 클로저와 렉시컬 환경
{
    const x =1;
// 1    
    function outer(){
        const x = 10 ;
        const inner = function(){console.log(x);}; // 2
        return inner
    }

    const innerFunc = outer(); // 3
    innerFunc(); // 4 -> 10

}
// 클로저가 아닌 상황
{
    function foo(){
        const x = 1;
        const y = 2;
        // 일반적으로 클로저라고 하지 않는다
        function bar(){
            const z = 3;

            // 상위 스코프의 식별자를 참조하지 않는다
            // 상위 스코프의 어떤 식별자도 참조하지 않는 함수는 클로저가 아니다.
            console.log(z);
        }
        return bar
    }
    const bar = foo();
    bar();
}
// 또 다른 예제
{
    function foo(){
        const x = 1;

        // bar함수는 클로저였지만 곧바로 소멸한다
        // 이러한 함수는 일반적으로 클로저라고 하지 않는다
        function bar(){
            console.log(x);
        }
        bar()
    }
    foo()
}

// 또 다른 예제
{
    function foo(){
        const x = 1 ;
        const y = 2 ;

        // 클로저
        // 중첩 함수 bar는 외부 함수보다 더 오래 유지되며 상위 스코프의 식별자를 참조한다.
        function bar(){
            console.log(x);
        }
        return bar;
    }
    const bar = foo()
    bar();
}

{
    function solution(arr){
        return arr.filter((n, i) => {
            console.log(`n : ${n}`)
            console.log(`i : ${i}`)
            if(i === 0) return true
            else return arr[i - 1] < n 
        })
        }
        
        console.log(solution([7,3,9,5,6,12]))
}
{
    function solution(arr){
        let max = Number.MIN_SAFE_INTEGER
        return arr.filter((height) => {
            if(height > max){
                max = height
                return true
            }
        }).length
    }
    
    console.log(solution([130,135,148,140,145,150,150,153]))
}
{
    function solution(num) {
        let answer = "";
        let n = num.length;
        console.log(n);
        console.log(answer);
        // for(let i=0; 0< n-4; i++){
        //     console.log(num);
        // }
        return answer;
    }
    
    let number = "01041263611"
    console.log(solution(number))
    
}