// reverse array with for loop
const reverseArray = function(array){
    let reverse = [];
    for (let i=array.length-1;i>=0; i--){
        reverse.push(array[i]);
    }
    
    return reverse;
};

// reverse the incoming array
const reverseArrayInPlace = function(array){
    for (let i=0;i<array.length/2;i++){
        let temp = array[array.length-(i+1)];
        array[array.length-(i+1)] = array[i];
        array[i] = temp;
    }
    return array;
};

console.log(reverseArray([1,2,3,4,5,6]));
console.log(reverseArrayInPlace([5,4,3,2,1]));