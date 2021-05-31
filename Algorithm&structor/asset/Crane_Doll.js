// 배열의 인덱스보다 조금씩 크다.
// 아 1번위치에 접근할려면 실제로는 -1을 해서 0번째로 해야한다
// 왜냐하면 배열내에서의 1번째는 0번째 이기 때문이다.


function solution(board, moves) {
    const basket = []; // 인형들을 가져와서 담을 바구니
    let result = 0;
    // forEach 문은 전체 배열에 있는 값을 순회하며 한번씩 호출한다.
    // 즉 일단 moves.forEach를 통해 board 값들을 -1을 해준다
    moves.forEach(v => {
        const doll = pickup(board, v-1);
        if(doll){
            if(basket[basket.length - 1] === doll){
                basket.pop();
                result +=2;
                // 만약 바스켓의[바스켓의 길이 - 1] === doll
                // result = result + 2
            }else{
                basket.push(doll);
            }
        }
    });
    return result;
}
// const doll = pickup(board, v-1); 를 전달 받는다.
function pickup(board, index){
    const newBoard = board;
    for(let i = 0; i < newBoard.length ; i++){
        if(newBoard[i][index] !== 0){
            const doll = newBoard[i][index];
            newBoard[i][index]= 0;
            return doll;
        }
    }
}