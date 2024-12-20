//it  is difficult to use the date in the java

let mydate = new Date()

//Date it is a type object
console.log(typeof(mydate))  //object

console.log(mydate)  //2024-12-20T19:06:01.386Z
// to use it we have different methods

console.log(mydate.toString());
//Fri Dec 20 2024 19:06:44 GMT+0000 (Coordinated Universal Time)
//it is much better than previous one

console.log(mydate.toTimeString());
console.log(mydate.toDateString()); //Fri Dec 20 2024

/* 
toString() : Sun May 07 2023 14:16:39
toDateString() : Sun May 07 2023
toTimeString() :19:10:16 GMT+0000 (Coordinated Universal Time)
toLocaleString() : 5/7/2023, 2:20:24 PM
toISOString() : 2023-05-07T09:21:22.167Z
toUTCString() : Sun, 07 May 2023 09:24:48 GMT
*/
let myCreatedate = new Date (2023 , 0 , 23)
console.log(myCreatedate.toDateString())   ///Mon Jan 23 2023
//***  month 0 se start hota h 0==january ***    */

// let newcreatedate = new Date (" 2023-01-14")  //( yy mm dd )
// console.log(newcreatedate.toLocaleString()); //1/14/2023, 12:00:00 AM

//mostly 
let newcreatedate  = new Date("01-14-2023")
console.log(newcreatedate.toDateString()); //Sat Jan 14 2023

//importasnt for the app polls 
let myTimestamp = Date.now() 
// comparee in miliseconds
console.log(myTimestamp);  //1734722329594 //in milisecond
console.log(myCreatedate.getTime()); //1674432000000

// in second me convert 
console.log(Date.now()); // abhi ki date in miliseconds 1970 se 
//in seconds
console.log(Date.now()/1000); //1734722575.334
console.log(Math.floor(Date.now()/1000)); // remove the decimal 1734722608 

let newDate = new Date()
console.log(newDate); //2024-12-20T19:24:30.498Z
console.log(newDate.toDateString())//Fri Dec 20 2024
// to only know part of it ex month day etc
console.log(newDate.getDate()) // 20 date
console.log(newDate.getDay()) //5

//custome define 
newDate.toLocaleString( 'default', { weekday: "long"})


