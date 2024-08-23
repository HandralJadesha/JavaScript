// console.log("2" > 1)
// console.log("02" > "")
console.log(null >0)  //false 
 console.log(null ==0) // false
console.log(null >=0)  // true
// The reason is thet an equality check == and comaprisons > < >= <= work differently.
//Comparisons convert null to a number ,treating it as 0.
//That's why (3) null >=0 is true and (1) null>0 is false


//strict check ===
console.log("2" == 2)  //true
console.log("2" === 2) // false
console.log(2 === 2)  // true