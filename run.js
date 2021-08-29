
/*
1. map메서드를 활용해서 commands 배열 인수로 전달.
2. array.filter를 활용하여 array에 저장된 배열의 요소 변경
3. (_,i) => i>=command[0]-1 && i<=command[1]-1 를 통해서 i번째와 j번째의 값을 slice 함
4. sort를 통해서 slice된 값을 오름 차순으로 정렬
5. k번째의 값을 구하기 위해서 command[2]로 접근하고 인덱스 값을 구하기 위해서 - 1을 해주었음.
6. 반환된 값이 commands에 반환되고 예상 출력 값을 얻을 수 있게 된다.
 */



function solution(array, commands) {
  return commands.map(command => array.filter((_,i) => i>=command[0]-1 && i<=command[1]-1)
                                      .sort((a,b)=> a-b)[command[2]-1])
}

let array = [1,5,2,6,3,7,4]
let commands = [[2,5,3],[4,4,1],[1,7,3]]
console.log(solution(array,commands));
