# JavaScript Interview Questions and Answers

## Basic Concepts

### 1. What is JavaScript?
JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript enables interactive web pages and is an essential part of web applications. It is:
- Dynamic and weakly typed
- Prototype-based and multi-paradigm
- Supports object-oriented, imperative, and functional programming styles
- Can be used both on the client-side and server-side (Node.js)
- Has a rich ecosystem of libraries and frameworks

### 2. What is an Interpreted Language?
An interpreted language is a programming language that executes instructions directly without requiring a separate compilation step. Key characteristics include:
- Code is executed line by line at runtime
- No separate compilation phase is needed
- Generally slower than compiled languages
- Platform independence
- Easier debugging as errors are caught at runtime
- Examples include JavaScript, Python, and Ruby

### 3. Data Types in JavaScript
JavaScript supports the following data types:

1. **Primitive Types:**
   - String: Textual data (e.g., "Hello", 'World')
   - Number: Both integers and floating-point numbers (e.g., 42, 3.14)
   - Boolean: true or false
   - Null: Represents intentional absence of value
   - Undefined: Represents uninitialized variables
   - Symbol: Unique and immutable value (ES6)
   - BigInt: Arbitrary precision integers (ES2020)

2. **Reference Type:**
   - Object: Collection of properties
   - Arrays: Special type of object for ordered collections
   - Functions: Callable objects
   - Dates: Date and time handling
   - RegExp: Regular expressions

### 4. Variable Declaration
JavaScript provides three ways to declare variables:

1. **var:**
   ```javascript
   var x = 10;
   ```
   - Function-scoped
   - Can be redeclared
   - Can be updated
   - Hoisted with undefined value

2. **let:**
   ```javascript
   let y = 20;
   ```
   - Block-scoped
   - Cannot be redeclared
   - Can be updated
   - Not hoisted (temporal dead zone)

3. **const:**
   ```javascript
   const z = 30;
   ```
   - Block-scoped
   - Cannot be redeclared
   - Cannot be updated
   - Not hoisted (temporal dead zone)

### 5. Differences between let, var, and const

1. **Scope:**
   - `var`: Function-scoped
   - `let` and `const`: Block-scoped

2. **Hoisting:**
   - `var`: Hoisted with undefined value
   - `let` and `const`: Not hoisted (temporal dead zone)

3. **Reassignment:**
   - `var` and `let`: Can be reassigned
   - `const`: Cannot be reassigned

4. **Redeclaration:**
   - `var`: Can be redeclared
   - `let` and `const`: Cannot be redeclared

### 6. Equality Operators

1. **== (Loose Equality):**
   - Performs type coercion
   - Compares values after conversion
   - Example: `"5" == 5` returns true

2. **=== (Strict Equality):**
   - No type coercion
   - Compares both value and type
   - Example: `"5" === 5` returns false

### 7. Comments in JavaScript
JavaScript supports two types of comments:

1. **Single-line Comments:**
   ```javascript
   // This is a single-line comment
   ```

2. **Multi-line Comments:**
   ```javascript
   /* This is a
      multi-line
      comment */
   ```

### 8. Primitive Data Types
JavaScript has six primitive data types:

1. **String:**
   - Represents textual data
   - Can be created using single or double quotes
   - Example: `"Hello"` or `'World'`

2. **Number:**
   - Represents both integers and floating-point numbers
   - Example: `42`, `3.14`, `-1`

3. **Boolean:**
   - Represents logical values
   - Example: `true` or `false`

4. **Null:**
   - Represents intentional absence of value
   - Example: `null`

5. **Undefined:**
   - Represents uninitialized variables
   - Example: `undefined`

6. **Symbol:**
   - Represents unique identifiers
   - Example: `Symbol('description')`

### 9. typeof Operator
The `typeof` operator returns a string indicating the type of the operand:

```javascript
typeof "Hello"     // returns "string"
typeof 42          // returns "number"
typeof true        // returns "boolean"
typeof undefined   // returns "undefined"
typeof null        // returns "object" (this is a known bug)
typeof Symbol()    // returns "symbol"
typeof {}          // returns "object"
typeof []          // returns "object"
typeof function(){} // returns "function"
```

### 10. Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top of their scope. Key points:

1. **Variable Hoisting:**
   - `var` declarations are hoisted with undefined value
   - `let` and `const` declarations are not hoisted (temporal dead zone)

2. **Function Hoisting:**
   - Function declarations are fully hoisted
   - Function expressions are not hoisted

Example:
```javascript
console.log(x); // undefined
var x = 5;

console.log(y); // ReferenceError
let y = 5;
```

### 11. NaN (Not-a-Number)
NaN is a special value in JavaScript that represents an invalid number. Key characteristics:

1. **Properties:**
   - `NaN` is the only value that is not equal to itself
   - `typeof NaN` returns "number"
   - `isNaN()` function checks if a value is NaN

2. **Common causes:**
   - Invalid mathematical operations
   - Converting invalid strings to numbers
   - Undefined mathematical operations

Example:
```javascript
console.log(0/0);        // NaN
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
```

## Advanced Concepts

### 12. Closures
A closure is a function that has access to variables in its outer scope, even after the outer function has returned. Key aspects:

1. **Definition:**
   ```javascript
   function outer() {
       let count = 0;
       return function inner() {
           count++;
           return count;
       };
   }
   ```

2. **Use Cases:**
   - Data privacy
   - Function factories
   - Event handlers
   - Currying
   - Module pattern

3. **Benefits:**
   - Encapsulation
   - State management
   - Memory efficiency
   - Modular code

### 13. Higher-Order Functions
Functions that either:
1. Take one or more functions as arguments
2. Return a function as their result

Examples:
```javascript
// Taking function as argument
function map(array, fn) {
    return array.map(fn);
}

// Returning function
function multiply(x) {
    return function(y) {
        return x * y;
    };
}
```

### 14. Callback Functions
Functions passed as arguments to other functions. Key points:

1. **Definition:**
   ```javascript
   function processData(data, callback) {
       // Process data
       callback(result);
   }
   ```

2. **Common Use Cases:**
   - Asynchronous operations
   - Event handling
   - Array methods (map, filter, reduce)

3. **Potential Issues:**
   - Callback hell
   - Error handling
   - Synchronous vs asynchronous callbacks

### 15. Event Delegation
A technique where a single event listener is attached to a parent element to handle events for multiple child elements. Benefits:

1. **Performance:**
   - Reduces memory usage
   - Improves performance
   - Handles dynamic elements

2. **Implementation:**
   ```javascript
   document.getElementById('parent').addEventListener('click', function(e) {
       if (e.target.matches('.child')) {
           // Handle event
       }
   });
   ```

### 16. Prototypal Inheritance
JavaScript's inheritance mechanism based on prototypes. Key concepts:

1. **Prototype Chain:**
   - Objects inherit from other objects
   - Properties and methods are looked up through the chain
   - `Object.prototype` is the end of the chain

2. **Implementation:**
   ```javascript
   function Person(name) {
       this.name = name;
   }
   Person.prototype.sayHello = function() {
       console.log(`Hello, ${this.name}`);
   };
   ```

### 17. The `this` Keyword
`this` refers to the current execution context. Its value depends on:

1. **Global Context:**
   - In non-strict mode: window object
   - In strict mode: undefined

2. **Function Context:**
   - Regular functions: depends on how called
   - Arrow functions: inherits from enclosing scope
   - Methods: object that owns the method

3. **Binding:**
   - `call()`
   - `apply()`
   - `bind()`

## Asynchronous Programming

### 18. Asynchronous Operations
JavaScript handles asynchronous operations through:

1. **Callbacks:**
   ```javascript
   setTimeout(() => {
       console.log('Async operation');
   }, 1000);
   ```

2. **Promises:**
   ```javascript
   fetch('url')
       .then(response => response.json())
       .then(data => console.log(data));
   ```

3. **async/await:**
   ```javascript
   async function getData() {
       const response = await fetch('url');
       const data = await response.json();
       return data;
   }
   ```

### 19. Promises
Objects representing asynchronous operations. Key features:

1. **States:**
   - Pending
   - Fulfilled
   - Rejected

2. **Methods:**
   - `then()`
   - `catch()`
   - `finally()`
   - `Promise.all()`
   - `Promise.race()`

3. **Example:**
   ```javascript
   const promise = new Promise((resolve, reject) => {
       // Async operation
       if (success) {
           resolve(value);
       } else {
           reject(error);
       }
   });
   ```

### 20. Event Loop
JavaScript's concurrency model. Components:

1. **Call Stack:**
   - LIFO structure
   - Executes synchronous code

2. **Web APIs:**
   - Browser features
   - Asynchronous operations

3. **Callback Queue:**
   - Stores callback functions
   - FIFO structure

4. **Microtask Queue:**
   - Higher priority than callback queue
   - Stores promise callbacks

### 21. Microtasks and Macrotasks
Two types of tasks in the event loop:

1. **Microtasks:**
   - Promise callbacks
   - process.nextTick
   - MutationObserver
   - Higher priority

2. **Macrotasks:**
   - setTimeout
   - setInterval
   - setImmediate
   - I/O operations
   - Lower priority

### 22. Timing Functions
Different ways to schedule code execution:

1. **setTimeout:**
   ```javascript
   setTimeout(() => {
       console.log('After delay');
   }, 1000);
   ```

2. **setInterval:**
   ```javascript
   setInterval(() => {
       console.log('Repeated execution');
   }, 1000);
   ```

3. **requestAnimationFrame:**
   ```javascript
   requestAnimationFrame(() => {
       // Animation code
   });
   ```

## Modules and Performance

### 23. JavaScript Modules
Modern way to organize code:

1. **Export:**
   ```javascript
   export const name = 'Module';
   export function helper() {}
   ```

2. **Import:**
   ```javascript
   import { name, helper } from './module.js';
   ```

3. **Benefits:**
   - Code organization
   - Encapsulation
   - Reusability
   - Tree shaking

### 24. CommonJS vs ES6 Modules
Two module systems:

1. **CommonJS:**
   ```javascript
   // Export
   module.exports = { name: 'Module' };
   
   // Import
   const module = require('./module');
   ```

2. **ES6 Modules:**
   ```javascript
   // Export
   export const name = 'Module';
   
   // Import
   import { name } from './module.js';
   ```

### 25. Performance Optimization
Techniques to improve performance:

1. **Code Optimization:**
   - Minification
   - Bundling
   - Tree shaking

2. **Runtime Optimization:**
   - Debouncing
   - Throttling
   - Memoization

3. **Resource Management:**
   - Lazy loading
   - Code splitting
   - Caching

### 26. Data Handling
Advanced data manipulation:

1. **BigInt:**
   ```javascript
   const bigInt = BigInt(9007199254740991);
   ```

2. **Floating-point Precision:**
   ```javascript
   const num = 0.1 + 0.2;
   console.log(num.toFixed(2)); // "0.30"
   ```

3. **Data Structures:**
   - Maps
   - Sets
   - WeakMap
   - WeakSet

