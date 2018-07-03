// returning a function
const isName = function(name){
    return str => str == name;
};

const isType = function(obj, type){
    return result => typeof obj == type;
};

const isNameJS = isName('JS');
console.log(isNameJS('JS'));

// repeat like a loop
const repeat = function(n, action){
    
    for (let i=0; i<n; i++){
        action(i);
    }
};

// pass functions for conditional flow
const ifSuccessThen = function(test, then, otherwise){
    if (test){
        then();
    }
    else{
        otherwise();
    }
};

repeat (6, action => {
    ifSuccessThen(action%3 == 0 && action != 0, ()=>{
        console.log('mail sent succcessfully');
    }, () => {
        console.log('retrying...');
    });
});

// pass function to perform on each argument
const find = function(f){
    return (...args) => {
        let result = [];
        for (let num of args){
            result.push(f(num));
        }
        return result;
    };
}
console.log(find(Math.sqrt)(3,2,1));

// looper
const loop = function(repeat, test, update, body){
    for (let i=repeat;i>=0;i--){
        if (test(i)){
            body(i);
        }
        update(i);
    }
};
loop(3, n => n > 0, n => n - 1, console.log);

// closure
function add(increment) {
    return (x,y) => (x*y) + increment;
}
let multiple = add(3);
console.log(multiple(10,5));