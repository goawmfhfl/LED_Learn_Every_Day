{
    const map = new Map()
    console.log(map);
}

{
    const map1 = new Map([['key1','value1'],['key2','value2']]);
    console.log(map1); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }
    // const map2 = new Map([1,2]) // TypeError: Iterator value 1 is not an entry object
}
{
    const map1 = new Map([['key1','value1'],['key1','value2']]);
    console.log(map1); // Map(1) { 'key1' => 'value2' }
}
{
    const {size} = new Map([['key1','value1'],['key2','value2']]);
    console.log(size); // 2
}
{
    const map = new Map();
    console.log(map); // Map(0) {}

    map.set('ket1','value1')
    console.log(map); // Map(1) { 'ket1' => 'value1' }
}
{
    const map = new Map();

    map
    .set('key1','value1')
    .set('key2','value2')
    console.log(map); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }
}
{
    const map = new Map();
    
    const lee = {name : 'Lee'}
    const kim = {name : 'kim'}

    map
    .set(lee,'developer')
    .set(kim,'designer')

    console.log(map);
    // { name: 'Lee' } => 'developer',
    // { name: 'kim' } => 'designer'
}
{
    const map = new Map();
    
    const lee = {name : 'Lee'}
    const kim = {name : 'kim'}

    map
    .set(lee,'developer')
    .set(kim,'designer')

    console.log(map.get(lee)); // developer
    console.log(map.get('key')); // undefined
}
{
    
    const lee = {name : 'Lee'}
    const kim = {name : 'kim'}

    const map = new Map([[lee,'developer'],[kim,'designer']]);

    console.log(map.has(lee)); // true
    console.log(map.has('key')); // false
}
{
    const lee = {name : 'Lee'}
    const kim = {name : 'kim'}

    const map = new Map([[lee,'developer'],[kim,'designer']]);

    map.delete(kim) // Map(1) { { name: 'Lee' } => 'developer' }
    console.log(map); 
}
{
    const lee = {name : 'Lee'}
    const kim = {name : 'kim'}

    const map = new Map([[lee,'developer'],[kim,'designer']]);

    map.clear()
    console.log(map); // Map(0) {}
}
{
    const lee = {name : 'Lee'}
    const kim = {name : 'kim'}

    const map = new Map([[lee,'developer'],[kim,'designer']]);

    map.forEach((v,k,map)=> console.log(map))
// v
// developer
// designer

// k
// { name: 'Lee' }
// { name: 'kim' }

// map
// Map(2) {
//     { name: 'Lee' } => 'developer',
//     { name: 'kim' } => 'designer'
//   }
// Map(2) {
// { name: 'Lee' } => 'developer',
// { name: 'kim' } => 'designer'
// }

}
console.log('----------');
{
    const lee = {name:'Lee'};
    const kim = {name:'kim'};

    const map = new Map([[lee,'developer'],[kim,'designer']]);

    // Map.prototype.key는 Map 객체에서 요소키를 값으로 갖는 이터레이터를 반환한다.
    for(const key of map.keys()){
        console.log(key);
    }
    // { name: 'Lee' }
    // { name: 'kim' }

    for(const key of map.values()){
        console.log(key);
    }

    // developer
    // designer

    for(const key of map.entries()){
        console.log(key);
    }

    // [ { name: 'Lee' }, 'developer' ]
    // [ { name: 'kim' }, 'designer' ]
}