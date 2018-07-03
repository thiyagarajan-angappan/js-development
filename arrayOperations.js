const arrayToList = function(array){
    var list = null;
    
    for (let i=array.length-1;i>=0; i--){
        list ={
            value : array[i],
            ref : list
        };
    }
    
    return list;
};

const listToArray = function(list){
    var array = [], ref = {}, index = 0;
    
    for (let node = list; node; node = node.ref){
        array.push(node.value);
    }
    
    return array;
};

const findElement = function(list, index){
    let count = 0;
    
    for (let node = list; node; node = node.ref){
        if (count == index){
            return node.value;
        }
        count++;
    }
};

var list = arrayToList([1,2,3,7,6,21,45,4,89]);
console.log(listToArray(list));
console.log(arrayToList([1,2,3,7,6,21,45,4,89]));
console.log(findElement(list,5));