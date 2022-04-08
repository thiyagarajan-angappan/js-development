/**
 * Not the most efficient solution
 * O(n/2) + O(2n) + O(n/2)
 */

 const arr = [4, 5, 3, 4, 4, 3, 5, 4]; // answer: true
 // const arr = [4, 5, 6, 7, 5, 4]; // answer: 6,7
 
 let result = [];
 for (let i = 0; i < arr.length; i = i + 2) {
   let pairedArr = [arr[i], arr[i + 1]];
   result.push({
     pairedArr,
     found: false
   });
 }
 
 for (let i = 0; i < result.length; i++) {
   let curr = result[i];
   for (let j = i + 1; j < result.length; j++) {
     let compare = result[j];
     if (!result[j].found) {
       let compareArr = compare.pairedArr;
       let currArr = curr.pairedArr;
 
       if (currArr[0] === compareArr[1] && currArr[1] === compareArr[0]) {
         curr.found = true;
         compare.found = true;
       }
     }
   }
 }
 
 let unpairedItems = result
   .filter((entry) => !entry.found)
   .map((item) => {
     return item.pairedArr.join(",");
   });
 
 console.log(`answer: ${unpairedItems.length > 0 ? unpairedItems : "true"}`);

// let foundArr = [];
// let notFoundArr = [];

// for (let i=0; i<arr.length; i=i+2){

//     let curr = arr[i];
//     let next = arr[i+1];

//     if (foundArr.indexOf(curr) > 0 && foundArr.indexOf(next) === foundArr.indexOf(curr)-1){
//         console.log('this is solved');
//         continue;
//     }

//     let j = i;
//     let slicedArr = arr.slice(j+2);
    
//     let found = false;
//     while (slicedArr.length > 1){
//         if (slicedArr.indexOf(curr) > 0){
//             let currMatchIndex = slicedArr.indexOf(curr);
//             let nextMatch = slicedArr[currMatchIndex-1];
            
//             if (next !== nextMatch){
//                 slicedArr = slicedArr.slice(2);
//             } else {
//                 slicedArr = slicedArr.slice(2);
//                 found = true;
//                 foundArr.push(curr, next);
//                 break;
//             }
//         } else {
//             slicedArr = slicedArr.slice(2);
//         }
//     }

//     if (!found){
//         notFoundArr.push([curr, next]);
//     }

//     console.log(`found = ${found} for pair [${curr}, ${next}]`);
//     console.log(foundArr);
// }