// Primitive -----call by value

// 7 types: String, Number, Bollean, null, undefined, symbol(unique),BigInt

const score=107
const score1=107.7

const isLoggedIn=false
const outsideTemp=null

let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)  // false

const bigNumber= 98746545116516n


// Reference type --Non-primitive

// Array, Objects, Functions

const heros=["Dhoni","Jaddu","Faf"];

let myObj={
    name:"Handral",
    age:21,
}

const myFunction= function(){
        console.log("Hello Handral")
}

console.log(typeof outsideTemp) //object
console.log(typeof bigNumber) //bigint

console.log(typeof myFunction) //function
console.log(typeof heros) //object
console.log(typeof myObj) // object