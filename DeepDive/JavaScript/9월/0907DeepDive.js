{
    const set = new Set()
    console.log(set); // Set(0){}
}

{
    const set1 = new Set([1,2,3,3]);
    console.log(set1); // Set(3) { 1, 2, 3 }

    const set2 = new Set('hello');
    console.log(set2); // Set(4) { 'h', 'e', 'l', 'o' }
}
{
    const uniq = array => array.filter((v,i,self)=> self.indexOf(v) === i)
    console.log(uniq([2,1,2,3,4,3,4])); // [ 2, 1, 3, 4 ]

    const uniq1 = array => [...new Set(array)];
    console.log(uniq1([2,1,2,3,4,3,4])); // [ 2, 1, 3, 4 ]
}
{
    const {size} = new Set([1,2,3,3])
    console.log(size); // 3
}
{
    const set = new Set([1,2,3])
    console.log(Object.getOwnPropertyDescriptor(Set.prototype,'size'));
    set.size = 10;
    console.log(set.size);
}
console.log(`-----`);
{
    const set = new Set();
console.log(set) // Set(0){}

set.add(1)
console.log(set)
}
{
const set = new Set();
console.log(set) // Set(0){}

set.add(1).add(2)
console.log(set) // Set(2) { 1, 2 }
}
{

    const set = new Set([1,2,3])
    console.log(set.has(2)); // true
    console.log(set.has(4)); // false
}
{
    const set = new Set([1,2,3])

    // 요소 2를 삭제한다
    set.delete(2) 
    console.log(set); // Set(2) { 1, 3 }

    set.delete(1) // Set(1) { 3 }
    console.log(set);
}
{
    const set = new Set([1,2,3])
    set.clear() 
    console.log(set); // Set(0) {}

}
{
    const set = new Set([1,2,3])
    set.forEach((v,v2,set)=> console.log(v,v2,set))

    // 1 1 Set(3) { 1, 2, 3 }
    // 2 2 Set(3) { 1, 2, 3 }
    // 3 3 Set(3) { 1, 2, 3 }
    
}
console.log(`-----`);
{
    Set.prototype.intersection = function(set){
        console.log('para set',set);
        const result = new Set()

        for(const value of set){
            console.log('value',value);
            // 2개의 set 요소가 공통되는 요소이면 교집합의 대상이다
            if(this.has(value)) result.add(value)
        }
        return result;
    }

    const setA = new Set([1,2,3,4])
    const setB = new Set([2,4])

    // setA와 setB의 교집합
    console.log(setA.intersection(setB)); // Set(2) { 2, 4 }
    // setB와 setA의 교집합
    console.log(setB.intersection(setA)); // Set(2) { 2, 4 }
}
{
    Set.prototype.intersection = function(set){
        return new Set([...this].filter(v => set.has(v)))
    }
    const setA = new Set([1,2,3,4])
    const setB = new Set([2,4])

    // setA와 setB의 교집합
    console.log(setA.intersection(setB)); // Set(2) { 2, 4 }
    // setB와 setA의 교집합
    console.log(setB.intersection(setA)); // Set(2) { 2, 4 }
}
console.log(`-----`);
{
    Set.prototype.difference = function(set){
        // this(Set 객체)를 복사
        const result = new Set(this)

        for(const value of set){
            //차집합은 어느 한쪽 집합에는 존재하지만 다른 한쪽 집합에는 존재하지 않는 요소로 구성된 집합이다.
            result.delete(value)
        }
        return result;
    }
    const setA = new Set([1,2,3,4])
    const setB = new Set([2,4])

    // setA와 setB의 교집합
    console.log(setA.difference(setB)); // Set(2) { 1, 3 }
    // setB와 setA의 교집합
    console.log(setB.difference(setA)); // Set(2) {}
}
console.log(`-----`);
{
    Set.prototype.difference = function(set){
        return new Set([...this].filter(v => !set.has(v)))
    }
    const setA = new Set([1,2,3,4])
    const setB = new Set([2,4])

    // setA와 setB의 교집합
    console.log(setA.difference(setB)); // Set(2) { 1, 3 }
    // setB와 setA의 교집합
    console.log(setB.difference(setA)); // Set(2) {}
}
console.log(`-----`);
{
    // this가 subset의 상위 집합인지 확인한다.
    Set.prototype.isSuperset = function(subset){
        for(const value of subset){
            //superset의 모든 요소가 subset의 모든 요소를 포함하는지 확인
            if(!this.has(value)) return false;
        }
        return true;
    };

    const setA = new Set([1,2,3,4])
    const setB = new Set([2,4])

    // setA와 setB의 교집합
    console.log(setA.isSuperset(setB)); // true
    // setB와 setA의 교집합
    console.log(setB.isSuperset(setA)); // false
}

console.log(`-----`);

{
    // this가 subset의 상위 집합인지 확인한다.
    Set.prototype.isSuperset = function(subset){
        const supersetArr = [...this];
        return [...subset].every(v => supersetArr.includes(v))
    };

    const setA = new Set([1,2,3,4])
    const setB = new Set([2,4])

    // setA와 setB의 교집합
    console.log(setA.isSuperset(setB)); // true
    // setB와 setA의 교집합
    console.log(setB.isSuperset(setA)); // false

}