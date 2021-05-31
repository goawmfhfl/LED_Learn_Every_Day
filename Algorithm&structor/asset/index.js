const readline = require('readline');
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){
    let arr = [];
    let t = parseInt(input.shift());
    let result = '';

    input.map(el => {
        let command = el.split(' ');
        if(command.length === 2 && command[0] === 'push'){
            push(command);
        } else if(command[0] === 'pop'){
            pop();
        } else if(command[0] === 'size'){
            size();
        } else if(command[0] === 'empty'){
            empty();
        } else if(command[0] === 'top'){
            top();
        }
    });

    console.log(result);

    function push(command){
        let num = parseInt(command[1]);
        arr.push(num);
        return;
    }

    function pop(){
        if(arr.length === 0){
            result += `${-1}\n`;
            return;
        }
        result += `${arr.pop()}\n`;
    }

    function size(){
        result += `${arr.length}\n`;
        return;
    }

    function empty(){
        if(arr.length === 0){
            result += `${1}\n`;
            return;
        }
        result += `${0}\n`;
    }

    function top(){
        if(arr.length === 0){
            result += `${-1}\n`;
            return;
        }
        result += `${arr[arr.length-1]}\n`;
    }
    process.exit(); 
});