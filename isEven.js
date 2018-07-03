// find if a number is even without using modulo operator
// by recursive function call

var isEven = function(num){
    if (num === 0){
        return true;
    }
    else if (num === 1){
        return false;
    }
    else{
        if(num < 0){
            num = -(num) + 2;
        }
        return isEven(num - 2);
    }
}

console.log(isEven(-15846));