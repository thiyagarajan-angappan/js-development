const ranker = (products, topNum) => {
    let prodFreq = {};
    for (let i=0; i<products.length; i++){
        if (!prodFreq[products[i]]){
            prodFreq[products[i]] = 1;
        } else {
            prodFreq[products[i]]++;
        }
    }

    let freqArr = [];
    for (let counted of Object.entries(prodFreq)){
        freqArr.push(counted);
    }


    const result = freqArr.sort((product1, product2) => {
        if (product1[1] > product2[1]){
            return -1;
        } else if (product1[1] < product2[1]){
            return 1;
        }
        return 0;
    }).map( product => {
        return product[0];
    }).slice(0, topNum);

    console.log(result);
}

console.log(ranker(['12', '12', '12', '12', '12', '12', '12', '123', '876', '123', '898', '731', '123', '898', '876', '898', '123'], 3));