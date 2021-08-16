const RPS = {
    SCISSORS : 1, // 가위
    ROCK     : 2, // 바위
    PAPER    : 3, // 보
}

//   console.log(typeof [RPS.SCISSORS]); // Object
//   console.log(typeof RPS.SCISSORS); // number

//   console.log([RPS.SCISSORS]) // [1]
//   console.log(RPS.SCISSORS) // 1

const isWinner = {
    [RPS.SCISSORS] : (target) => {return target === RPS.PAPER ? 'A' : 'B' },
    [RPS.ROCK]     : (target) => {return target === RPS.SCISSORS ? 'A' : 'B' },
    [RPS.PAPER]    : (target) => {return target === RPS.ROCK ? 'A' : 'B' } 
}

function solution2(a, b){
    return a.map((itemA, idx) => {
    const itemB = b[idx]
    const itemAB = isWinner[itemA](itemB)

    return itemA === itemB ? 'D' : isWinner[itemA](itemB)

    })
}

console.log(solution2([2,3,3,1,3],[1,1,2,2,3]))