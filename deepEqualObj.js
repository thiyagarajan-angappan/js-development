// compare each object by going through the values in each
const deepEqual = function(obj1, obj2){
    
    var obj1Keys = Object.keys(obj1);
    var obj2Keys = Object.keys(obj2);
    let isEqual = false;
    
    if (obj1Keys.length == obj2Keys.length){
        
        for(let i=0; i<obj1Keys.length; i++){
            let value1 = obj1[obj1Keys[i]];
            let value2 = obj2[obj2Keys[i]];
            
            if (typeof value1 == 'object' && typeof value1 == typeof value2){
                if (!deepEqual(value1, value2)){
                    isEqual = false;
                    break;
                }
            }
            else{
                if (obj1Keys[i] == obj2Keys[i]){
                    if (value1 == value2){
                        isEqual = true;
                    }
                    else{
                        isEqual = false;
                        break;
                    }
                }
                else{
                    isEqual = false;
                    break;
                }
            }
        }
    }
    else{
        isEqual = false;
    }
    
    return isEqual;
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true