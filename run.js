function solution(str){
    const reg = new RegExp(`${str}`, 'gi')
    console.log(reg);
    return reg.test(str.split('').reverse('').join('')) ? 'YES' : 'NO'
}

let str = "gooG";
console.log(solution(str));