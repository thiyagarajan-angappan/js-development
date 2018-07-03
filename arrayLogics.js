/*---------------
    INTERNALS
----------------*/

// FILTER
const filter = function(array, filterCondition){
    var filtered = [];
    for (let element of array){
        if(filterCondition(element)){
            filtered.push(element);
        }
    }
    return filtered;
}

// MAP
const map = function(array, mapElement){
    console.log(mapElement);
    var map = [];
    for (let element of array){
        map.push(mapElement(element));
    }
    return map;
}

// REDUCE
const reduce = function (array, combineRule, startIndex){
    let currentIndex = startIndex;
    console.log(combineRule);
    for (let element of array){
        currentIndex = combineRule(currentIndex, element);
    }
    
    return currentIndex;
};

// EVERY
const every = function(array, test){
    
    // using for loop
    for(let element of array){
        if(!test(element)){
            return false;
        }
    }
    return true;
    
    // if all are false, return true
    // if all are true, return false
    // mix of true/false, return false

    return !array.some((element) => {
        return !test(element); 
    });
};
/*-------------------
    FUNCTIONS
---------------------*/
const attach = function(array){
    return array.reduce((el1,el2) => {
        return el1.concat(el2);
    });
};

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(attach(arrays));