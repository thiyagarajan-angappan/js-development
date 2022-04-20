// provided a string like "5+3*2", evaluate the expression and return the result
// string will only contain addition and multiplication operators
// string will always have a valid expression (x+y or x*y) or a valid number(33 or 42)

const evaluateExp = function(expStr){
    if (expStr.includes('+') && expStr.includes('*')){
	let addArr = expStr.split('+').map( exp => {
	    return exp.includes('*') ? exp.split('*').reduce((a,b) => a*b) : +exp;
	});
	return addArr.reduce((a,b) => a+b);
    } else if (expStr.includes('*')){
	return expStr.split('*').reduce((a,b) => a*b);
    } else if (expStr.includes('+')){
	return expStr.split('+').reduce((a,b) => parseInt(a)+parseInt(b));
    } else {
	return expStr;
    }
}

const expression = '6+3*12';
console.log(evaluateExp(expression));
