// Understand This keyword in javascript (In Depth);

// This refers to the execution context, it depends on how a function is called, let's break it down into different scenarios.

// ! 1) Global Context, ((this) in global scope);

// In the global execution context (outside any function), this refers to
// 1) Browser: window object
// 2) Node.js: global object (or undefined) "in strict mode";

console.log(this, "this");

// ! 2) Inside a regular function
// When a function is called normary, this refers to the global object in non-strict mode and undefined in strice mode

// function showThis() {
//   console.log(this);
// }
// showThis();

// ! 3) Inside an object method
// When a function is a method of an object, this refers to the object itself

// const user = {
//   name: "Tejas",
//   green: function() {
//     console.log(this.name)
//   }
// }
// user.green()

// ! 4) This keyword in arrow function

//  Arrow functions do not have their own this. Instead they inherit this from their lexical scope (the surrounded function)

const user = {
  name: "Tejas",
  greet: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

user.greet()

/* Why? Because inner() is an arrow function, it inherits this from greet(), which points to user.

🚨 Beware: If greet() used a regular function, this would be undefined. */


// ! 5) This in a constructor function  
// when using a new, this refers to the new object being created;

// function Person(name) {
//   this.name = name
// }

// const me = new Person("Tejas");
// console.log(me.name)


// ! 6) This is a class (es6)

// In ES6 classes, this works similarly to constructors.

class Person {
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log(`Hello this is ${this.name}`)
  }
}

const me = new Person("Tejas")
me.greet()


// ! 7) This is event handlers

// in event handlers, this referes to the element that fired the event;

document.getElementById("btn").addEventListener("click", function() {
  console.log(this); // Refers to the button element
});

//✅ Solution: If you want this to refer to another object, use an arrow function or bind().

document.getElementById("btn").addEventListener("click", () => {
    console.log(this); // In arrow functions, `this` refers to the outer scope (likely `window`)
});
