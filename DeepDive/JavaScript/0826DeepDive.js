
{
    const arr = [1,2,3,4];
    // 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다
    const result = arr.splice(1,2,20,30);

    // 제거한 요소가 배열로 반환된다.
    console.log(result); // [ 2, 3 ]
    // spice 메서드는 원본 배열을 직접 변경한다
    console.log(arr); // [ 1, 20, 30, 4 ]

}
{
    const arr = [1,2,3,4]

    // 원본 배열의 인덱스 1부터 0개의 요소를 제거하고 그 자리에 새로운 요소 100을 삽입한다.
    const result = arr.splice(1,0,100);

    // 원본 배열이 변경됩니다.
    console.log(arr); // [ 1, 100, 2, 3, 4 ]

    // 제거한 요소가 배열로 반환된다
    console.log(result); // []
}
console.log('----------');
{
    const arr = [1,2,3,4]
    // 원본 배열의 인덱스 1부터 2개의 요소를 제거한다

    const result = arr.splice(1,2)
    // 원본 배열이 변경된다
    console.log(arr); // [1,4]

    // 제거한 요소가 배열로 반환된다
    console.log(result); // [2,3]
}
{
    const arr = [1,2,3,4]

    // 원본 배열의 인덱스 1부터 모든 요소를 제거한다
    const result = arr.splice(1)
    
    // 원본 배열이 변경된다
    console.log(arr); //[1]
    // 제거한 요소가 배열로 반환된다.
    console.log(result);// [2,3,4]
}

{
    const arr = [1,2,3,1,2]
    // 배열 array에서 item 요소를 제거한다. item 요소가 여러 개 존재하면 첫 번째 요소만 제거한다
    function remove(array,item){
        // 제거할 item 요소의 인덱스를 취득한다
        const index = array.indexOf(item);

        // 제거할 item 요소가 있다면 제거한다
        if(index !== -1) array.splice(index, 1);

        return array
    }
    console.log(remove(arr,2)); // [ 1, 3, 1, 2 ]
    console.log(remove(arr,10)); // [ 1, 3, 1, 2 ]

}
{ 
    const arr = [1,2,3,1,2]
    // 배열 array에서 모든 item 요소를 제거한다
    function removeAll(array,item){
        return array.filter(v => v !== item);
    }
    console.log(removeAll(arr,2)); // [ 1, 3, 1 ]
}