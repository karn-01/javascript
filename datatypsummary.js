//the way data storee in memory is classiffied in two types
//primitive and non -primitive(reference type)
//primitive  -7types
//String , Number , Boolean , null
//undefined , Symbol , BigInt(big number)

//Refernce(non primitive)
//Arrays , Objects , Function

//in most language they define the datatype of variable
const score=100  //just define the variable without type

let name; //value not given means its a undefined value in it
let name1=undefined
console.log(name) //both undefined
console.log(name1)

//////////symbol///////////////////
const id= Symbol('123') //sheeda print symbol(123)
console.log(id)

const anotherId = Symbol('123')

console.log(id==anotherId)//false

const heros = ["shaktiman" , "naagraj" , "ironman"]
console.log(heros);//direct whole value print

let myobject = {
    name: "mohit",
    age:22,
}
console.log(myobject);

const myfunct = function(){
    console.log("hello");
}

console.log(typeof myobject) //object

//typeof undefined == undefined   and typeof null===object

/*/
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */



//_______________________________________________________
       
//memory
//stack me (primitive data type store or run) , Heap(no-primitive)

let myname="mohit"
       
let anothername  =  myname
anothername="yooooyo"

//satck me jo bhi datatype work on copy not original

console.log(myname);  //mohit
console.log(anothername)  //yoooyo


//heap me original pe kam
 
let userone = {
    email: "mohit@gamil.com",
    name:"mohit"
}

let usertwo = userone

//changing the value as the original reference change on original not copy in heao
usertwo.email="gaurav@gamil.com"
//suprisingly value of email in userone also changes
//as we give the original toh changes also reflect on it




//to excess in object use with . innervalue

console.log(userone.email);
console.log(usertwo.email);


       