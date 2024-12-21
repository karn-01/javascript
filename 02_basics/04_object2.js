//singleton
// const tinderuser = new Object() //singleton object

// console.log(tinderuser); //{}

const tinder= {}  //non singleton
tinder.id = "1234abc"
tinder.name = "sammy"
tinder.isloggedin = false
console.log(tinder)  //{} ye agar empty hota const tinder= {} isha print
//{ id: '1234abc', name: 'sammy', isloggedin: false }

const regularuser = {           //email , fullname ye sab key h
    email: "some@gmail.com",
    fullname:{                    //object me object
        userfullname:{
            firstname:"mohit",
            lastname: "yo"
        }
    }
}
console.log(regularuser.fullname)
//{ userfullname: { firstname: 'mohit', lastname: 'yo' } }

console.log(regularuser.fullname.userfullname.lastname)  //yo

const objct1 = {1:"a" , 2:"b"}
const objct2 = {3:"c", 4:"d"}

// const objct3 = {objct1 , objct2}
// console.log(objct3)
// //as we see it is in the object me object
// //{ objct1: { '1': 'a', '2': 'b' }, objct2: { '3': 'c', '4': 'd' } }

//to overcome it  Object.assign to merge kar diya
const objct3 = Object.assign(objct1,objct2)
console.log(objct3)
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } //now object me object nhi 

//another syntax
const objct4 = Object.assign({},objct1,objct2)   //{} passing it will assure that it is an {} empty aarray
console.log(objct4)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//mostly ue this spread 
const objctyo = {...objct1,...objct2}
console.log(objctyo) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//****************************************************************** */
console.log(tinder)
//{ id: '1234abc', name: 'sammy', isloggedin: false }
///to store the key it store in the array we can use it later in different places usefull
console.log(Object.keys(tinder));//[ 'id', 'name', 'isloggedin' ]
console.log(Object.values(tinder))// ye bhi array hi hota h [ '1234abc', 'sammy', false ]

console.log(Object.entries(tinder))   //array me array 
//[ [ 'id', '1234abc' ], [ 'name', 'sammy' ], [ 'isloggedin', false ] ]

console.log(tinder.hasOwnProperty('isloggedin')) //true
console.log(tinder.hasOwnProperty('isloggedout')) //false
