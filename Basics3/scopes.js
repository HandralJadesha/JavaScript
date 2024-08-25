// let a=10
// const b=20
let c=300  // global scope which is used in all blocks and program
let a=400
// {} // scope

if(true){
    let a=10  // block scope which is specified to particular block
    const b=20
    // console.log("Inner Block",a)
     
}
// console.log(a)
// console.log(b)
// console.log("Outer Block",a)

// Nested scopes

// child function can access variables from parent variables
function one(){
    const username="Handral"

    function two(){
        const website="Youtube"
        console.log(username)
    }
    // console.log(website)
    // two()
}

// one()

if(true){
    const username="Handral Jadesha"
    if(username==="Handral Jadesha"){
        const website="Youtube"
        // console.log(username+" "+ website)
        //     console.log("Logged In successfully!!")
    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++ INTRESTING ++++++++++++++++

// Function

// console.log(addOne(7))
function addOne(num){
    return num+1
}

// console.log(addOne(7))

// Expression In Js
// here we cannot access the function before initialization
// console.log(addTwo(7)) // not possible
const addTwo=function(num){
    return num+2
}
console.log(addTwo(8))

