const marvel_heroes = ["thor" , " iron man "]
const dc_heroes = [ "superman" , "goku"]

marvel_heroes.push(dc_heroes)
//push existing array me hi push
console.log(marvel_heroes)
//[ 'thor', ' iron man ', [ 'superman', 'goku' ] ] array me array 
//ye pura elemwnt h single
console.log(marvel_heroes[2]) // as array hi pura single element h [ 'superman', 'goku' ]

console.log(marvel_heroes [2][1]) //goku

const marvel = ["spideman" , "thor" , "ironman"]
const dc = ["superman" , "goku"]

// marvel.concat(dc) //concat karka new array me karta h 
const allheroes = marvel.concat(dc) 
console.log(allheroes);
//[ 'spideman', 'thor', 'ironman', 'superman', 'goku' ]

//new easy operate instead of concat
const allnewheroes = [...marvel,...dc] // ye prefer spread value kardi for many array joint into the new
console.log(allnewheroes);
//[ 'spideman', 'thor', 'ironman', 'superman', 'goku' ]

const newArr = [ 1, 2, 3, [4, 5, 6] , 7 , [6 ,7 ,[4, 5]]]
const realanotherarray =  newArr.flat(Infinity)
//single array me kardi in array ko bhi

console.log(realanotherarray)
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] 
*/

console.log(Array.isArray("mohit")) //false not array
console.log(Array.from("mohit")) //convert to array [ 'm', 'o', 'h', 'i', 't' ]
console.log(Array.from( {name: "mohit"})) //interesting if nhi kar payega convert to [] empty show

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //[ 100, 200, 300 ]

const alag = Array.from(score1)
console.log(alag)   //[]  kar nhi paya convert