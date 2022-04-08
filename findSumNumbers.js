function findSumNumbers(arr, sum){
	let result = arr.filter( (x,index) => {
		//console.log(sum-x);
		if (arr.indexOf(sum-x) >=0 && arr.indexOf(sum-x) !== index){
			return [x, arr[arr.indexOf(sum-x)]];
		} 
	});

	return result;
}

let v = [5, 7, 1, 2, 8, 4, 3];
let test = [3, 20, 1, 2, 7];

for (let i=0; i< test.length; i++){
	console.log(`numbers adding up to ${test[i]} are ${findSumNumbers(v, test[i])}`);
}


