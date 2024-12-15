console.log("Namaste")
 


let score=33
// as we see it a number but  when the backend see the only value ios may 
//may be string and  number so to know exact

console.log(typeof score);   //number
console.log(typeof (score))  //number

let valueInNumber= Number(score)
//guarantee that the score converted to the number

console.log(valueInNumber)  //33
console.log(typeof (valueInNumber))  //number

console.log("now the importanat point")

let score2="33abc"

let valueinnumber=Number(score2)
console.log(typeof valueinnumber) //converted to number but the value is not number
console.log(valueinnumber)  // value=== NaN not a number  

//now wiht the string conversion to number value==NaN
let string="mohit"
let converttonumber=Number(string)
console.log(converttonumber)
console.log(typeof converttonumber)  //type to convert hop jayega Number me

//with the boolean datatype

let islogged = 1
let booleanislogged = Boolean(islogged)
console.log(booleanislogged)     // true for the 1  and false for the 0

let convert=Number(islogged)   //already a number  
console.log(islogged)      //1 

let number=String(islogged) //converting the islogged into the string and store in the number

console.log(islogged)   // value==1
 
console.log(typeof number) //string