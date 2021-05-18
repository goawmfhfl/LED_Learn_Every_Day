class UserStorage{
    // 기존에 있던 OnSuccess 와 OnError에 promise문으로 대체하였다.
    loginUser(id, password){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                if(
                    (id === 'ant' && password === 'blackant') ||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            }, 2000);

            // setTimeout 안에 조건문을 넣어서
            // 값이 일치하면 resolve를 호출하게 하였고 id를 인자값으로 하였다.
            // 값이 일치하지 않으면 reject를 호출하게 하였고 new Error를 인자값으로 하였다.

            // new Error() 클래스는 자바스크립트에서 제공하는 오브젝트중에 하나로 에러를 나타낸다.
            // reject는 Error라는 오브젝트를 통해서 값을 전달한다.
            // getRoles 이하동문
        });
    }
    getRoles(user){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(user === 'ant'){
                    resolve({name: 'ant', role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            },1000);
        })
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
    .loginUser(id,password)
    // resolve일 경우에 (id)를 전달인자로 한다.
    .then( user => userStorage.getRoles(user))
    // user = loginUser promise 문의 조건문 true값 resolve의 전달인자(id)
    //.then(userStorage.getRoles) 생략가능
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    // user = {name: 'ant', role:'admin'}
    .catch(console.log);
    // reject(new Error('not found')); 호출