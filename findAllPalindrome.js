function findAllPalindrome(word){
    let count = 0;
    for (let i=0; i<word.length; i++){
        count += findSubStringPalindrome(word, i-1, i+1);
        count += findSubStringPalindrome(word, i, i+1);
    }

    return count;
}

function findSubStringPalindrome(word, index, nextIndex){
    console.log(`coming in with ${index} and ${nextIndex}`);
    let count = 0;
    while (index >=0 && nextIndex < word.length){
        console.log(`${word[index]} <> ${word[nextIndex]}`);
        if (word[index] != word[nextIndex]){
            break;
        }
        console.log(word.substring(index, nextIndex+1));
        count++;
        index--;
        nextIndex++;
    }

    return count;
}

console.log('total count = ' + findAllPalindrome('kayak'));