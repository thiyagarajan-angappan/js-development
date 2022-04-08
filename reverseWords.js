function reverseWords(sentence){
	// return sentence.split(' ').reverse().join(' ');

	let reverseSentence = '';
	while (sentence.lastIndexOf(' ') > 0){
		let spaceIndex = sentence.lastIndexOf(' ');
		let word = sentence.substring(spaceIndex+1) + ' ';
		sentence = sentence.substring(0, spaceIndex);
		reverseSentence = reverseSentence + word;
	}
	return reverseSentence + sentence;
}

console.log(reverseWords('Hello World! Hello World! Hello World!'));