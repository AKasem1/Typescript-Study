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