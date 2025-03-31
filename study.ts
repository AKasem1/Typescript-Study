// TypeScript Basics
let age: number = 30
let firstName: string = "John"
let isFictional: boolean

age = 31
firstName = "Jane"
isFictional = true

// Type Inference
let planet = "Earth"
let moons = 1
let isLarge = false

// Type Inference NULL AND UNDEFINED
let something: null
let nothing: undefined


//Arrays
let names: string[] = ["John", "Jane", "Doe"]
let ages: number[] = [30, 31, 32]

//names.push(true) // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.
//ages.push("thirty") // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
names.push("Alice")
ages.push(33)

//Type inference with arrays
let colors = ["red", "green", "blue"]
let numbers = [1, 2, 3]
let mixed = [1, "two", true]

//Objects
let person: { name: string; age: number; isStudent: boolean } = {
    name: "John",
    age: 30,
    isStudent: false,
}

person.name = "Jane"
person.age = 31
person.isStudent = true

//Type inference with objects
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
}

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
}

book.title = "To Kill a Mockingbird"
book.author = "Harper Lee"
book.publishedYear = 1960


//***Functions*****//

// Function with explicit types
function addTwoNumbers(a: number, b: number) {
    return a + b
}

//We can tell typescript what the return type of the function is by using a colon and the type after the parameter list.
// This is called a return type annotation.
function substractTwoNumbers(a: number, b: number): number {
    return a - b
}

function addAllNumbers(numbers: number[]) {
    const total = numbers.reduce((a, b) => a + b, 0)
    console.log(`Total: ${total}`)
}

// return type inference
function multiply(a: number, b: number) {
    return a * b
}


//Any type
let anything: any
let title
anything = 42
anything = "Hello"
title = "TypeScript Basics"
title = 123

//Any type with arrays
let mixedArray: any[] = [1, "two", true]
mixedArray.push({ name: "John" })

//Any type with objects
let mixedObject: { [key: string]: any } = {
    name: "John",
    age: 30,
    isStudent: false,
}
mixedObject.name = "Jane"
mixedObject.age = 31
mixedObject.isStudent = true
mixedObject.address = "123 Main St" // Adding a new property dynamically

//Any type with functions
function logMessage(message: any) {
    console.log(message)
}
logMessage("Hello, World!")
logMessage(42)
logMessage({ name: "John", age: 30 })

function logMessageWithReturn(message: any): any {
    console.log(message)
    return message
}
logMessageWithReturn("Hello, World!")
logMessageWithReturn(42)


//Tuples
let personTuple: [string, number] = ["John", 30]
personTuple[0] = "Jane"
personTuple[1] = 31
//personTuple[2] = true // Error: Tuple type '[string, number]' of length '2' has no element at index '2'.

//Tuples Real World Example (HSLA color) & Coords
let hsla: [number, string, string, number];
hsla = [200, '100%', '50%', 1];

let xy: [number, number];
xy = [94.7, 20.1];

function useCoords(): [number, number] {
  // get coords
  const lat = 100;
  const long = 50;
  return [lat, long];
}

const [lat, long] = useCoords();


//Named tuples
let Point: [x: number, y: number]
Point = [10, 20]
Point[0] = 30
Point[1] = 40
let Point2D: [x: number, y: number]
Point2D = [50, 60]
Point2D[0] = 70
Point2D[1] = 80

let Point3D: [x: number, y: number]
Point3D = [90, 100]
Point3D[0] = 110
Point3D[1] = 120



//Interfaces
interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg"
}

interface Post {
    title: string,
    body: string,
    tags: string[],
    createdAt: Date,
    author: Author
}

const newPost: Post = {
    title: "Understanding TypeScript",
    body: "This post explains the basics of TypeScript.",
    tags: ["typescript", "programming", "basics"],
    createdAt: new Date(),
    author: authorOne
}

//Interfaces as function arguments types
function createPost(post: Post): void {
    console.log(`Post created: ${post.title} by ${post.author.name}`)
}

createPost(newPost)

//Interfaces with arrays
let posts: Post[] = []
posts.push(newPost)