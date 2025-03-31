### Studying TypeScript

I am currently studying **TypeScript** from the following resource:  
[TypeScript Tutorial for Beginners - The Net Ninja](https://youtube.com/playlist?list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN&si=Q1ynwHMieG2iCs8r)


### **TypeScript** Facts

- **TypeScript** is a superset of JavaScript that adds static typing.
- It allows you to define types for variables, function parameters, and return values.
- This helps catch errors at compile time rather than runtime.
- **TypeScript** is essentially **JavaScript** with additional annotations that define value types.
- **JavaScript** is loosely typed, and ****TypeScript**** is strongly typed.
- **TypeScript** files have a `.ts` extension.
- To compile **TypeScript** to JavaScript, use the command: `tsc filename.ts`.
- To run the compiled JavaScript, use the command: `node filename.js`.
- **TypeScript** can be installed globally using npm: `npm install -g typescript`.
- **TypeScript** can be used with any JavaScript codebase and can be gradually adopted.
- **TypeScript** is developed and maintained by Microsoft.
- **TypeScript** is open-source and has a large community of contributors.
- **TypeScript** is used by many large companies, including Microsoft, Google, and Airbnb.
- **TypeScript** is used in many popular frameworks and libraries, including Angular, React, and Vue.js.
- **TypeScript** is used in many popular tools, including Visual Studio Code, WebStorm, and Atom.
- **TypeScript** is used in many popular build tools, including Webpack, Gulp, and Grunt.
- **TypeScript** is used in many popular testing frameworks, including Jest, Mocha, and Jasmine.
- **TypeScript** is used in many popular deployment tools, including Docker, Kubernetes, and Heroku.
- **TypeScript** is used in many popular CI/CD tools, including Jenkins, Travis CI, and CircleCI.
- **TypeScript** is used in many popular cloud platforms, including AWS, Azure, and Google Cloud.
- **TypeScript** is used in many popular databases, including MongoDB, PostgreSQL, and MySQL.
- **TypeScript** is used in many popular ORMs, including TypeORM, Sequelize, and Mongoose.
- **TypeScript** is used in many popular state management libraries, including Redux, MobX, and Vuex.
- **TypeScript** is used in many popular routing libraries, including React Router, Vue Router, and Angular Router.
- **TypeScript** is used in many popular form libraries, including Formik, React Hook Form, and VeeValidate.
- **TypeScript** is used in many popular animation libraries, including GSAP, Anime.js, and Framer Motion.
- **TypeScript** is used in many popular testing libraries, including Enzyme, React Testing Library, and Cypress.
- **TypeScript** is used in many popular CSS-in-JS libraries, including Styled Components, Emotion, and JSS.

### Benefits of **TypeScript**:
1. **Better Error Feedback**  
    **TypeScript** provides better error detection during development.
2. **Improved Autocompletion and Code Hints**  
    Visual Studio Code offers enhanced autocompletion and code hints because it knows the type of every piece of data being used.
3. **Custom Types**  
    **TypeScript** allows the creation of custom types in addition to standard types.
4. **Self-Documenting Code**  
    Code becomes self-documenting because all data types are explicitly defined, making it easier to look up types, functions, and other definitions.

### Running a **TypeScript** File
To run a **TypeScript** file, you need to compile it into a JavaScript file first and then execute the JavaScript file. Follow these steps:

1. **Compile the **TypeScript** File**  
    Use the following command to compile a **TypeScript** file into JavaScript:  
    ```bash
    tsc filename.ts
    ```

2. **Run the JavaScript File**  
    After compilation, run the generated JavaScript file using Node.js:  
    ```bash
    node filename.js
    ```

### `null` vs `undefined`
- **`null`**: Represents the intentional absence of a value.  
- Once a variable is explicitly assigned a `null` or `undefined` type, its type cannot be changed unless explicitly cast or reassigned with a compatible type. This ensures stricter type safety in **TypeScript**.

### `any` Type

The `any` type allows a variable to hold any type of value, and its type can change dynamically. While this provides flexibility, it diminishes the benefits of using **TypeScript**, as it reduces type safety and error feedback.

#### When to Use `any`
- **Migration from JavaScript to TypeScript**: Using `any` can help avoid initial errors when transitioning a codebase from JavaScript to TypeScript.
- **Temporary Workarounds**: It can be used as a temporary solution during development when the exact type is unknown.

#### Why to Avoid Overusing `any`
- **Reduced Error Detection**: Frequent use of `any` undermines **TypeScript's** ability to catch errors during development.
- **Loss of Type Safety**: It negates the advantages of static typing, making the code less predictable and harder to maintain.

> **Tip**: Use `any` sparingly and prefer stricter types whenever possible to fully leverage the benefits of **TypeScript**.

### Interfaces

Interfaces are a way to define a specific structure that data must adhere to. They can be used with classes, objects, or even other interfaces. Interfaces help enforce consistency and provide better type checking in **TypeScript**.

#### Example:
```typescript
interface Person {
    name: string;
    age: number;
    greet(): void;
}

const user: Person = {
    name: "John",
    age: 30,
    greet() {
        console.log("Hello!");
    },
};
```

### Union Types

Union types allow a variable to hold one of several specified types. This is useful when a value can belong to multiple types, providing flexibility while maintaining type safety.

#### Example:
```typescript
let value: string | number;

value = "Hello"; // Valid
value = 42;      // Valid
// value = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
```



### Type Guards

- Type Guards is just a fancy way of saying we are going to check for the type of something before trying to execute some code