function printNums(numbers){
    let a = 0;
    let b = 1;
    let count = 2;

    console.log(a);
    console.log(b);
    let sum = a+b;
    while (count < numbers){
        sum = a + b;
        console.log(sum);
        a = b;
        b = sum;
        count++;
    }
}

printNums(10);