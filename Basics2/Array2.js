const books=['winners','calmmind','habits']
const dc=['hello','hii','cool']

// books.push(dc)
// console.log(books)
const newArray=books.concat(dc)// it returns new Array
// console.log(newArray)

const allNew=[...books,...dc] // spread method which will add in array 
// console.log(allNew)

const anotherArray=[1,2,3,4,5,[6,7,8,9],10,[11,12,13,[14,15]]]
const usearray=anotherArray.flat(Infinity)
// console.log(usearray)

// console.log(Array.isArray("Handral"))
// console.log(Array.from("Handral")) // convert into array
// console.log(Array.from({name:"Jadesha"})) // returns empty list

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))


