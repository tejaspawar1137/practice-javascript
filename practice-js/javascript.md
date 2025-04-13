# JavaScript Interview Questions and Answers

## JavaScript Interview Questions for Freshers

### 1. What are the different data types present in JavaScript?

JavaScript has two categories of data types:

**Primitive Data Types:**
- **String**: Represents textual data, e.g., `"Hello"`, `'World'`
- **Number**: Represents numeric values, e.g., `42`, `3.14`
- **Boolean**: Represents logical values, either `true` or `false`
- **Undefined**: Represents a variable that has been declared but not assigned a value
- **Null**: Represents the intentional absence of any object value
- **Symbol**: Represents a unique identifier (introduced in ES6)
- **BigInt**: Represents integers of arbitrary precision (introduced in ES2020)

**Non-Primitive Data Types:**
- **Object**: Represents a collection of key-value pairs
- **Array**: Represents a list-like collection of values (technically a specialized object)
- **Function**: Represents a callable object (technically a specialized object)
- **Date**: Represents dates and times
- **RegExp**: Represents regular expressions

**Example:**
```javascript
// Primitive data types
let name = "John";            // String
let age = 25;                 // Number
let isStudent = true;         // Boolean
let job = undefined;          // Undefined
let salary = null;            // Null
let id = Symbol("id");        // Symbol
let bigNumber = 9007199254740991n; // BigInt

// Non-primitive data types
let person = {name: "John", age: 25};  // Object
let numbers = [1, 2, 3, 4, 5];         // Array
let greet = function() { console.log("Hello"); }; // Function
```

### 2. Explain Hoisting in JavaScript

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution. This means that you can use variables and functions before they are declared in the code.

**Important aspects of hoisting:**

1. **Variable hoisting:**
   - Only the declarations (not initializations) are hoisted for `var` variables
   - `let` and `const` variables are hoisted but not initialized (resulting in a Temporal Dead Zone)

2. **Function hoisting:**
   - Function declarations are completely hoisted
   - Function expressions are not hoisted

**Examples:**

```javascript
// Variable hoisting
console.log(x); // undefined (not an error)
var x = 5;
console.log(x); // 5

// The above code behaves as if it were written:
var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5

// Function hoisting
sayHello(); // "Hello" (works fine)
function sayHello() {
  console.log("Hello");
}

// Function expression
sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi");
};
```

### 3. Why do we use the word "debugger" in JavaScript?

The `debugger` statement is used to pause code execution and invoke the debugging functionality of the browser. When the browser's developer console is open, the JavaScript execution will pause at the `debugger` statement, allowing you to:

1. Inspect variable values at that point in execution
2. Step through code line by line
3. Set watches on variables
4. View the call stack
5. Continue execution or step over functions

**Example:**
```javascript
function calculateTotal(price, tax) {
  debugger; // Execution will pause here when dev tools are open
  const total = price + (price * tax);
  return total;
}

const finalPrice = calculateTotal(100, 0.07);
```

This is particularly useful for:
- Tracking down bugs
- Understanding code flow
- Inspecting variables at specific points in execution
- Troubleshooting complex applications

### 4. Difference between "==" and "===" operators

JavaScript has two comparison operators for equality:

**1. Loose Equality (==):**
- Compares values after attempting type conversion
- Performs type coercion to make operands of the same type
- Then compares the converted values

**2. Strict Equality (===):**
- Compares both value and type
- No type coercion is performed
- Returns true only if both operands are of the same type and have the same value

**Examples:**
```javascript
// Loose equality examples
console.log(5 == "5");     // true (string "5" is converted to number 5)
console.log(0 == false);   // true (false is converted to 0)
console.log(null == undefined); // true (special case)

// Strict equality examples
console.log(5 === "5");    // false (different types)
console.log(0 === false);  // false (different types)
console.log(null === undefined); // false (different types)
```

**Best practice:** Always use `===` (strict equality) to avoid unexpected behavior from type coercion.

### 5. Difference between var and let keyword in JavaScript

The `var` and `let` keywords are used to declare variables in JavaScript, but they have several key differences:

| Feature | `var` | `let` |
|---------|-------|-------|
| **Scope** | Function-scoped | Block-scoped |
| **Hoisting** | Hoisted and initialized with `undefined` | Hoisted but not initialized (Temporal Dead Zone) |
| **Re-declaration** | Allowed | Not allowed in same scope |
| **Global object property** | Creates property on global object when declared globally | Does not create property on global object |

**Examples:**

```javascript
// Scope
function scopeTest() {
  var functionScoped = "I am function scoped";
  
  if (true) {
    var varInBlock = "I am also function scoped";
    let letInBlock = "I am block scoped";
    
    console.log(letInBlock); // "I am block scoped"
  }
  
  console.log(varInBlock); // "I am also function scoped"
  console.log(letInBlock); // ReferenceError: letInBlock is not defined
}

// Hoisting
console.log(varVariable); // undefined (hoisted)
console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
var varVariable = "I am var";
let letVariable = "I am let";

// Re-declaration
var user = "John";
var user = "Jane"; // Allowed
let name = "John";
let name = "Jane"; // SyntaxError: Identifier 'name' has already been declared
```

### 6. Explain Implicit Type Coercion in JavaScript

Implicit type coercion is the automatic conversion of values from one data type to another during operations or comparisons. JavaScript is a loosely typed language and often performs implicit type coercion to make operations work.

**Common scenarios:**

1. **String conversion:**
   ```javascript
   let result = "3" + 2;  // "32" (number is converted to string)
   let result2 = 1 + "2"; // "12" (number is converted to string)

   let result = "3" + 2; // this is going to be string converstion
   let result2 = 1 + "3" // this is also going to be string conversion
   ```

2. **Numeric conversion:**
   ```javascript
   let result = "3" - 2;  // 1 (string is converted to number)
   let result2 = "5" * "2"; // 10 (both strings are converted to numbers)
   let result = "3" - 2;
   let result = "5" - 2;
   ```

3. **Boolean conversion:**
   ```javascript
   let result = "hello" || "";  // "hello" (strings are converted to boolean)
   let result2 = 0 && 1;        // 0 (numbers are converted to boolean)
   let result = "hello" || ""
   let result = "0 && 1;
   ```

4. **Comparison conversion:**
   ```javascript
   console.log("3" > 2);   // true (string "3" is converted to number 3)
   console.log("3" == 3);  // true (string "3" is converted to number 3)
   console.log(0 == false); // true (both are converted to 0)
   ```

**Best practices:**
- Use `===` (strict equality) to avoid unexpected type coercion
- Explicitly convert types when needed using `String()`, `Number()`, or `Boolean()`
- Be aware of JS type coercion rules when writing conditional logic

### 7. Is JavaScript a statically typed or a dynamically typed language?

JavaScript is a **dynamically typed language**.

**Characteristics of JavaScript's dynamic typing:**

1. **Type checking occurs at runtime:** Types are checked during execution, not at compile time.
2. **Variables can change types:** A variable can hold different types of values during its lifetime.
3. **No explicit type declarations:** You don't need to declare the type of a variable when creating it.
4. **Flexible assignment:** You can assign any type of value to any variable.

**Example:**
```javascript
let variable = 42;       // variable is a number
console.log(typeof variable); // "number"

variable = "Hello";      // now variable is a string
console.log(typeof variable); // "string"

variable = true;         // now variable is a boolean
console.log(typeof variable); // "boolean"

variable = null;         // now variable is null
console.log(typeof variable); // "object" (this is a known quirk in JavaScript)

variable = undefined;    // now variable is undefined
console.log(typeof variable); // "undefined"

variable = { name: "John" }; // now variable is an object
console.log(typeof variable); // "object"
```

**Note:** TypeScript, a superset of JavaScript, provides optional static typing for JavaScript.

### 8. What is NaN property in JavaScript?

`NaN` (Not a Number) is a special value in JavaScript that represents an invalid or unrepresentable numeric result.

**Key characteristics of NaN:**

1. **Result of invalid operations:** It's returned when a mathematical operation cannot produce a meaningful result.
2. **Type is number:** Despite its name, `typeof NaN` returns `"number"`.
3. **Unique equality behavior:** `NaN` is the only JavaScript value that is not equal to itself (`NaN !== NaN`).
4. **Propagates in calculations:** Any operation involving `NaN` will result in `NaN`.

**Examples:**

```javascript
// Operations that result in NaN
console.log(0/0);                // NaN
console.log(parseInt("Hello"));  // NaN
console.log(Math.sqrt(-1));      // NaN

// Type of NaN
console.log(typeof NaN);         // "number"

// Equality behavior
console.log(NaN === NaN);        // false
console.log(NaN == NaN);         // false

// Checking for NaN
console.log(isNaN(NaN));         // true
console.log(isNaN("string"));    // true (converts to NaN first)
console.log(Number.isNaN("string")); // false (checks if it's actually NaN)
console.log(Number.isNaN(NaN));  // true
```

**Best practices:**
- Use `Number.isNaN()` instead of `isNaN()` for more accurate checks
- Be aware that `NaN` propagates through calculations
- Handle `NaN` cases in your code when performing mathematical operations

### 9. Explain passed by value and passed by reference

In JavaScript, how arguments are passed to functions depends on the data type:

**Passed by Value (Primitive Types):**
- Primitive data types (String, Number, Boolean, null, undefined, Symbol, BigInt) are passed by value.
- When a primitive value is passed to a function, a copy of the value is created.
- Changes to the parameter inside the function don't affect the original variable.

**Passed by Reference (Reference Types):**
- Objects (including Arrays and Functions) are passed by reference.
- When an object is passed to a function, a reference to that object is passed.
- Changes to the object's properties inside the function affect the original object.
- However, reassigning the parameter doesn't affect the original reference.

**Examples:**

```javascript
// Passed by value (primitive types)
function updateValue(val) {
  val = 100;
  console.log("Inside function:", val); // 100
}

let x = 10;
console.log("Before function:", x); // 10
updateValue(x);
console.log("After function:", x);  // 10 (unchanged)



// Passed by reference (objects)
function updateObject(obj) {
  obj.name = "Jane"; // Modifies the original object
  console.log("Inside function:", obj); // {name: "Jane"}
}

let person = {name: "John"};
console.log("Before function:", person); // {name: "John"}
updateObject(person);
console.log("After function:", person);  // {name: "Jane"} (changed)

// However, reassigning the parameter doesn't affect the original reference
function replaceObject(obj) {
  obj = {name: "Bob"}; // Creates a new object and assigns it to the parameter
  console.log("Inside function:", obj); // {name: "Bob"}
}

let employee = {name: "Alice"};
console.log("Before function:", employee); // {name: "Alice"}
replaceObject(employee);
console.log("After function:", employee);  // {name: "Alice"} (unchanged)
```

### 10. What is an Immediately Invoked Function in JavaScript?

An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It's a design pattern that allows you to execute code immediately without polluting the global namespace.

**Syntax:**
```javascript
(function() {
  // code to be executed immediately
})();

// or
(function() {
  // code to be executed immediately
}());
```



**Key characteristics:**

1. **Self-executing:** The function executes immediately after being created.
2. **Private scope:** Variables declared inside an IIFE are not accessible from outside.
3. **Avoids global namespace pollution:** Prevents variable name conflicts.
4. **Data encapsulation:** Keeps initialization code private.

**Examples:**

```javascript
// Basic IIFE
(function() {
  console.log("I am executed immediately!");
})();

// IIFE with parameters
(function(name) {
  console.log("Hello, " + name);
})("John");



// IIFE with return value
let result = (function() {
  let x = 10;
  let y = 20;
  return x + y;
})();
console.log(result); // 30

const counter = (function() {
  let count = 0;
  return {
    increment: function() {
      count++
    },
    decremet: function() {
      count--
    },
    getCount: function() {
      return count
    }
  }
})(e)

counter.increment()
counter.decrement();
counter.getCount()
console.log(count,'referenceError')
// IIFE for creating private variables
const counter = (function() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
})();

counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
console.log(count); // ReferenceError: count is not defined
```

**Use cases:**
- Creating private variables and methods
- Avoiding global namespace pollution
- Module pattern implementation
- Executing initialization code

### 11. What do you mean by strict mode in JavaScript and characteristics of JavaScript strict-mode?

StrictMode is designed to catch potential bugs and issues early in the development process, making it easier to identify and fix problems before they impact the user experience.  It was introduced in ECMAScript 5 (ES5).

**How to enable strict mode:**

```javascript
// For entire script
"use strict";

// For a specific function
function myFunction() {
  "use strict";
  // Function body
}
```

**Key characteristics of strict mode:**

1. **Eliminates silent errors:**
   - Turns mistakes into errors (throws exceptions)
   - Prevents accidental globals
   - Makes `eval` safer

2. **Prevents some unsafe actions:**
   - Restricts `delete` operator
   - Prohibits `with` statement
   - Disallows duplicate parameter names

3. **Simplifies variable uses:**
   - Makes `this` behave more predictably
   - Disallows octal syntax and `arguments.callee`

4. **Prepares for future ECMAScript versions:**
   - Reserves keywords that may be used in future versions

**Examples:**

```javascript
// Without strict mode
function withoutStrict() {
  x = 10; // Creates a global variable implicitly
}

// With strict mode
function withStrict() {
  "use strict";
  x = 10; // ReferenceError: x is not defined
}

// Preventing accidental global
function strictExample() {
  "use strict";
  mistypedVariable = 17; // ReferenceError
}

// Making this behave predictably
function strictThisExample() {
  "use strict";
  console.log(this); // undefined (in non-method calls)
}
strictThisExample();

// Without strict mode, this would be the global object

// Preventing duplicate parameters
function strictParams(a, a) { // SyntaxError in strict mode
  "use strict";
  return a + a;
}
```

**Benefits of using strict mode:**
- Catches common coding errors early
- Prevents accidental global variables
- Helps write more secure code
- Makes debugging easier
- Prepares code for future JavaScript versions

### 12. Explain Higher Order Functions in JavaScript

Higher Order Functions (HOFs) are functions that operate on other functions, either by taking them as arguments or by returning them. They are a fundamental concept in functional programming and are widely used in JavaScript.

**Key characteristics:**

1. **Takes function(s) as argument(s)**
2. **Returns a function**
3. **Or both**

**Common examples of built-in HOFs in JavaScript:**

1. **Array.prototype.map():**
   ```javascript
   const numbers = [1, 2, 3, 4];
   const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]
   ```

2. **Array.prototype.filter():**
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
   ```

3. **Array.prototype.reduce():**
   ```javascript
   const numbers = [1, 2, 3, 4];
   const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10
   ```

**Custom HOF examples:**

```javascript
// HOF that takes a function as an argument
function applyOperation(x, y, operation) {
  return operation(x, y);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(applyOperation(5, 3, add));      // 8
console.log(applyOperation(5, 3, multiply)); // 15

// HOF that returns a function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// HOF that both takes and returns functions
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const addOne = x => x + 1;
const square = x => x * x;

const addOneThenSquare = compose(square, addOne);
console.log(addOneThenSquare(2)); // 9 (square(addOne(2)) = square(3) = 9)
```

**Benefits of HOFs:**
- Enable functional programming paradigm
- Promote code reusability
- Allow for better abstraction
- Reduce code duplication
- Make code more declarative and easier to read

### 13. Explain "this" keyword

The `this` keyword in JavaScript refers to the object that is executing the current function. Its value depends on how a function is called, not where it's defined (except for arrow functions).

**Rules for determining `this`:**

1. **Global context:** In the global scope, `this` refers to the global object (window in browsers, global in Node.js).

2. **Function context:** In a regular function, `this` depends on how the function is called:
   - Simple function call: `this` is the global object (in non-strict mode) or `undefined` (in strict mode)
   - Method call: `this` is the object that owns the method
   - Constructor call (with `new`): `this` is the newly created instance
   - Using `call()`, `apply()`, or `bind()`: `this` is explicitly set

3. **Arrow functions:** Arrow functions don't have their own `this`. They inherit `this` from the enclosing lexical context.

**Examples:**

```javascript
// Global context
console.log(this); // Window object (in browser)

// Simple function call
function showThis() {
  console.log(this);
}
showThis(); // Window object (in non-strict mode) or undefined (in strict mode)

// Method call
const user = {
  name: "John",
  greet: function() {
    console.log(this.name);
  }
};
user.greet(); // "John" (this refers to the user object)

// Constructor call
function Person(name) {
  this.name = name;
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
}
const john = new Person("John");
john.sayHello(); // "Hello, my name is John" (this refers to the john instance)

// Call, apply, bind
function introduce(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}
const mary = { name: "Mary" };
introduce.call(mary, "Hi");        // "Hi, I'm Mary"
introduce.apply(mary, ["Hello"]);  // "Hello, I'm Mary"
const maryIntroduce = introduce.bind(mary);
maryIntroduce("Hey");              // "Hey, I'm Mary"

// Arrow functions
const obj = {
  name: "Object",
  regularFunction: function() {
    console.log("Regular function:", this.name);
    
    const arrowFunction = () => {
      console.log("Arrow function:", this.name);
    };
    
    arrowFunction();
  }
};
obj.regularFunction();
// Regular function: Object
// Arrow function: Object (inherits this from regularFunction)
```

**Common pitfalls:**

```javascript
// Loss of context
const user = {
  name: "John",
  greet: function() {
    console.log(this.name);
  }
};

const greetFunction = user.greet;
greetFunction(); // undefined (this is now the global object)

// Solution: bind the function
const boundGreet = user.greet.bind(user);
boundGreet(); // "John"

// Callback functions
const user = {
  name: "John",
  greet: function() {
    setTimeout(function() {
      console.log(this.name); // undefined (this is the global object)
    }, 1000);
  }
};

// Solutions:
// 1. Use arrow function
const user1 = {
  name: "John",
  greet: function() {
    setTimeout(() => {
      console.log(this.name); // "John" (arrow function inherits this)
    }, 1000);
  }
};

// 2. Store this in a variable
const user2 = {
  name: "John",
  greet: function() {
    const self = this;
    setTimeout(function() {
      console.log(self.name); // "John"
    }, 1000);
  }
};
```

### 14. What do you mean by Self Invoking Functions?

Self-invoking functions (also known as Immediately Invoked Function Expressions or IIFEs) are JavaScript functions that execute automatically when they are defined. They don't need to be called explicitly.

**Syntax:**
```javascript
(function() {
  // code to be executed immediately
})();
```

**Key features:**

1. **Executes immediately:** Runs as soon as the browser encounters it.
2. **Creates a private scope:** Variables declared inside are not accessible from outside.
3. **Avoids polluting the global namespace:** Prevents naming conflicts.

**Examples:**

```javascript
// Basic self-invoking function
(function() {
  console.log("I execute immediately!");
})();

// With parameters
(function(name) {
  console.log("Hello, " + name);
})("John");

// With return value
const result = (function() {
  const x = 10;
  const y = 20;
  return x + y;
})();
console.log(result); // 30

// Creating a module with private variables
const counter = (function() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue());  // 2
console.log(counter.decrement()); // 1
```

**Use cases:**
- Module pattern implementation
- Avoiding global namespace pollution
- Creating private variables and functions
- Initialization code that runs once
- Isolating variables from the global scope

### 15. Explain call(), apply() and, bind() methods

These three methods in JavaScript allow you to control what `this` refers to when executing a function.

**1. call() method:**
- Calls a function with a specified `this` value
- Passes arguments individually (comma-separated)
- Executes the function immediately

**Syntax:** `function.call(thisArg, arg1, arg2, ...)`

**2. apply() method:**
- Calls a function with a specified `this` value
- Passes arguments as an array
- Executes the function immediately

**Syntax:** `function.apply(thisArg, [arg1, arg2, ...])`

**3. bind() method:**
- Creates a new function with a specified `this` value
- Passes arguments individually (comma-separated)
- Does not execute the function immediately; returns a new function

**Syntax:** `function.bind(thisArg, arg1, arg2, ...)`

**Examples:**

```javascript
const person = {
  firstName: "John",
  lastName: "Doe"
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

// Using call()
greet.call(person, "Hello", "!"); // "Hello, John Doe!"

// Using apply()
greet.apply(person, ["Hi", "!"]); // "Hi, John Doe!"

// Using bind()
const greetJohn = greet.bind(person, "Hey");
greetJohn("!"); // "Hey, John Doe!"
greetJohn("?"); // "Hey, John Doe?"

// Advanced example: Method borrowing
const numbers = [5, 2, 8, 1, 9];
const max = Math.max.apply(null, numbers); // 9

// Function currying with bind
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**Differences and use cases:**

| Method | Executes immediately | Argument passing | Common use cases |
|--------|----------------------|------------------|------------------|
| `call()` | Yes | Individual arguments | Method borrowing, calling methods with specific context |
| `apply()` | Yes | Array of arguments | Spreading arrays to functions, method borrowing |
| `bind()` | No (returns a function) | Individual arguments + more when called | Creating bound functions, partial application, fixing `this` in callbacks |

### 16. What is the difference between exec() and test() methods in JavaScript?

The `exec()` and `test()` methods are both used with regular expressions in JavaScript, but they serve different purposes:

**1. test() method:**
- Returns a boolean (true/false) indicating whether a match was found
- Simpler and faster when you only need to check for a match
- Doesn't provide information about the match itself

**Syntax:** `regexp.test(string)`

**2. exec() method:**
- Returns an array with match information or null if no match
- Provides detailed information about the match (start position, groups, etc.)
- Can be used to find multiple matches by calling it repeatedly

**Syntax:** `regexp.exec(string)`

**Examples:**

```javascript
// test() example
const pattern = /hello/i;
const str = "Hello World";

console.log(pattern.test(str)); // true

// exec() example
const regExp = /(\w+)\s(\w+)/;
const sentence = "Hello World";
const result = regExp.exec(sentence);

console.log(result); // ["Hello World", "Hello", "World"]
console.log(result[0]); // "Hello World" (full match)
console.log(result[1]); // "Hello" (first capturing group)
console.log(result[2]); // "World" (second capturing group)
console.log(result.index); // 0 (position of match)

// Using exec() to find multiple matches
const globalRegExp = /\d+/g;
const text = "There are 12 months and 365 days in a year.";
let match;

while ((match = globalRegExp.exec(text)) !== null) {
  console.log(`Found ${match[0]} at position ${match.index}`);
}
// Output:
// Found 12 at position 10
// Found 365 at position 25
```

**When to use which:**

- Use `test()` when you only need to check if a pattern exists in a string
- Use `exec()` when you need information about the match such as:
  - Capturing groups
  - Match position
  - Multiple matches (with global flag)
  - Full match data

**Performance consideration:** `test()` is generally faster than `exec()` since it doesn't need to create a results array.

### 17. What is currying in JavaScript?

Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. The curried function returns a new function for each argument until all arguments have been provided and the original function is executed.

**Key characteristics:**

1. **Transformation:** Converts a function of arity n into n functions of arity 1.
2. **Partial application:** Allows you to partially apply a function by fixing some arguments.
3. **Composition:** Makes it easier to compose functions.

**Examples:**

```javascript
// Basic currying example
// Non-curried function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(1, 2, 3)); // 6
console.log(curriedAdd(1)(2)(3)); // 6

// Using arrow functions for a more concise syntax
const curriedAddArrow = a => b => c => a + b + c;
console.log(curriedAddArrow(1)(2)(3)); // 6

// Partial application
const addOne = curriedAdd(1);
const addOneAndTwo = addOne(2);
console.log(addOneAndTwo(3)); // 6

// Practical example: Filtering with different predicates
const filter = predicate => array => array.filter(predicate);

const isEven = num => num % 2 === 0;
const isOdd = num => num % 2 !== 0;
const isPositive = num => num > 0;

const filterEven = filter(isEven);
const filterOdd = filter(isOdd);
const filterPositive = filter(isPositive);

const numbers = [-2, -1, 0, 1, 2, 3, 4, 5];
console.log(filterEven(numbers));    // [-2, 0, 2, 4]
console.log(filterOdd(numbers));     // [-1, 1, 3, 5]
console.log(filterPositive(numbers)); // [1, 2, 3, 4, 5]
```

**Implementing a curry function:**

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));







# JavaScript Interview Questions and Answers

## Basic JavaScript Interview Questions

### 17. What is currying in JavaScript?
Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows you to partially apply a function by fixing some of its arguments.

```javascript
// Non-curried function
function add(a, b) {
  return a + b;
}

// Curried version
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = curriedAdd(5); // Creates a function that adds 5 to its argument
console.log(add5(3)); // Output: 8
```

Currying is useful for:
- Creating specialized functions from more general ones
- Avoiding repeatedly passing the same arguments
- Composing functions
- Implementing functional programming patterns

### 18. What are some advantages of using External JavaScript?
External JavaScript refers to JavaScript code stored in separate .js files and then linked to HTML documents. Advantages include:

1. **Separation of concerns**: Keeps HTML, CSS, and JavaScript separate
2. **Caching**: Browsers can cache external JS files, reducing load times for subsequent page visits
3. **Code reusability**: The same JS file can be used across multiple pages
4. **Maintainability**: Easier to maintain and update code in separate files
5. **Collaboration**: Multiple developers can work on different files simultaneously
6. **Clean HTML**: Keeps HTML documents cleaner and more readable
7. **Delayed loading**: Can be loaded asynchronously or deferred
8. **Version control**: Easier to track changes in separate files

### 19. Explain Scope and Scope Chain in JavaScript
**Scope** refers to the visibility and accessibility of variables in different parts of your code. JavaScript has several types of scope:

1. **Global Scope**: Variables declared outside any function or block are globally accessible
2. **Function/Local Scope**: Variables declared within a function are only accessible inside that function
3. **Block Scope**: Variables declared with `let` and `const` inside a block `{}` are only accessible within that block
4. **Module Scope**: Variables declared in a module are only accessible within that module unless explicitly exported

The **Scope Chain** is the hierarchical chain of nested scopes that JavaScript uses to resolve variable references. When accessing a variable, JavaScript:

1. Looks for the variable in the current scope
2. If not found, it looks in the outer enclosing scope
3. Continues up the chain until it reaches the global scope
4. If the variable is still not found, it returns `undefined` (or throws an error in strict mode)

```javascript
const global = "I'm global";

function outer() {
  const outerVar = "I'm in outer";
  
  function inner() {
    const innerVar = "I'm in inner";
    console.log(innerVar); // Accessible
    console.log(outerVar); // Accessible via scope chain
    console.log(global);   // Accessible via scope chain
  }
  
  inner();
  console.log(innerVar);   // Error: innerVar is not defined
}
```

### 20. Explain Closures in JavaScript
A closure is a combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

Closures allow a function to access variables from its outer scope even after the outer function has returned. They "remember" the environment in which they were created.

```javascript
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

In this example, the inner function maintains access to the `count` variable even after `createCounter` has finished executing. This is because the inner function forms a closure, preserving the lexical environment where `count` exists.

Closures are useful for:
- Data encapsulation and privacy
- Function factories
- Event handlers
- Callback functions
- Module patterns

### 21. Mention some advantages of JavaScript
JavaScript offers numerous advantages:

1. **Versatility**: Can be used for front-end, back-end, mobile, and desktop applications
2. **Ubiquity**: Runs in all modern browsers without plugins
3. **Asynchronous capabilities**: Supports async programming with promises, async/await
4. **Rich ecosystem**: Huge library of frameworks and packages (React, Angular, Vue, Node.js)
5. **Event-driven programming**: Built-in support for event handling
6. **JSON support**: Native handling of JSON data
7. **Dynamic typing**: Flexible variable types
8. **Prototype-based inheritance**: Powerful object-oriented capabilities
9. **First-class functions**: Functions can be assigned to variables, passed as arguments
10. **Just-in-time compilation**: Modern JS engines compile code for performance
11. **Community support**: Large, active developer community
12. **Constant evolution**: Regular updates and new features through ECMAScript

### 22. What are object prototypes?
In JavaScript, prototypes are the mechanism by which objects inherit properties and methods from other objects. Every JavaScript object has a prototype property, which makes inheritance possible.

When you try to access a property of an object, JavaScript first looks for the property in the object itself. If it doesn't find it, it looks in the object's prototype, then in the prototype's prototype, and so on up the prototype chain until it reaches `Object.prototype`.

```javascript
// Constructor function
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}`;
};

const person1 = new Person("Alice");
console.log(person1.greet()); // "Hello, my name is Alice"
```

In this example, the `greet` method is not defined on the `person1` object itself but on its prototype. This makes prototypes memory-efficient since all instances share the same prototype methods.

Key points about prototypes:
- `Object.prototype` is at the top of the prototype chain
- Modern JavaScript uses `Object.create()` and class syntax, but prototypes still work behind the scenes
- The `__proto__` property (now deprecated) or `Object.getPrototypeOf()` can access an object's prototype
- Prototypes enable prototype-based inheritance

### 23. What are callbacks?
A callback is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of action or routine. Callbacks are a fundamental concept in JavaScript, especially for handling asynchronous operations.

```javascript
function fetchData(callback) {
  // Simulating an async operation
  setTimeout(() => {
    const data = { id: 1, name: "John" };
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log("Processed data:", data);
}

fetchData(processData); // Passes processData as a callback
```

Callbacks are used for:
- Event handling
- Asynchronous operations (AJAX, timers, file I/O)
- Array methods (map, filter, reduce)
- Customizing behavior of functions

However, excessive use of callbacks can lead to "callback hell" (deeply nested callbacks), which is why modern JavaScript often uses Promises or async/await for handling asynchronous code.

### 24. What are the types of errors in JavaScript?
JavaScript has several built-in error types:

1. **SyntaxError**: Occurs when there's a mistake in the syntax of the code
   ```javascript
   if (x === 5) { // Missing closing bracket
   ```

2. **ReferenceError**: Occurs when trying to access a variable that doesn't exist
   ```javascript
   console.log(undefinedVariable); // ReferenceError
   ```

3. **TypeError**: Occurs when an operation is performed on a value of the wrong type
   ```javascript
   const num = 123;
   num.toUpperCase(); // TypeError: num.toUpperCase is not a function
   ```

4. **RangeError**: Occurs when a numeric value is outside the range of allowed values
   ```javascript
   const arr = new Array(-1); // RangeError: Invalid array length
   ```

5. **URIError**: Occurs when incorrect parameters are passed to encodeURI(), decodeURI(), etc.
   ```javascript
   decodeURI('%'); // URIError: URI malformed
   ```

6. **EvalError**: Historically thrown when using eval() incorrectly, rarely used in modern JavaScript

7. **InternalError**: Rare, occurs when an internal error in the JavaScript engine is thrown

8. **AggregateError**: Represents multiple errors wrapped in a single error (newer addition)

Developers can also create custom error types by extending the Error object:

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
```

### 25. What is memoization?
Memoization is an optimization technique that speeds up function calls by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It's particularly useful for functions with expensive computations or recursive functions.

```javascript
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log("Returning from cache");
      return cache[key];
    }
    
    console.log("Computing result");
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Example with factorial
const factorial = memoize(function(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // Computing result for 5, 4, 3, 2, 1
console.log(factorial(5)); // Returning from cache
```

Benefits of memoization:
- Improved performance for expensive calculations
- Reduces redundant computations
- Especially useful for recursive algorithms like Fibonacci sequence
- Can significantly improve performance in applications with repeated function calls

Trade-offs:
- Increased memory usage to store cache
- Not suitable for functions with side effects or unique inputs

### 26. What is recursion in a programming language?
Recursion is a programming technique where a function calls itself to solve a problem. It's particularly useful for tasks that can be broken down into smaller, similar sub-problems.

A recursive function typically has:
1. A base case that stops the recursion
2. A recursive case that calls the function again with modified parameters

```javascript
// Factorial calculation using recursion
function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
```

Common recursive algorithms:
- Factorial calculation
- Fibonacci sequence
- Binary tree traversal
- Merge sort and quicksort
- Calculating permutations and combinations
- Directory traversal

While recursion can lead to elegant solutions, it can also cause stack overflow errors for deeply nested recursions. Tail recursion optimization or converting to iteration can help mitigate this issue.

### 27. What is the use of a constructor function in JavaScript?
Constructor functions in JavaScript are used to create and initialize objects with a specific structure. They serve as templates for creating multiple similar objects.

```javascript
function Person(firstName, lastName, age) {
  // Properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  
  // Method
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Creating instances
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

console.log(person1.getFullName()); // "John Doe"
console.log(person2.getFullName()); // "Jane Smith"
```

Key points about constructor functions:
1. They are named with a capital letter by convention
2. The `new` keyword is used to create instances
3. Inside the function, `this` refers to the new object being created
4. They can have parameters to initialize properties
5. Methods can be added to the prototype for efficiency

Constructor functions have been largely replaced by ES6 classes, which provide a more familiar syntax for object-oriented programming, but they remain important to understand as classes are syntactic sugar over constructor functions.

### 28. What is DOM?
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML and XML documents as a tree of objects, where each object corresponds to a part of the document (elements, attributes, text, etc.).

The DOM provides a way for JavaScript to:
1. Access HTML elements
2. Modify HTML elements
3. Add or remove HTML elements
4. React to HTML events

```javascript
// DOM manipulation examples
document.getElementById("demo").innerHTML = "New content";
document.createElement("p");
document.querySelector(".example").style.color = "blue";
document.body.appendChild(newElement);
```

Key DOM concepts:
- **Document**: The root of the DOM tree
- **Element nodes**: Represent HTML elements
- **Text nodes**: Represent text content within elements
- **Attribute nodes**: Represent attributes of elements
- **Events**: Allow JavaScript to register listeners for actions like clicks, keyboard input, etc.

The DOM is essential for dynamic web pages as it allows JavaScript to modify the content, structure, and style of web pages after they have loaded.

### 29. Which method is used to retrieve a character from a certain index?
In JavaScript, the `charAt()` method is used to retrieve a character from a specific index in a string. The index is zero-based, meaning the first character is at index 0.

```javascript
const str = "JavaScript";
console.log(str.charAt(0)); // "J"
console.log(str.charAt(4)); // "S"
```

Alternatively, you can also use bracket notation to access characters in a string:

```javascript
console.log(str[0]); // "J"
console.log(str[4]); // "S"
```

The difference between `charAt()` and bracket notation:
- `charAt()` returns an empty string if the index is out of range
- Bracket notation returns `undefined` if the index is out of range

```javascript
console.log(str.charAt(100)); // "" (empty string)
console.log(str[100]);        // undefined
```

### 30. What do you mean by BOM?
The Browser Object Model (BOM) is a browser-specific convention that represents all the objects exposed by the web browser. The BOM allows JavaScript to interact with the browser beyond the page content.

The main object of the BOM is the `window` object, which represents the browser window or tab. All global JavaScript objects, functions, and variables automatically become members of the window object.

Key components of the BOM include:

1. **window**: The global object in browser-side JavaScript
   ```javascript
   window.alert("Hello");
   window.innerHeight; // Height of browser window
   window.innerWidth;  // Width of browser window
   ```

2. **navigator**: Contains information about the browser
   ```javascript
   navigator.userAgent; // Browser identification
   navigator.language;  // Browser language
   ```

3. **location**: Contains information about the current URL
   ```javascript
   location.href;     // Current URL
   location.hostname; // Domain name
   location.pathname; // Path of the current page
   location.reload(); // Reload the page
   ```

4. **history**: Contains the browser history
   ```javascript
   history.back();    // Go back one page
   history.forward(); // Go forward one page
   ```

5. **screen**: Contains information about the user's screen
   ```javascript
   screen.width;  // Screen width
   screen.height; // Screen height
   ```

Unlike the DOM, which is standardized by the W3C, the BOM isn't standardized, although browsers have implemented it in similar ways.

### 31. What is the distinction between client-side and server-side JavaScript?

**Client-Side JavaScript:**
- Runs in the user's browser
- Manipulates the DOM to create dynamic content
- Handles user interactions and events
- Has access to browser APIs (localStorage, geolocation, etc.)
- Cannot directly access server resources or databases
- Code is visible to the user
- Typically contained in `.js` files or `<script>` tags
- Examples: React, Angular, Vue.js

```javascript
// Client-side example
document.getElementById("button").addEventListener("click", function() {
  document.getElementById("result").innerHTML = "Button clicked!";
});
```

**Server-Side JavaScript:**
- Runs on the web server
- Processes requests and generates responses
- Has access to server resources (file system, databases)
- Can perform secure operations (authentication, authorization)
- Code is not visible to the user
- Typically used with Node.js
- Examples: Express.js, Next.js, Nest.js

```javascript
// Server-side example (Node.js)
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});
server.listen(8080);
```

Key differences:
1. **Environment**: Browser vs. Server
2. **Access**: DOM vs. Server Resources
3. **Security**: Exposed vs. Protected
4. **Purpose**: UI Manipulation vs. Business Logic
5. **Context**: User-specific vs. Multiple Users

## JavaScript Interview Questions for Experienced

### 1. What are arrow functions?
Arrow functions are a concise syntax for writing function expressions in JavaScript, introduced in ES6 (ECMAScript 2015). They provide a more compact syntax and do not bind their own `this`, `arguments`, `super`, or `new.target`.

**Syntax:**
```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

**Key characteristics:**

1. **Shorter syntax**: Especially useful for simple functions
   ```javascript
   // One parameter doesn't need parentheses
   const square = x => x * x;
   
   // No parameters need empty parentheses
   const getRandom = () => Math.random();
   
   // Multiple parameters need parentheses
   const multiply = (x, y) => x * y;
   ```

2. **Implicit return**: Single expressions are returned without the `return` keyword
   ```javascript
   const isEven = num => num % 2 === 0;
   ```

3. **No binding of `this`**: Arrow functions don't have their own `this`; they inherit `this` from the enclosing scope
   ```javascript
   const obj = {
     data: [1, 2, 3],
     processData() {
       // Arrow function preserves `this` from the processData method
       return this.data.map(num => num * this.multiplier);
     },
     multiplier: 2
   };
   ```

4. **Can't be used as constructors**: Arrow functions cannot be used with the `new` keyword

5. **No `arguments` object**: Arrow functions don't have their own `arguments` object

Arrow functions are particularly useful for:
- Short callback functions
- Methods that don't need to access `this`
- Functional programming patterns

### 2. What do you mean by prototype design pattern?
The Prototype design pattern is a creational pattern that allows objects to be cloned or copied from existing objects, rather than creating new objects from scratch. It's particularly useful when the cost of creating an object is expensive or complex.

In JavaScript, this pattern is naturally supported through prototypal inheritance.

**Implementation of Prototype Pattern in JavaScript:**

```javascript
// Prototype object
const vehiclePrototype = {
  init(model, year) {
    this.model = model;
    this.year = year;
    return this;
  },
  getDetails() {
    return `${this.model} (${this.year})`;
  }
};

// Creating objects from the prototype
const car1 = Object.create(vehiclePrototype).init("Toyota", 2020);
const car2 = Object.create(vehiclePrototype).init("Honda", 2022);

console.log(car1.getDetails()); // "Toyota (2020)"
console.log(car2.getDetails()); // "Honda (2022)"
```

Using constructor functions:

```javascript
function Vehicle(model, year) {
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getDetails = function() {
  return `${this.model} (${this.year})`;
};

// Clone method
Vehicle.prototype.clone = function() {
  return new Vehicle(this.model, this.year);
};

const car = new Vehicle("Tesla", 2023);
const carClone = car.clone();

console.log(car.getDetails());     // "Tesla (2023)"
console.log(carClone.getDetails()); // "Tesla (2023)"
```

**Benefits of the Prototype Pattern:**
1. Reduces the need for subclassing
2. Hides the complexity of object creation
3. Allows creating objects with different values without many constructor calls
4. Reduces initialization cost by cloning existing objects

In modern JavaScript, this pattern is often implemented using `Object.create()` or class inheritance with cloning methods.

### 3. Differences between declaring variables using var, let and const

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| **Scope** | Function-scoped | Block-scoped | Block-scoped |
| **Hoisting** | Hoisted with `undefined` | Hoisted but in TDZ | Hoisted but in TDZ |
| **Reassignment** | Allowed | Allowed | Not allowed |
| **Redeclaration** | Allowed | Not allowed | Not allowed |
| **Global object property** | Creates property on `window` | Does not create property on `window` | Does not create property on `window` |
| **Temporal Dead Zone** | No | Yes | Yes |
| **Introduced** | ES1 (1997) | ES6 (2015) | ES6 (2015) |

**Detailed examples:**

**1. Scope:**
```javascript
function scopeExample() {
  if (true) {
    var varVariable = "I'm var";
    let letVariable = "I'm let";
    const constVariable = "I'm const";
  }
  
  console.log(varVariable);    // "I'm var" - accessible outside the block
  console.log(letVariable);    // ReferenceError - not accessible outside the block
  console.log(constVariable);  // ReferenceError - not accessible outside the block
}
```

**2. Hoisting and Temporal Dead Zone:**
```javascript
console.log(varVariable);    // undefined - hoisted
console.log(letVariable);    // ReferenceError - in TDZ
console.log(constVariable);  // ReferenceError - in TDZ

var varVariable = "var";
let letVariable = "let";
const constVariable = "const";
```

**3. Reassignment:**
```javascript
var varVariable = "var";
let letVariable = "let";
const constVariable = "const";

varVariable = "new var";     // Allowed
letVariable = "new let";     // Allowed
constVariable = "new const"; // TypeError: Assignment to constant variable
```

**4. Redeclaration:**
```javascript
var varVariable = "var";
var varVariable = "new var"; // Allowed

let letVariable = "let";
let letVariable = "new let"; // SyntaxError: Identifier 'letVariable' has already been declared

const constVariable = "const";
const constVariable = "new const"; // SyntaxError: Identifier 'constVariable' has already been declared
```

**5. Objects with `const`:**
Note that `const` prevents reassignment, but not mutation of objects:

```javascript
const person = { name: "John" };
person.name = "Jane";        // Allowed - modifying a property
person = { name: "Jane" };   // TypeError - reassigning the variable
```

**Best practices:**
- Use `const` by default
- Use `let` when you need to reassign a variable
- Avoid `var` in modern JavaScript

### 4. What is the rest parameter and spread operator?
Both the rest parameter and spread operator use the same `...` syntax but serve different purposes:

**Rest Parameter:**
The rest parameter syntax collects multiple function arguments into a single array parameter.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

Key points about rest parameters:
- Must be the last parameter in a function
- Collects all remaining arguments into an array
- Can be used with destructuring

```javascript
function printDetails(firstName, lastName, ...otherInfo) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Other info: ${otherInfo.join(', ')}`);
}

printDetails("John", "Doe", "35", "Developer", "New York");
// Name: John Doe
// Other info: 35, Developer, New York
```

**Spread Operator:**
The spread operator expands an iterable (like an array or string) into individual elements.

```javascript
// Expanding arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copying arrays
const original = [1, 2, 3];
const copy = [...original];

// Expanding strings
const chars = [..."hello"]; // ["h", "e", "l", "l", "o"]

// Creating/merging objects (object spread)
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const merged = { ...obj1, ...obj2 }; // { x: 1, y: 2, z: 3 }

// Using with functions
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3
```

Key points about spread operator:
- Works with any iterable object
- Creates a shallow copy, not a deep copy
- Can be used in array literals, function calls, and object literals

The spread operator is particularly useful for:
- Creating copies of arrays/objects without reference issues
- Concatenating arrays
- Passing array elements as separate arguments to functions
- Creating new objects with properties from existing objects

### 5. In JavaScript, how many different methods can you make an object?
In JavaScript, there are several ways to create objects:

**1. Object Literals:**
The most common way to create objects with key-value pairs.
```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  greet() {
    return `Hello, ${this.firstName}`;
  }
};
```

**2. Constructor Functions:**
Traditional way to create objects with shared methods.
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.greet = function() {
    return `Hello, ${this.firstName}`;
  };
}

const person = new Person("John", "Doe");
```

**3. Class Syntax (ES6):**
Syntactic sugar over constructor functions.
```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  greet() {
    return `Hello, ${this.firstName}`;
  }
}

const person = new Person("John", "Doe");
```

**4. Object.create():**
Creates an object with a specified prototype.
```javascript
const personProto = {
  greet() {
    return `Hello, ${this.firstName}`;
  }
};

const person = Object.create(personProto);
person.firstName = "John";
person.lastName = "Doe";
```

**5. Factory Functions:**
Functions that return objects.
```javascript
function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    greet() {
      return `Hello, ${firstName}`;
    }
  };
}

const person = createPerson("John", "Doe");
```

**6. Function Constructors with Prototypes:**
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function() {
  return `Hello, ${this.firstName}`;
};

const person = new Person("John", "Doe");
```

**7. ES6 Map Objects:**
While not traditional objects, Maps provide key-value storage.
```javascript
const person = new Map();
person.set("firstName", "John");
person.set("lastName", "Doe");
person.set("greet", function() {
  return `Hello, ${this.get("firstName")}`;
});
```

**8. From JSON:**
Parse JSON strings to create objects.
```javascript
const personJSON = '{"firstName":"John","lastName":"Doe"}';
const person = JSON.parse(personJSON);
```

**9. Object.assign():**
Create objects by copying properties from existing objects.
```javascript
const defaultPerson = { species: "human" };
const person = Object.assign({}, defaultPerson, { firstName: "John", lastName: "Doe" });
```

Each method has specific use cases and benefits depending on the requirements of your application.

# JavaScript Interview Questions and Answers

## Conceptual Questions

### 6. What is the use of promises in JavaScript?

**Answer:**
Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner way to handle asynchronous operations compared to callbacks.

**Key features of Promises:**
- A Promise can be in one of three states: pending, fulfilled, or rejected
- They allow for chaining of asynchronous operations using `.then()` and `.catch()`
- They help avoid callback hell (deeply nested callbacks)
- They provide better error handling through the `.catch()` method

**Example:**
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Async operation
    setTimeout(() => {
      const data = { id: 1, name: 'User' };
      if (data) {
        resolve(data);
      } else {
        reject('Data not found');
      }
    }, 1000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**Why we need them:**
Promises provide a more structured way to handle asynchronous operations, making code more readable and maintainable compared to nested callbacks. They also standardize error handling in asynchronous code.

### 7. What are classes in JavaScript?

**Answer:**
Classes in JavaScript, introduced in ES6, provide a cleaner syntax for implementing object-oriented programming patterns. They are primarily syntactic sugar over JavaScript's existing prototype-based inheritance.

**Key features of classes:**
- Class declarations
- Constructor methods
- Static methods
- Inheritance using the `extends` keyword
- `super` keyword for calling parent class methods

**Example:**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }

  static createAnonymous() {
    return new Person('Anonymous', 0);
  }
}

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  greet() {
    return `${super.greet()}. I work as a ${this.position}`;
  }
}

const john = new Employee('John', 30, 'Developer');
console.log(john.greet()); // Hello, my name is John. I work as a Developer
```

**Why we need them:**
Classes provide a familiar syntax for developers coming from class-based languages, making object-oriented programming in JavaScript more accessible and code more organized.

### 8. What are generator functions?

**Answer:**
Generator functions are special functions in JavaScript that can be paused and resumed, allowing them to yield multiple values over time. They are defined using an asterisk (`*`) syntax.

**Key features of generator functions:**
- They use the `function*` syntax
- They use the `yield` keyword to pause execution and return a value
- They maintain their state between calls
- They return a Generator object that implements the Iterator protocol

**Example:**
```javascript
function* countUp(max) {
  let count = 0;
  while (count < max) {
    yield count++;
  }
}

const counter = countUp(3);
console.log(counter.next()); // { value: 0, done: false }
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: undefined, done: true }
```

**Why we need them:**
Generator functions are useful for creating iterators, handling asynchronous operations in a more synchronous-looking way, and managing complex state transitions. They're particularly helpful when working with large data sets or infinite sequences.

### 9. Explain WeakSet in JavaScript

**Answer:**
WeakSet is a collection of objects where references to the objects are held weakly, meaning they don't prevent garbage collection if there are no other references to the object.

**Key features of WeakSet:**
- Can only store objects (not primitive values)
- Objects in a WeakSet may be garbage-collected if there are no other references to them
- Does not have methods like `forEach`, `size`, or property getters
- Cannot be iterated over
- Has only `add`, `delete`, and `has` methods

**Example:**
```javascript
const weakSet = new WeakSet();
let obj1 = { name: 'Object 1' };
let obj2 = { name: 'Object 2' };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
obj1 = null; // obj1 can now be garbage collected
// After garbage collection, obj1 will no longer be in weakSet
```

**Why we need it:**
WeakSet is useful for storing objects that should be automatically removed when they're no longer used elsewhere in the code. This helps prevent memory leaks and is particularly useful for registering event listeners or tracking object instances.

### 10. Why do we use callbacks?

**Answer:**
Callbacks are functions passed as arguments to other functions to be executed after a certain operation has completed. They are a fundamental concept in JavaScript for handling asynchronous operations.

**Key features of callbacks:**
- Allow asynchronous code execution
- Enable event handling
- Provide a way to continue code execution after an asynchronous operation completes
- Support the principle of "don't call us, we'll call you"

**Example:**
```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: 'User' };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log('Data received:', data);
});
```

**Why we need them:**
Callbacks are essential for handling asynchronous operations in JavaScript, such as API calls, file operations, and timers. They allow code to continue executing while waiting for these operations to complete, improving application responsiveness.

### 11. Explain WeakMap in JavaScript

**Answer:**
WeakMap is a collection of key-value pairs where the keys must be objects and are held weakly, meaning they don't prevent garbage collection if there are no other references to the key objects.

**Key features of WeakMap:**
- Keys must be objects (not primitive values)
- Keys are weakly held (can be garbage-collected if no other references exist)
- Does not have methods like `forEach` or property getters
- Cannot be iterated over
- Has only `get`, `set`, `delete`, and `has` methods

**Example:**
```javascript
const weakMap = new WeakMap();
let obj1 = { name: 'Object 1' };
let obj2 = { name: 'Object 2' };

weakMap.set(obj1, 'Value for obj1');
weakMap.set(obj2, 'Value for obj2');

console.log(weakMap.get(obj1)); // 'Value for obj1'
obj1 = null; // obj1 can now be garbage collected
// After garbage collection, obj1's entry will be removed from weakMap
```

**Why we need it:**
WeakMap is useful for storing metadata about objects without preventing those objects from being garbage collected. It's particularly useful for caching object data, implementing private variables, or associating additional data with DOM elements.

### 12. What is Object Destructuring?

**Answer:**
Object destructuring is a JavaScript expression that allows you to extract properties from objects and bind them to variables with the same name as the property.

**Key features of object destructuring:**
- Extract multiple properties in a single statement
- Assign new variable names to the properties
- Set default values for properties that don't exist
- Rest operator to collect remaining properties
- Nested destructuring for complex objects

**Example:**
```javascript
const person = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Basic destructuring
const { name, age } = person;

// Assigning new variable names
const { name: fullName, age: years } = person;

// Default values
const { name, job = 'Developer' } = person;

// Nested destructuring
const { address: { city, country } } = person;

// Rest operator
const { name, ...rest } = person;
```

**Why we need it:**
Object destructuring makes code more concise and readable when working with objects. It simplifies extraction of multiple properties and provides elegant ways to handle default values and nested structures.

### 13. Difference between prototypal and classical inheritance

**Answer:**
Prototypal and classical inheritance are two different approaches to implementing object-oriented programming.

**Prototypal Inheritance:**
- Objects inherit directly from other objects
- Uses a prototype chain for inheritance
- More flexible and dynamic
- Native to JavaScript
- Behavior can be added or modified at runtime

**Classical Inheritance:**
- Classes inherit from other classes
- Uses a class hierarchy for inheritance
- More structured and formal
- Common in languages like Java, C++, and C#
- Structure is typically defined at compile time

**Example of Prototypal Inheritance:**
```javascript
// Prototypal inheritance
const animal = {
  eat() {
    console.log('Eating...');
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log('Woof!');
};

dog.eat(); // Eating...
dog.bark(); // Woof!
```

**Example of Classical Inheritance in JavaScript:**
```javascript
// Classical inheritance syntax in JavaScript (ES6)
class Animal {
  eat() {
    console.log('Eating...');
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof!');
  }
}

const dog = new Dog();
dog.eat(); // Eating...
dog.bark(); // Woof!
```

**Why we need to understand this:**
Understanding the difference helps in choosing the appropriate pattern for a given problem and helps in writing more efficient and maintainable JavaScript code.

### 14. What is a Temporal Dead Zone?

**Answer:**
The Temporal Dead Zone (TDZ) is a behavior in JavaScript where variables declared with `let` and `const` exist in a scope but cannot be accessed before their declaration.

**Key aspects of the Temporal Dead Zone:**
- Variables declared with `let` and `const` are hoisted but not initialized
- Accessing a variable in its TDZ throws a `ReferenceError`
- The TDZ starts at the beginning of the scope and ends at the declaration
- It enforces that variables are declared before they are used

**Example:**
```javascript
console.log(x); // undefined (x is hoisted)
var x = 10;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
```

**Why we need to understand this:**
Understanding the TDZ helps prevent bugs related to variable access before initialization and encourages better coding practices like declaring variables before using them.

### 15. What do you mean by JavaScript Design Patterns?

**Answer:**
JavaScript Design Patterns are reusable solutions to commonly occurring problems in software design. They provide tested templates for solving specific issues in code organization and architecture.

**Common JavaScript Design Patterns:**

1. **Creational Patterns:**
   - Constructor Pattern
   - Factory Pattern
   - Singleton Pattern
   - Module Pattern

2. **Structural Patterns:**
   - Decorator Pattern
   - Facade Pattern
   - Adapter Pattern
   - Proxy Pattern

3. **Behavioral Patterns:**
   - Observer Pattern
   - Mediator Pattern
   - Command Pattern
   - Iterator Pattern

**Example of the Module Pattern:**
```javascript
const counterModule = (function() {
  let count = 0;
  
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    getCount() {
      return count;
    }
  };
})();

console.log(counterModule.getCount()); // 0
counterModule.increment();
console.log(counterModule.getCount()); // 1
```

**Why we need them:**
Design patterns provide proven solutions to common problems, making code more maintainable, flexible, and easier to understand. They encourage best practices and help in creating more modular and reusable code.

### 16. Is JavaScript a pass-by-reference or pass-by-value language?

**Answer:**
JavaScript is **pass-by-value**, but when the value is an object reference, it behaves similar to pass-by-reference. This often leads to confusion.

**Key points:**
- Primitive values (numbers, strings, booleans) are passed by value
- Objects (including arrays and functions) are passed by reference value
- When you pass an object to a function, you're passing a copy of the reference to that object
- Changes to the object's properties within the function affect the original object
- Reassigning the parameter to a new object within the function doesn't affect the original reference

**Example:**
```javascript
// Primitive (pass by value)
function changeValue(x) {
  x = 10;
  console.log("Inside function:", x); // 10
}

let a = 5;
changeValue(a);
console.log("Outside function:", a); // Still 5

// Object (pass by reference value)
function changeObject(obj) {
  obj.name = "Changed"; // Modifies the original object
  obj = { name: "New" }; // Creates a new object, doesn't affect original
  console.log("Inside function:", obj.name); // "New"
}

let person = { name: "Original" };
changeObject(person);
console.log("Outside function:", person.name); // "Changed"
```

**Why we need to understand this:**
Understanding how JavaScript handles parameter passing helps avoid unexpected behavior when working with functions that modify objects or primitive values.

### 17. Difference between Async/Await and Generators usage to achieve the same functionality

**Answer:**
Async/Await and Generators are both used to handle asynchronous operations in JavaScript, but they have different approaches and syntax.

**Async/Await:**
- Introduced in ES2017
- Built on top of Promises
- Cleaner and more straightforward syntax
- Specifically designed for asynchronous operations
- Error handling with try/catch blocks

**Generators:**
- Introduced in ES2015
- General-purpose iterators that can be paused and resumed
- Require a runner function or library to handle asynchronous flow
- More flexible but more complex syntax
- Error handling through a combination of try/catch and runner functions

**Example with Async/Await:**
```javascript
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const user = await response.json();
    const postResponse = await fetch(`https://api.example.com/posts/${user.id}`);
    const posts = await postResponse.json();
    return { user, posts };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

**Example with Generators:**
```javascript
function* fetchUserData() {
  try {
    const response = yield fetch('https://api.example.com/user');
    const user = yield response.json();
    const postResponse = yield fetch(`https://api.example.com/posts/${user.id}`);
    const posts = yield postResponse.json();
    return { user, posts };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Runner function to handle the generator
function run(generator) {
  const iterator = generator();
  
  function handle(result) {
    if (result.done) return result.value;
    
    return Promise.resolve(result.value)
      .then(value => handle(iterator.next(value)))
      .catch(error => handle(iterator.throw(error)));
  }
  
  return handle(iterator.next());
}

run(fetchUserData);
```

**Why we need to understand this:**
Understanding the differences helps in choosing the appropriate approach for handling asynchronous operations based on the specific requirements of a project.

### 18. What are the primitive data types in JavaScript?

**Answer:**
JavaScript has 7 primitive data types:

1. **String**: Represents textual data (`'hello'`, `"world"`)
2. **Number**: Represents numeric values (integers and floating-point numbers)
3. **Boolean**: Represents logical values (`true` or `false`)
4. **Undefined**: Represents a variable that has been declared but not assigned a value
5. **Null**: Represents the intentional absence of any object value
6. **Symbol**: Represents a unique identifier (introduced in ES6)
7. **BigInt**: Represents integers with arbitrary precision (introduced in ES11)

**Key characteristics of primitives:**
- Immutable (cannot be changed after creation)
- Compared by value
- Stored directly in the variable's location in memory

**Example:**
```javascript
const str = 'Hello';  // String
const num = 42;       // Number
const bool = true;    // Boolean
const undef = undefined; // Undefined
const nul = null;     // Null
const sym = Symbol('description'); // Symbol
const bigInt = 9007199254740991n; // BigInt
```

**Why we need to understand this:**
Understanding primitive data types is fundamental to working with JavaScript as they form the basis of all data manipulation in the language. Knowing their characteristics helps in writing more efficient and bug-free code.

### 19. What is the role of deferred scripts in JavaScript?

**Answer:**
Deferred scripts are JavaScript files that are downloaded in parallel with HTML parsing but executed only after the HTML parsing is complete. They use the `defer` attribute in the script tag.

**Key features of deferred scripts:**
- Download in parallel with HTML parsing
- Execute in the order they appear in the document
- Execute after HTML parsing is complete but before the `DOMContentLoaded` event
- Maintain their relative order of execution
- Ideal for scripts that need access to the DOM but don't need to block parsing

**Example:**
```html
<script src="analytics.js" defer></script>
<script src="main.js" defer></script>
```

**Comparison with other script loading techniques:**
- **Regular scripts**: Block HTML parsing until downloaded and executed
- **Async scripts**: Download in parallel but execute as soon as they're available, potentially before HTML parsing is complete
- **Deferred scripts**: Download in parallel but execute in order after HTML parsing is complete

**Why we need them:**
Deferred scripts improve page load performance by allowing the browser to continue parsing HTML while downloading scripts in parallel. This leads to faster initial page rendering while ensuring scripts are executed in the correct order after the DOM is fully available.

### 20. What has to be done in order to put Lexical Scoping into practice?

**Answer:**
Lexical scoping (also known as static scoping) is a way of determining the scope of variables based on their location in the source code. To put lexical scoping into practice, you need to:

1. **Understand variable scope**: Know where variables are accessible based on where they are declared
2. **Use closures**: Create functions that capture and remember the environment in which they were created
3. **Properly nest functions**: Organize functions in a way that takes advantage of scope chains
4. **Use block scoping**: Utilize `let` and `const` for block-level scope rather than function-level scope with `var`
5. **Be mindful of hoisting**: Understand that variable declarations are moved to the top of their scope

**Example of lexical scoping with closures:**
```javascript
function createCounter() {
  let count = 0;  // This variable is in the lexical scope of the inner function
  
  return function() {
    count++;  // The inner function has access to the outer function's variables
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Why we need to understand this:**
Lexical scoping is a fundamental concept in JavaScript that enables powerful programming patterns like closures. Understanding it helps in writing more organized code, avoiding variable conflicts, and creating more maintainable applications.

### 21. What is the purpose of the following JavaScript code?

**Answer:**
Since the specific code was not provided in the question, I'll cover a general approach to analyzing JavaScript code purpose:

When analyzing JavaScript code to determine its purpose, consider:

1. **Input and output**: What data goes in, what comes out
2. **Function names**: Often indicate purpose (e.g., `calculateTax`, `fetchUserData`)
3. **Comments**: May provide direct explanations
4. **Control structures**: Loops and conditionals reveal the logic flow
5. **Data manipulation**: How variables are transformed
6. **API calls**: External services being accessed
7. **DOM manipulation**: Changes to the webpage structure
8. **Event handlers**: User interactions being handled

**Example analysis:**
```javascript
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func.apply(this, args);
  };
}
```

**Purpose**: This function implements throttling, which limits how often a function can be called in a period of time. It's useful for performance optimization with frequently triggered events like scrolling or resizing.

**Why we need to understand this:**
Being able to analyze and understand code purpose is essential for debugging, maintaining, and extending existing code, as well as for code reviews and collaboration with other developers.

## JavaScript Coding Interview Questions

### 1. What is the output of the following code?

Since the specific code was not provided, I'll demonstrate how to analyze output with a common example:

```javascript
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
```

**Output:**
```
1
4
3
2
```

**Explanation:**
1. `console.log(1)` executes immediately
2. `setTimeout` callback is queued in the macro task queue
3. Promise's `then` callback is queued in the micro task queue
4. `console.log(4)` executes immediately
5. After the call stack is empty, micro tasks are executed first, so `3` is logged
6. Then macro tasks are executed, so `2` is logged

### 2. In JavaScript, how do you turn an Object into an Array?

**Answer:**
There are several ways to convert an object to an array in JavaScript:

1. **Object.keys()**:
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const keysArray = Object.keys(obj); // ['a', 'b', 'c']
   ```

2. **Object.values()**:
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const valuesArray = Object.values(obj); // [1, 2, 3]
   ```

3. **Object.entries()**:
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const entriesArray = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]
   ```

4. **Map method on Object.entries()**:
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const customArray = Object.entries(obj).map(([key, value]) => {
     return { key, value };
   });
   // [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]
   ```

**Why we need to know this:**
Converting objects to arrays is a common operation when working with data in JavaScript, especially when you need to iterate over object properties or use array methods for data manipulation.

### 3. Write the code to find the vowels

**Answer:**
Here's a function to find vowels in a string:

```javascript
function findVowels(str) {
  const vowels = 'aeiouAEIOU';
  const result = [];
  
  for (let char of str) {
    if (vowels.includes(char) && !result.includes(char.toLowerCase())) {
      result.push(char.toLowerCase());
    }
  }
  
  return result;
}

// Alternative using regular expressions
function findVowelsRegex(str) {
  const matches = str.match(/[aeiou]/gi);
  if (!matches) return [];
  return [...new Set(matches.map(v => v.toLowerCase()))];
}

// Example usage
console.log(findVowels('Hello World')); // ['e', 'o']
console.log(findVowelsRegex('JavaScript')); // ['a', 'i']
```

**Why we need this:**
Finding vowels is a common string manipulation task that tests understanding of string methods, iteration, and potentially regular expressions. It's useful in various text processing applications.

### 4. Write the code given If two strings are anagrams of one another, then return true.

**Answer:**
Anagrams are strings that have the same characters but in different orders.

```javascript
function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase
  const normalize = str => str.replace(/\s/g, '').toLowerCase();
  
  const normalizedStr1 = normalize(str1);
  const normalizedStr2 = normalize(str2);
  
  // Quick check for string lengths
  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }
  
  // Sort the characters in both strings and compare
  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');
  
  return sortedStr1 === sortedStr2;
}

// Alternative using character frequency
function areAnagramsWithFrequency(str1, str2) {
  // Remove spaces and convert to lowercase
  const normalize = str => str.replace(/\s/g, '').toLowerCase();
  
  const normalizedStr1 = normalize(str1);
  const normalizedStr2 = normalize(str2);
  
  // Quick check for string lengths
  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }
  
  // Count character frequencies
  const charCount = {};
  
  for (let char of normalizedStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (let char of normalizedStr2) {
    // If char doesn't exist or has been counted down to 0, not an anagram
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  
  return true;
}

// Example usage
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
console.log(areAnagrams('Dormitory', 'Dirty room')); // true
```

**Why we need this:**
Anagram checking is a common string manipulation problem that tests understanding of string methods, sorting, and character frequency counting. It's useful in various word games and text analysis applications.

### 5. Write the code for dynamically inserting new components.

**Answer:**
Here's how to dynamically insert components in different contexts:

**Using vanilla JavaScript:**
```javascript
function createComponent(title, content) {
  // Create elements
  const container = document.createElement('div');
  container.className = 'component';
  
  const titleElement = document.createElement('h2');
  titleElement.textContent = title;
  
  const contentElement = document.createElement('p');
  contentElement.textContent = content;
  
  // Assemble the component
  container.appendChild(titleElement);
  container.appendChild(contentElement);
  
  // Insert into DOM
  document.getElementById('components-container').appendChild(container);
  
  return container;
}

// Example usage
createComponent('New Feature', 'This is a dynamically created component');
```

**Using React:**
```javascript
import React, { useState } from 'react';

function ComponentsContainer() {
  const [components, setComponents] = useState([]);
  
  const addComponent = (title, content) => {
    setComponents([...components, { id: Date.now(), title, content }]);
  };
  
  return (
    <div className="components-container">
      {components.map(comp => (
        <div key={comp.id} className="component">
          <h2>{comp.title}</h2>
          <p>{comp.content}</p>
        </div>
      ))}
      <button onClick={() => addComponent('New Component', 'Content here')}>
        Add Component
      </button>
    </div>
  );
}
```

**Why we need this:**
Dynamically inserting components is essential for creating interactive web applications where content changes based on user actions or data updates. It's a fundamental skill for both vanilla JavaScript and modern frameworks like React.

### 6. Implement a function that returns an updated array with r right rotations on an array of integers a.

**Answer:**
```javascript
function rotateArray(arr, rotations) {
  if (arr.length === 0) return arr;
  
  // Handle case where rotations is larger than array length
  const effectiveRotations = rotations % arr.length;
  if (effectiveRotations === 0) return arr;
  
  // Perform rotation
  const rotationPoint = arr.length - effectiveRotations;
  return [...arr.slice(rotationPoint), ...arr.slice(0, rotationPoint)];
}

// Alternative implementation using unshift and pop
function rotateArrayInPlace(arr, rotations) {
  if (arr.length === 0) return arr;
  
  const effectiveRotations = rotations % arr.length;
  if (effectiveRotations === 0) return arr;
  
  // Create a copy to avoid mutating the original array
  const result = [...arr];
  
  for (let i = 0; i < effectiveRotations; i++) {
    const lastElement = result.pop();
    result.unshift(lastElement);
  }
  
  return result;
}

// Example usage
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArrayInPlace([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
```

**Why we need this:**
Array rotation is a common operation in algorithms and data processing. Understanding how to efficiently rotate arrays demonstrates knowledge of array manipulation techniques and time complexity considerations.

### 7. Write a function that performs binary search on a sorted array.

**Answer:**
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Target found, return its index
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }
  
  return -1; // Target not found
}

// Recursive implementation
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Base case: target not found
  }
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right); // Search right half
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1); // Search left half
  }
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 7)); // 3
console.log(binarySearch(sortedArray, 6)); // -1
console.log(binarySearchRecursive(sortedArray, 15)); // 7
```

**Why we need this:**
Binary search is a fundamental algorithm that demonstrates understanding of efficient search techniques. It has a time complexity of O(log n), making it much faster than linear search for large datasets. Knowing how to implement binary search is essential for