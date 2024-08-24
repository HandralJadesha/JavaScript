// const tinderUser=new Object() // singleton object
const tinderUser={} // Non-singleton object

tinderUser.id="123poi"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"Handral@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Handral",
            lastname:"Jadesha"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3)

const obj3={...obj1,...obj2,...obj4}
// console.log(obj3)


console.log(tinderUser)
console.log(Object.keys(tinderUser)) // In Array foemat of Keys
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // key value in array foramt

console.log(tinderUser.hasOwnProperty('isLoggedIn'))