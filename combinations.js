function nCr(n, r){
    return factorial(n) / (factorial(r) * factorial(n-r));
}

function factorial(n){
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n-1);
}

function combinations(arr){
    const len = arr.length;
    let result = [];
    for (let i = 0; i <= len-3; i++){
        for (let j=i+1; j <= len-2; j++){
            for (let k=j+1; k <= len-1; k++){
                result.push([arr[i], arr[j], arr[k]]);
            }
        }
    }

    result.map( (arr, index) => {
        console.log(arr, index);
    });
}

function sizec(index, arrLen, sides, arr, result){ // 0,4,3 // 1,4,3 // 2,4,2 // 3,4,1
    console.log(arr, arrLen, index+1);
    if (arrLen == index+1){
        return;
    }
    for (let i = index; i <= arrLen-sides; i++){ // 0,1 // 1,2 // 2,3
        arr.push(i);
        console.log(arr);
        return sizec(i+1, arrLen, sides-1, arr);
    }
    result.push(arr);
    console.log(result);
}

sizec(0, 4, 3, [], []);

console.log(nCr(6, 3));
console.log(combinations([0,1,2,3]));