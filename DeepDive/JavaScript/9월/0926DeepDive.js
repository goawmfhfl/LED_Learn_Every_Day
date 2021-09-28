{
    // // // fullfilled
    // // new Promise(resolve => resolve('fulfilled'))
    // .then(v => console.log(v), e => console.log(e)) // fulfilled
}
{
    // rejected
    // new Promise((_,rejected) => rejected(new Error('rejected')))
    // .then(v => console.log(v), e => console.log(e)) // Error: rejected
}
{
    // new Promise((_,reject) => reject(new Error('reject')))
    // .catch(e => console.log(e)) // Error: reject
}
{
    new Promise(() => {})
    .finally(()=> console.log(('finally'))) 
}