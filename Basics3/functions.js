// functions

function myName(){
    console.log("Hello Handral Jadesha!!")

}

// myName()

function addTwoNumbers(number1,number2){ 
    return number1+number2
}

// addTwoNumbers() // NaN
const res=addTwoNumbers(7,6)
// console.log(res)


function loginUserMessage(username="Jaddu"){
    if(username === undefined){ // if(!username)
        console.log("Please enter the username!!")
            return;
    }
    return `${username} Just Logged In`
}

const mes=loginUserMessage("Handral")
// console.log(mes)

function calculateCartPrice( val1,...num1){ // rest operator (...a)
        return num1
}
// console.log(calculateCartPrice(2,3,4,17))

const user={
    username:"Handral",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username:"Handral Jadesha",
    price:799
})

const myArray=[200,400,600,800]

function returnSecondValue(getArray){
return getArray[1]
}
// console.log(returnSecondValue(myArray))
console.log(returnSecondValue([100,200,300,400]))






