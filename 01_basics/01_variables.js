console.log("Mohit")          //to print console.log()
const name="mohit"            //constant value not change 
let email="mohitsaroya2021@gmail.com"    // now use this let 
var password="12345"   

/*     we dont prefer the var vbeacuse of issue in block scope and functional scope
       we use the let insted of var
*/

//name="yo"  pulls an error to change the const variable value


console.log(name);  

console.table([name,email,password])    // print in tabular form console.table([      to print there name   ])

email="yo"
console.log(email);
console.table([name,email,password])

cityname="delhi"   //we can sometime make the variable without giving it type
console.log(cityname)

let cityarea;  //out of this  using the console.log() is undefined 


//to print the output we use the 
//  node parentfilename/filename.js


//ex=== node 01_basics/01_variables.js