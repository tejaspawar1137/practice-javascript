

// // 27 What is the use of a contructor function in javascript ?
// // Constructor functions in javascript are used to create and initialize objects with a specific structure. they server as teimplates for creating multiple similar objects.


// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;

//   this.getFullName =  function() {
//     return `${this.firstName} ${this.lastName} ${this.age}`
//   }
// }

// const person1 = new Person("Tejas", "pawar", 34)
// console.log(person1.getFullName())


// // What is DOM ?

// // The document object model (dom) is a programming interface for web documents. It represents the structure of HTML nad XML dcouments as a tree of objects, where each object corresponds to a part of the docuemnt(element, attribute, text, etc).


// // The dom provides a way for javascript to:
// // 1. Access HTML elements 
// // 2. Modify HTML Elements 
// // 3. Add or remove HTML Elements 
// // 4. React o HTML Events

// // key DOM concepts

// // Document: The root of the DOM tree 
// // element nodes: Represent HTML Elemeents
// // text nodes: Represent text content withing Elements
// // attribute nodes: Represent attributes of elements 
// // events: Allow javascript to register listeners for actions like clicks, keyboard input etc.

// // The dom is essential for dynamic web pages as it allows javascript to modify the content, strcuture, and style of web pages after they have loaded.



// // What do you mean by BOM ?
// // => The browser object model is a browser specific convention that represents all the objectes exposed by the web browser. The bom allows javascript to interact with the browser beyong the page content.


// // the main object of the BOM is the `window` object, wihch represents the browser window or tab. All global javascript objects, functions, and variables automatically become members of the window object 


// // Key components o the bom includes:

// // 1. Window: The global object in browser-side javascript 

// window.alert("ehllo world")
// window.innerHeight;
// window.innerWidth


// // navigator object: contains information about the browser and javascript  
// navigator.userAgent
// navigator.language

// //3 location: contains information about the current URL 
// location.href;
// location.hostname;
// location.pathname;
// location.reload()


// // history: contains the browser history 

// history.back()
// history.forward()


// // screen: contains information about the user's screen;

// screen.width;
// screen.height


// Unline the DOM, which is standardized by the W3C, the BOM is not standardized although browsers have implemented it in similar ways.\\\


// What is the different between client-size and server-side javascript ?

//= > Client-side javascript:
// 1. Runs in the user's browser 
// 2. Manipulates the DOM to create dynamic content 
// 3. Handles user interactions and events 
// 4. Has access to browesr APIs localStorage, geolocation, etc 
// 5. Cannot directly access server resources or databases
// 6. code is visible to the user 
// 7. Examples: React, Angular, Vue.js

// SERVER_SIDE javaceipt

// 1) Runs on the web server 
// 2. Prcoesses requests and generates response 
// 3. Has access to server resources (file system, database)
// 4. can perform secure opreations (authentication, authorization).
// 5. code is not visible to the user 
// typically used with nodejs
// examples: express.js next.js nest.js

// key differences

// environment: Browser vs Server 
// Access: DOM vs server response 
// Security: Exposed vs. Protected 
// Purpose: UI Manipulates vs. Business logic 
// Context: User specific vs multiple users 


const vehiclePrototype = {
  init(model,year) {
    this.model = model;
    this.year = year;
    return this
  },
  getDetails() {
    return `${this.model} ${this.year}`
  }
}

const car1 = Object.create(vehiclePrototype).init("Toyota", 20202)
const car2 = Object.create(vehiclePrototype).init("Mercedez", 2020);
console.log(car2.getDetails())



function sum(...numbers) {
  let [one,two,three,fourth] = numbers
  return {
    one,
    two,
    three,
    fourth
  }

}
console.log(sum(1, 2, 3, 4)); // 10


// 1 expanding arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combinedarr = [...arr1,...arr2];
console.log(combinedarr)

let original = [1,2,3];
const copy = [...original];
console.log(copy,'copy')

const chars = [...'tejas'];
console.log(chars,'chars')

let obj1 = {x: 1, y: 2};
let obj2 = {z: 3};
const merged = {...obj1, ...obj2};
console.log(merged)

let numbers = [1,2,3];
console.log(Math.max(...numbers))

