// Create a function that takes an array of non-negative 
// integers and strings and return a new array without the strings.

const filterArray = function(arr) {
    // let numbers = arr.filter(numbersOnly);
    // document.write(numbers);

    // function numbersOnly(value) {
    //     if (typeof (value) === 'number') {
    //         return value;
    //     }
    // }

    // let sum = 0;
    // for (let i = 0, len = arr.length; i < arr; i++) {
    //   sum += arr[i];
    // }
    // return sum;
    // arr = arr.filter(isEligible);
    // return arr;

    // -------------------------- 
    // let result = [];

    // arr.forEach(element => {
    //     if(typeof element === 'number'){
    //         result.push(element)
    //     }
    // });


    // --------------------------
  let result = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(typeof element === 'number'){
            result.push(element)
        }
    }
    
    return result;

  }


  
//   function isEligible(value) {
//     if(value !== "" || value !== null || value !== '') {
//       return value;
//     }

// let index = -1,
// arr_length = arr ? arr.length : 0,
// resIndex = -1,
// result = [];

// while (++index < arr_length) {
// var value = arr[index];

// if (value) {
//     result[++resIndex] = value;
// }
// }

// return result;

// arr = arr.filter(function(arr){ return arr(/(\r\n|\n|\r)/gm,"")});
//   };
// console.log(filterArray([1, 2, "a", "b"])); 
// // ➞ [1, 2]

// let ret = []
// let myArray = [1, 2, "a", "b"]
// myArray.forEach( (item)=> {
//     if(typeof item === 'string'){
//         console.log(item)
//     }
// })

console.log("TEST 1 ----> " + filterArray([1, "a", "b", 0, 15]));
// ➞ [1, 0, 15]


console.log("TEST 2 ----> " + filterArray([1, 2, "aasf", "1", "123", 123]));
//➞ [1, 2, 123]