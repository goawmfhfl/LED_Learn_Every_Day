function solution(str,target){
    let answer;
    str.sort((a,b)=>a-b);
    let lt = 0 , rt = str.length-1;

    while(lt<=rt){
        let mid = parseInt((lt+rt)/2);
        if(str[mid]===target){
            answer = mid+1;
            break;
        }
        else if(str[mid]>target){
            rt = mid-1;
        }
        else lt = mid +1;
    }
    return answer;
}

const str = [23,87,65,12,57,32,99,81];

console.log(solution(str,32));