// sum of range of numbers
// 1,3,1 -> sum of numbers from 1 to 3 with increment of 1 at a time
// 1+2+3 = 6

const range = function(start, end, step){
    let array = [];
    for (let i=start; i<=end; i += step){
        array.push(i);
    }
    
    return array;
};

const sum = function(array){
    let sum = 0;
    for (let num of array){
        sum += num;
    }
    
    return sum;
};

console.log(sum(range(1,3,1)));