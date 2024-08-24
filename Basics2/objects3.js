// Destructuring

const course={
    coursename:"JS",
    price:"999",
    courseInstructor:"Handral"
}

// console.log(course['courseInstructor'])

const {courseInstructor: instructor}=course
console.log(instructor)

