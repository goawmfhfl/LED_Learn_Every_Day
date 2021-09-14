function solution(arr,n) {
    let answer = Array.from({length:n},(v)=> v = 0)
    arr.forEach(x => {
        let pos = -1;
        for(let i=0; i<n; i++) if(x===arr[i]) pos=i
        if(pos === -1){
            for(let i=n-1; j>=1; j--){
                arr[i]=arr[i-1]
            }
        }else{
            for(let i=pos; i>=1; j--){
                arr[i]=arr[i-1]
            }
        }
        answer[0]=x
    });

    return answer;
}


let arr = [1,2,3,2,6,2,3,5,7]
let n = 5

console.log(solution(arr,n));