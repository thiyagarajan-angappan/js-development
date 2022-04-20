// Equilibrium array is the one where the sum of left elements to the left side of an index is equal to the sum of elements to the right side of the same index. The sum of elements outside the edges can be considered as zero

const findEquilibrium = function (arr){
    for (let i=0; i<arr.length; i++){
	if (i == 0){
	    if (calculateSum(arr.slice(i+1), i) == 0){
		return i;
	    }
	}

	else if (i == arr.length-1){
	    if (calculateSum(arr.slice(0, i-1), i) == 0){
		return i;
	    }
	}

	

	else if (calculateSum(arr.slice(0, i), i) == calculateSum(arr.slice(i+1), i)){
	    return i;
	}
    }
}

const calculateSum = function (slicedArr, i){
    if (slicedArr.length > 0){
	return slicedArr.reduce((a,b) => a+b);
    }
}

console.log(findEquilibrium([1,10,-3,6,4,7,7]));
