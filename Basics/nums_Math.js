const score=1234567
// console.log(score)

const balance=new Number(7654)
// console.log(balance)

// console.log(balance.toString().length) // 4
// console.log(balance.toFixed(2))   // 7654.00

const num1=1123.896676
// console.log(num1.toPrecision(3))

const num2=1000000
// console.log(num2.toLocaleString('en-IN')) // 10,00,000

//++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-77)) // -ve to positive 

// console.log(Math.round(4.5))
// console.log(Math.ceil(3.1))  // heigher-----4
// console.log(Math.floor(4.9)) // lower----4

// console.log(Math.sqrt(49))  // 7
// console.log(Math.pow(2,6)) // 64

// console.log(Math.min(1,2,3,4,-1))
// console.log(Math.max(1,2,3,4,5,6,7))
// console.log((Math.random()*10)+1)
// console.log(Math.floor(Math.random()*10+1))

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)