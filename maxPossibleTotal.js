// Given an array of 10 numbers, return the maximum possible total 
// made by summing just 5 of the 10 numbers.

const maxTotal = function (arr) {
//         maxTotal.sort(arr);   
//         return arr;
// }
    // let result = 0;
    // const sorted = maxTotal.slice().sort(function(a, b) { 
    //     return b - a 
    //    }); 
       
    for (let i = 0; i < 5; i++) {
        let maxNum = Math.max(arr);
            result = maxNum + result;
        let index = arr.indexOf(maxNum);
        if (index > -1) {
        arr.splice(index, 1);
        }
    }
    return result;
}

console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));
//➞ 43

//maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) 
//➞ 100

//maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) 
//➞ 40