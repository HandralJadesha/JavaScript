// Dates

let myDate=new Date()
// console.table(myDate.toString())
// console.log(myDate.toDateString())
// console.table(myDate.toLocaleString())
// console.log(typeof myDate)

let myCreateDate=new Date(2024,0,23)  // Month start with 0 in JS

let newDate=new Date()
// console.log(newDate.toLocaleString())
// console.table(myCreateDate.toDateString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(newDate.getTime())
// console.log(Math.floor(Date.now()/1000))
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())  // saturday

console.log(newDate.toLocaleString('default',{
    weekday: "long"
    
}))



