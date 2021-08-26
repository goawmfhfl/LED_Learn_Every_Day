
/**
- map메서드 내의 내장 함수를 활용하여 자연수를 뒤집어 줌
- filter 메서드 활용하여 뒤집어진 자연수 isPrime에 인수 전달
- 강사님의 소수 구하는 방식 참조
- isPrime 함수에서 true를 출력한 값은 filter에 저장이 된다 filter는 true값이 모인 새로운 배열을 반환} num 
 */

function isPrime(num){
}

function solution(arr){
    return arr.map(number => parseInt(String(number).split('').reverse().join('')))
}

let numbers = [32, 55, 62, 20, 250, 370, 200, 30, 100]
console.log(solution(numbers));