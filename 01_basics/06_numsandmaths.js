const score = 400
console.log(score);

//defining the datatype as number gurantee that this is number
//store 100 which is type of number
const balance = new Number(100)
console.log(balance);  //[Number: 100] printed the 100 specifying it a number

console.log(balance.toString().length) //now th balance 100 is string and we can use the string operations on it

console.log(balance.toFixed(2)); // 100.00 ex- gst nikala per customer ko jyada bada number nhi chota number show

const othernumber = 23.895
// console.log(typeof(othernumber)) // number

console.log(othernumber.toPrecision(3)); //23.9 and the output is a string if 


let variable = othernumber.toPrecision(3) 
// console.log(typeof(variable));   //variable type == string

console.log(variable)
console.log(variable.length)  //as now after the precision converted to the string length= 4


let other = 123.89
console.log(other.toPrecision(3)) //124

const hundreds = 10000
console.log(hundreds.toLocaleString('en-IN')); ///() nothing in between usa standard ka number show and i india like we write 10,000

//+++++++++++    MATHS      ++++++++++++++++++++++++++++

console.log("++++++++++++++++++++ mathssss object ++++++++++++++++++++++++")

console.log(Math)

// let check=-24
// console.log(Math.abs(check))  // - to + negative c=hata diya

console.log(Math.round(4.6))  //5
console.log(Math.round(4.1))  //4

console.log(Math.ceil(4.2)) //5
console.log(Math.floor(4.9))  //4


console.log(Math.min( 4, 5, 6,  2 ,32 ,-13))  //-13
console.log(Math.max( 23,324, -53, 2432, 4,323,)) //2432

console.log(Math.random())  // always value between 0 and 1 decimal me mostly
console.log(Math.random()) // always different vlaue
 
//when Math.random()*10 shift towards left 
console.log((Math.random()*10) + 1) ;
console.log(Math.floor(Math.random()*10) + 1); //to have no deciaml place between 1 to 9

const min= 10
const max = 20 
console.log(Math.floor(Math.random() * (max - min +1))  + min )
