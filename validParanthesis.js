/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let i = 0;
    let openArr = [];
    let closeArr = [];
    const pairs = ['(', ')', '{', '}', '[', ']'];
    
    if (s.length <= 1){
        return false;
    }
    
    if (s[0] == ')' || s[0] == '}' || s[0] == ']'){
        return false;
    }
    
    while (i < s.length){
        let curr = s[i];
        
        if (['(', '{', '['].includes(curr)){
            openArr.push(curr);
        } else if ([')', '}', ']'].includes(curr)){
            closeArr.push(curr);
            let match = pairs[pairs.indexOf(curr)-1];
            if (openArr[openArr.length-1] == match){
                openArr = openArr.slice(0, openArr.length-1);
                closeArr = closeArr.slice(0, closeArr.length-1);
            }
        }
        
        i++;
    }
    
    if (openArr.length > 0 || closeArr.length > 0){
        return false;
    }   
    
    return true;
};

console.log(isValid('(i){am}[her}e]'));