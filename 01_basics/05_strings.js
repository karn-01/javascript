console.log("hellooooooooooooooooo")
console.log('hello') // both ish ka ander likhi h ye bhi string hi hai

//string contanication

const name=" mohit"
const count = 50
console.log(name + count) //mohit50

console.log(name + count + "value") //mohit50value

//we " in m odern not use this " use this ==
//string interpoliation
//$use to use the variable
console.log(`hello my name is ${name} and my gaming score is ${count} `)


const gameName = new String('mohit_01')

console.log(gameName[0]) //index 0 -- m

console.log(gameName.__proto__);
console.log(gameName.length) //8

//orignisl not change beacuse it string is  memory stack only the copy change not original
console.log(gameName.toUpperCase())  //we aee suing the funciton toUpperCase)

//tocheck the konsa index pe konsa character h
console.log(gameName.charAt(5)); //_

//kis index pe konsa character 
console.log(gameName.indexOf('1')); // 7


//slicing of string
const slice = gameName.substring(0,4)  //index 0 to the index 3 not last not include
console.log(slice);

const newstring = gameName.slice(-7,4) //can use the - value
console.log(newstring);

const newstringtwo ="  mohit  "
console.log(newstringtwo)  //include the space
console.log(newstringtwo.trim()) //remove the space

//to replacing the given string element
const url ="https://mohit.com/mohit%20mohit"

console.log(url.replace('%20','-')) //it replaces the %20 with thsi - 

//to know the keyword present or not
console.log(url.includes('mohit'))  //true
console.log(gameName.split('h')) //[ 'mo', 'it_01' ] // h se plit jahah bhi hoga