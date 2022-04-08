// const twoDArray = [
// 	[1,1,1,1],
// 	[1,1,0,1],
// 	[1,1,1,1]
// ];

const twoDArray = [
	[1,0,1,0,1],
	[1,1,1,1,1],
	[0,1,1,1,1],
	[1,1,1,1,1],
	[1,1,1,1,1]
];


function markZero(twoDArray){
	let zeroIndices = [];

	for (let i=0; i<twoDArray.length; i++){
		let zeroFound = false;
		let oneDArray = twoDArray[i];

		for (let j=0; j<oneDArray.length; j++){
			if (oneDArray[j] === 0 && zeroIndices.indexOf(j) < 0){
				zeroIndices = [...zeroIndices, j];
				zeroFound = true;
			}
		}

		if (zeroFound){
			twoDArray[i] = new Array(oneDArray.length).fill(0);
		}
	}

	zeroIndices.map( position => {
		twoDArray.map( oneDArray => {
			oneDArray[position] = 0;
		})
	})
	
}

markZero(twoDArray);

twoDArray.map( oneDArray => console.log(oneDArray));