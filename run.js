function compareMap(aMap,bMap){
    if(aMap.size !== bMap.size) return false
    for(let [key,val] of aMap){
        if(!bMap.has(key)||bMap.get(key)!==val) return false
    }
    return true

}

function solution(a,b){
    let answer = 0;
    let aMap = new Map()
    let bMap = new Map()

    for(let x of b){
        if(bMap.has(x)) bMap.set(x,bMap.get(x)+1)
        else bMap.set(x,1)
    }

    let len = b.length - 1
    for(let i = 0; i<len; i++){
        if(aMap.has(a[i]))aMap.set(a[i],aMap.get(a[i])+1)
        else aMap.set(a[i],1)
    }

    let lt = 0;
    for(let rt=len; rt<a.length; rt++){
        if(aMap.has(a[rt])) aMap.set(a[rt],aMap.get(a[rt])+1)
        else aMap.set(a[rt],1)
        if(compareMap(aMap,bMap)) answer++
        aMap.set(a[lt],aMap.get(a[lt])-1)
        if(aMap.get(a[lt]) === 0) aMap.delete(a[lt])
        lt++
    }
    return answer;
}


let a = "bacaAacba"
let b = 'abc'
console.log(solution(a,b)); 