//singleton 
//object.create 
//object lite

 //object

 // myArr = ["h" , "i"]  //normal array
// myArr[0] //assesing value

const mysym = Symbol("key1")

const Jsuser={
    name: "mohit",
    [mysym]:"mykey1",  // key ko symbol ko refer then []
    age: 18,
    email: "mohitsaroya@gamil.com",
    isloggedin :false,
    lastloginday: ["monday" , "tuesday"]

} 
console.log(Jsuser.email) //mohitsaroya@gamil.com  //mostly . se access karta h hum//some cases me[]
// console.log(Jsuser[email]) // error
console.log(Jsuser["email"]) //mohitsaroya@gamil.com


/*
const Jsuser={
    name: "mohit",
    mysym:"mykey1",   //key
    age: 18,
    email: "mohitsaroya@gamil.com",
    isloggedin :false,
    lastloginday: ["monday" , "tuesday"]

}
    console.log(Jsuser.mysym)  //mykey1
*/

// console.log(Jsuser[mysym])
// console.log(typeof(Jsuser[mysym])) //string  hai not use as the symbol
// //to use it as the real symbol put it in square bracket

Jsuser.email ="mohitA2010"  //update the value
console.log(Jsuser.email) //mohitA2010
//to freeze not to change the value

// Object.freeze(Jsuser);

// Jsuser.email = "mohijirighei"
// console.log(Jsuser.email)  //mohitA2010 due to freeze not change

//adding the function in object

//freeze kiya tha toh function not add
Jsuser.greeting = function(){
    console.log("hello Js user ");
}


console.log(Jsuser.greeting); // [Function (anonymous)]
console.log(Jsuser.greeting()); //hello Js user 

Jsuser.greeting2 = function(){
    console.log('helo js User ${this.name}');
}

console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())
// //hello Js user 
// undefined
// helo js User ${this.name}
// undefined

