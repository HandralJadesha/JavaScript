//singleton--constructor
// Object.create

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"Handral",
    "full name":"Handral Jadesha",
    [mySym]:"myKey1",
    age:18,
    location:"Bengaluru",
    email:"jadesha@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Maonday","Saturday"]
}

// console.log(JsUser['full name'])
// console.log(JsUser['email'])
// console.log(typeof JsUser[mySym])

JsUser.email='Handral@gmail.com'
// console.log(JsUser['email'])
// Object.freeze(JsUser)
JsUser.email='Handral7777@gmail.com'
// console.log(JsUser['email'])
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello Pradeep nayar")
}
JsUser.greetname=function(){
    console.log(`Hello JS User , ${this.name}`) // refrence 
}


console.log(JsUser.greeting())
console.log(JsUser.greetname())