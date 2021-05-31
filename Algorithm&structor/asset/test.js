
let board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,4,1,3,1]
]

let moves = [
    [1,4,3,5,1,2,1,4]
]
let index = 3;

pickup(board)
solution(board,moves)


function solution(board , moves){
    const basket = [];
    let result = 0;
    moves.forEach(v => {
        const doll = pickup(board, v-1);
        if(doll){
            if(basket[basket.length -1]=== doll){
                basket.pop();
                result += 2;
            }else{
                basket.push(doll);
            }
        }
    });
    return result
}

function pickup(board, index){
    const newBoard = board
    console.log(newBoard);
    for(let i = 0; i < newBoard.length; i++){
        console.log(i);
        if(newBoard[i][index] !== 0 ){
            const doll = newBoard[i][index];
            newBoard[i][index] = 0;
            return doll;
        }
    } 
}

