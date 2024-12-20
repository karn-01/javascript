// arrays  it is a object
////single variable containe me=any elements
//resizable , mix data type float int 
//indexing start from 0 
// array when copy operartion toh shallow copy banata h same reference point 
//deep copy operation do not share the same reference

const myArr = [ 0,1,2,3,4,5] 
console.log(myArr[0]); //0
console.log( myArr[4]) //4

const myheroes = [ "shaktiman", "mohit"]
console.log(myheroes[1]);  //mohit pura

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]); // 1

//Array methods
// upar declared const myArr = [ 0,1,2,3,4,5] 
myArr.push(6)
console.log(myArr)
myArr.push(8)
/*
[
  0, 1, 2, 3,
  4, 5, 6, 8
]
    */
myArr.pop()
console.log(myArr)
/*
[
  0, 1, 2, 3,
  4, 5, 6
]
*/
myArr.unshift(0)
console.log(myArr) /*[
    0, 0, 1, 2,
    3, 4, 5, 6
  ]
  */

myArr.unshift(9)
console.log(myArr)
/*      // ye pura array ko shift karega load ayega computer pe
[
  9, 0, 0, 1, 2,
  3, 4, 5, 6
] 
*/
myArr.shift()
console.log(myArr) // remove the 9 jitni baar ye autna 1 karka remove
/* 
[
  0, 0, 1, 2,
  3, 4, 5, 6
]
  */

console.log(myArr.includes(10))  // false the tyoe of this is boolean
let toknow = myArr.includes(9)
console.log(typeof(toknow))  //voolean

console.log(myArr.indexOf(10)); //-1
console.log(myArr.indexOf(3)) //4

// console.log(myArr) // [ 0,0, 1,2,3,4,5,6]

const newArr = myArr.join()
console.log(myArr);
console.log(typeof(newArr))  //string
console.log(newArr) //0,0,1,2,3,4,5,6

//slice , splice

console.log( "A", myArr); 
/* 
A [
  0, 0, 1, 2,
  3, 4, 5, 6
]
*/

const myn1 = myArr.slice(1,3)  // start from the 1 and 2 but not include the 3 se 1 kam
//not manupulate the original
console.log(myn1)  //[ 0, 1 ]
console.log("B" , myArr)
/*
 B [
  0, 0, 1, 2,
  3, 4, 5, 6
]
*/

const myn2 = myArr.splice(1,3)
// last 1 se 3 tak print nooooooooooo

console.log("using the splice the original print " , myArr)
// [ 0, 3, 4, 5, 6 ] arrray hi change the splice manipulate the original

console.log(myn2) //[ 0, 1, 2 ]

