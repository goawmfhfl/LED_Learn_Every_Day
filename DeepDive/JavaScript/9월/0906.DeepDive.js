{
    const arr = [1,2,3]

    // 배열 arr의 요소 중에서 최대값을 구하기 위해 Math.max를 사용한다.
    const max = Math.max(arr)
    console.log(max); // NaN
}
{
    const arr =[1,2,3]
    const max = Math.max(...arr)
    console.log(max); // 3
}
{
// Rest 파라미터는 인수들의 목록을 배열로 전달받는다.
function foo(...rest){
	console.log(rest); // 1,2,3 -> [1,2,3]
}

// 스프레드 문법은 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만든다.
// [1,2,3] -> 1,2,3
foo(...[1,2,3])
}

{
    //ES5
var arr = [1,2].concat([3,4])
console.log(arr) // [ 1, 2, 3, 4 ]
}
{
    //ES6
    const arr = [...[1,2],...[3,4]]
    console.log(arr); // [ 1, 2, 3, 4 ]
}
{
var arr1=[1,4]
var arr2=[2,3]


arr1.splice(1,0,...arr2)
console.log(arr1); // [ 1, 2, 3, 4 ]
}

{
    // ES5
    var origin = [1,2]
    var copy = origin.slice()

    console.log(copy);
    console.log(copy===origin);
}
{
    // ES6
    var origin = [1,2]
    var copy = [...origin] // [ 1, 2 ]

    console.log(copy);
    console.log(copy===origin); // [ 1, 2 ]
}
{
    function sum(){
        //이터러블이면서 유사 배열 객체인 arguments를 배열로 반환
        return [...arguments].reduce((pre,cur)=> pre + cur,0);
    }
    console.log(sum(1,2,3)); 6
}
{
    const sum = (...args) => args.reduce((pre,cur)=> pre+cur,0)
    console.log(sum(1,2,3)); // 6
}
{
    //스프레드 프로퍼티
    // 객체 복사 (얕은 복사)
    const obj = {x:1, x:2};
    const copy = {...obj};
        console.log(copy);
        console.log(obj === copy); // false

        // 객체 병합
        const merged = {x:1, y:2, ...{a:3, b:4}}
        console.log(merged); // { x: 1, y: 2, a: 3, b: 4 }
}
{
    // 객체 병합 프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다.
    const merged = Object.assign({},{x:1,y:2},{y:10,z:3})
    console.log(merged);
}
{
    const merged = {...{x:1, y:2},...{y:10,z:3}}
    console.log(merged); //{ x: 1, y: 10, z: 3 }
}
{
    var arr = [1,2,3];

    var one = arr[0]
    var two = arr[1]
    var three = arr[2]

    console.log(one); // 1
    console.log(two); // 2
    console.log(three); // 3 

}
{
    const arr = [1,2,3];
    // ES6 배열 디스트럭처링 할당
    // 변수 one , two, three를 선언하고 배열 arr을 디스트럭처링 할당한다.
    // 이때 할당 기준은 배열의 인덱스다
    const [one, two, three] = arr;
    console.log(one , two, three); // 1 2 3
}
{
    const [a,b]=[1,2]
    console.log(a,b); // 1 2
    const [c,d]=[1]
    console.log(c,d); // 1 undefined
    const [e,f]=[1,2,3]
    console.log(e,f); // 1 2
    const [g,,h]=[1,2,3] 
    console.log(g,h); // 1 3
}
{
    const [x,...y] = [1,2,3]
    console.log(x,y); // 1 [ 2, 3 ]
}
{
    var user = {firstName:'choi',lastName:'jaeyoung'};

    var firstName = user.firstName
    var lastName = user.lastName
    console.log(firstName,lastName); // choi jaeyoung
}
{
    const user = {firstName:'choi',lastName:'jaeyoung'};

    // ES6 객체 디스트럭처링 할당
    // 변수 lastName, firstName을 선언하고 user 객체를 디스트럭처링하여 할당한다
    const {lastName, firstName} = user
    console.log(lastName,firstName) // jaeyoung choi
}
{
    // const {lastName, firstName} = user;
    // 위와 아래는 동치다
    // const {lastName : lastName, firstName : firstName} = user
}
{
    function paintTodo({content, complete}){
        console.log(`할일 ${content}은 ${complete ? '완료':'비완료'} 상태입니다`);
    }
    paintTodo({id:1, content:'html',complete:true}) // 할일 html은 완료 상태입니다
}
{
    const todos = [
        {id:1, content:'HTML',completed:true},
        {id:2, content:'CSS',completed:false},
        {id:3, content:'JS',completed:true}
    ];

    // todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다
    const [,{id}] = todos
    console.log(id); // 2
}
{
    const user = {
        name : 'Lee',
        address : {
            zipCode : '03068',
            city : 'Seoul'
        }
    };

    const {address : {city}} = user;
    console.log(city); // Seoul
}
{
    const {x, ...rest} = {x:1, y:2, z:3}
    console.log(x,rest); // 1 { y: 2, z: 3 }
}