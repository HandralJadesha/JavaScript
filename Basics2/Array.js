//Array

const myArr=[0,1,2,3,4,5]
const myHeros=["Dhoni","Faf"]

const myarr=new Array(1,2,3,4)
// console.log(myArr[1])
// console.table(myarr)

// Array Methods

// myarr.push(6) //add the element at the last
// console.log(myarr)
// myarr.pop()  // removes the last element
// console.log(myarr)

// myarr.unshift(7) // inserting at the start

// console.log(myarr)
// myarr.shift()  // removal of first element
// console.log(myarr)

// console.log(myarr.includes(2))
// console.log(myarr.indexOf(2))

// const newArr=myarr.join() // converts array to string

// console.log(myarr)
// console.log(typeof newArr)


// slice,splice

console.log("A ", myarr)
const myn1=myarr.slice(1,3)
console.log(myn1)

console.log("B ",myarr)
const myn2=myarr.splice(1,3) //which remove the range elements from the array
console.log(myn2)
console.log("C ",myarr)

