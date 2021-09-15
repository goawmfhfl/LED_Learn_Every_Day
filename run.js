function solution(arr) {
    let plus = []
    let minus = []

    for(let x of arr){
        if(x>0) plus.push(x)
        else minus.push(x)
    }

    return [...minus,...plus]
  }
  
  let arr = [1,2,3,-3,-2,5,6,-6];
  console.log(solution(arr));