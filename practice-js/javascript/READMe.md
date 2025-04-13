# JavaScript Interview Questions and Answers

## Basic Concepts

### 1. What is JavaScript?
JavaScript is a high-level, interpreted programming language primarily used for creating interactive web pages. It's one of the core technologies of the World Wide Web alongside HTML and CSS. JavaScript enables dynamic content, interactive features, and complex web applications. It's also used in non-browser environments like Node.js for server-side development.

Key characteristics:
- Dynamic typing
- First-class functions
- Prototype-based object orientation
- Event-driven programming
- Cross-platform compatibility

### 2. What is an Interpreted Language?
An interpreted language executes instructions directly without a separate compilation step. JavaScript is typically interpreted, though modern engines use Just-In-Time (JIT) compilation for better performance.

Key points:
- Code is executed line by line
- No separate compilation phase
- Slower execution compared to compiled languages
- Platform independence
- Easier debugging

### 3. Data Types in JavaScript
JavaScript supports various data types, which can be categorized into primitive and non-primitive types:

Primitive Types:
- **String**: Text data (e.g., "Hello", 'World')
- **Number**: Both integers and floating-point numbers (e.g., 42, 3.14)
- **Boolean**: Logical values (true/false)
- **Null**: Intentional absence of any object value
- **Undefined**: Variable declared but not assigned
- **Symbol**: Unique identifier (ES6)
- **BigInt**: Large integers (ES2020)

Non-Primitive Type:
- **Object**: Collection of properties (including arrays, functions, and regular objects)

### 4. Variable Declaration
JavaScript provides three ways to declare variables, each with different scoping rules:

```javascript
// var - function-scoped, can be redeclared and updated
var oldWay = "function scoped";

// let - block-scoped, can be updated but not redeclared
let modernWay = "block scoped";

// const - block-scoped, cannot be updated or redeclared
const constantWay = "immutable";
```

### 5. Differences between let, var, and const
Detailed comparison:

1. **var**:
   - Function-scoped
   - Can be redeclared
   - Can be updated
   - Hoisted with undefined value
   - No block scope

2. **let**:
   - Block-scoped
   - Cannot be redeclared
   - Can be updated
   - Not hoisted
   - Has block scope

3. **const**:
   - Block-scoped
   - Cannot be redeclared
   - Cannot be updated
   - Not hoisted
   - Has block scope

### 6. Equality Operators
JavaScript provides two types of equality operators:

1. **Loose Equality (==)**:
   - Performs type coercion
   - Compares values after converting types
   - Example: `"5" == 5` returns true

2. **Strict Equality (===)**:
   - No type coercion
   - Compares both value and type
   - Example: `"5" === 5` returns false

### 7. Comments in JavaScript
JavaScript supports two types of comments:

```javascript
// Single-line comment
// Used for brief explanations

/* Multi-line comment
   Used for longer explanations
   or documentation */
```

### 8. Primitive Data Types
Detailed explanation of each primitive type:

1. **String**:
   - Represents textual data
   - Can be created using single or double quotes
   - Immutable
   - Example: `"Hello"`, `'World'`

2. **Number**:
   - Represents both integers and floating-point numbers
   - IEEE 754 double-precision format
   - Example: `42`, `3.14`, `-1`

3. **Boolean**:
   - Represents logical values
   - Only two values: `true` and `false`
   - Used in conditional statements

4. **Null**:
   - Represents intentional absence of value
   - Type of null is "object" (historical bug)
   - Example: `let value = null;`

5. **Undefined**:
   - Represents uninitialized variables
   - Default return value of functions
   - Example: `let value; console.log(value); // undefined`

6. **Symbol**:
   - Unique and immutable identifier
   - Used as object property keys
   - Example: `const sym = Symbol('description');`

### 9. typeof Operator
The `typeof` operator returns a string indicating the type of the operand:

```javascript
typeof "Hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (historical bug)
typeof Symbol()    // "symbol"
typeof {}          // "object"
typeof []          // "object"
typeof function(){} // "function"
```

### 10. Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top of their scope:

```javascript
// Variable hoisting
console.log(x); // undefined
var x = 5;

// Function hoisting
sayHello(); // "Hello!"
function sayHello() {
    console.log("Hello!");
}
```

Key points:
- Only declarations are hoisted, not initializations
- `let` and `const` are hoisted but not initialized
- Function declarations are fully hoisted
- Function expressions are not hoisted

### 11. NaN (Not-a-Number)
NaN is a special value representing "Not-a-Number":

```javascript
// Examples of NaN
console.log(0 / 0);        // NaN
console.log("abc" * 3);    // NaN
console.log(Math.sqrt(-1)); // NaN

// Checking for NaN
console.log(isNaN(NaN));   // true
console.log(Number.isNaN(NaN)); // true
```

## Advanced Concepts

### 12. Closures
A closure is a function that remembers and can access variables from its outer scope even after the outer function has returned:

```javascript
function createCounter() {
    let count = 0;  // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
```

#### Uses of Closures:
1. **Data Encapsulation and Private Variables**
   ```javascript
   function createPerson(name) {
       let age = 0;  // Private variable
       
       return {
           getName: () => name,
           getAge: () => age,
           setAge: (newAge) => age = newAge
       };
   }
   ```

2. **Maintaining State**
   ```javascript
   function createAdder(initial) {
       let sum = initial;
       return function(num) {
           sum += num;
           return sum;
       };
   }
   ```

3. **Event Handling**
   ```javascript
   function setupButton(buttonId, message) {
       document.getElementById(buttonId).addEventListener('click', function() {
           alert(message);  // Closure captures message
       });
   }
   ```

4. **Functional Programming**
   ```javascript
   // Currying
   function multiply(a) {
       return function(b) {
           return a * b;
       };
   }
   
   // Memoization
   function memoize(fn) {
       const cache = {};
       return function(...args) {
           const key = JSON.stringify(args);
           if (cache[key]) return cache[key];
           return cache[key] = fn.apply(this, args);
       };
   }
   ```

### 13. Higher-Order Functions
Functions that either take other functions as arguments or return functions:

```javascript
// Function that takes another function as argument
function map(array, fn) {
    return array.map(fn);
}

// Function that returns another function
function multiply(x) {
    return function(y) {
        return x * y;
    };
}
```

### 14. Callback Functions
Functions passed as arguments to be executed later:

```javascript
// Synchronous callback
function processArray(arr, callback) {
    return arr.map(callback);
}

// Asynchronous callback
setTimeout(function() {
    console.log("Executed after 1 second");
}, 1000);
```

### 15. Event Delegation
A technique for handling events efficiently:

```javascript
// Instead of attaching event listeners to each button
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleClick);
});

// Use event delegation
document.addEventListener('click', function(e) {
    if (e.target.matches('button')) {
        handleClick(e);
    }
});
```

### 16. Prototypal Inheritance
JavaScript's inheritance mechanism:

```javascript
// Constructor function
function Person(name) {
    this.name = name;
}

// Adding method to prototype
Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

// Creating instance
const person = new Person("John");
person.greet(); // "Hello, I'm John"
```

### 17. The `this` Keyword
The `this` keyword's value depends on how a function is called:

```javascript
// Global context
console.log(this); // Window (browser) or global (Node.js)

// Object method
const person = {
    name: "John",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

// Constructor
function Person(name) {
    this.name = name;
}

// Arrow function (lexical this)
const greet = () => {
    console.log(this.name);
};
```

## Asynchronous Programming

### 18. Asynchronous Operations
JavaScript handles async operations through various mechanisms:

```javascript
// Callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

// Promises
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

// async/await
async function fetchDataAsync() {
    const data = await fetchDataPromise();
    console.log(data);
}
```

### 19. Promises
Objects representing async operations:

```javascript
const promise = new Promise((resolve, reject) => {
    // Async operation
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

### 20. Event Loop
JavaScript's concurrency model:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout
```

### 21. Microtasks and Macrotasks
Different types of async tasks:

```javascript
// Macrotask
setTimeout(() => {
    console.log("Macrotask");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log("Microtask");
});
```

### 22. Timing Functions
Different ways to schedule code execution:

```javascript
// setTimeout - executes after delay
setTimeout(() => {
    console.log("After 1 second");
}, 1000);

// setInterval - executes repeatedly
setInterval(() => {
    console.log("Every 1 second");
}, 1000);

// requestAnimationFrame - for animations
requestAnimationFrame(() => {
    console.log("Next frame");
});
```

## Modules and Performance

### 23. JavaScript Modules
Modern way to organize code:

```javascript
// math.js
export function add(x, y) {
    return x + y;
}

// main.js
import { add } from './math.js';
```

### 24. CommonJS vs ES6 Modules
Different module systems:

```javascript
// CommonJS
const module = require('./module');
module.exports = something;

// ES6 Modules
import { something } from './module';
export default something;
```

### 25. Performance Optimization
Techniques for better performance:

```javascript
// Debouncing
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttling
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
```

### 26. Data Handling
Handling different data types:

```javascript
// BigInt
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);

// Floating-point precision
const num = 0.1 + 0.2;
console.log(num.toFixed(2)); // "0.30"