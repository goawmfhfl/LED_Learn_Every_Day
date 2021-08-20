function distanceCalculator(word) {
    const length = word.length;
    if (!length) {
    return  null;
    }
    if (length <= 1) {
    return '1'; 
    }

    const distance = [...word].map((char, i) => ( i + 1));
    for(let i = 0; i < Math.floor(length / 2); i++) {
    if (distance[i] !== distance[length-i-1]) {
        distance[length-i-1] = distance[i];
    } 
    }
    return distance.join('');
}

function solution(str, target) {
    let answer = ""
    let start = str[0] === target;
    let end = str[str.length - 1] === target;

    const words = str.split('e');
    const distances = words.map((word) => {
    return distanceCalculator(word)
    });

    for (let i = 0; i < distances.length; i++) {
    if (i === 0 && start) {
        answer +="0";
        answer += !distances[i]? '' : distances[i];
    } else if (i === distances.length - 1 && end) {
        answer += !distances[i]? '' : distances[i];
        answer += "0";
    } else {
        answer += "0";
        answer += !distances[i]? '' : distances[i];
    }
    }
    return answer;
}

const str = 'teachermode';
const target = 'e';

console.log(solution(str, target));