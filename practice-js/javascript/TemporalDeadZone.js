/* 



Understanding the Temporal Dead Zone (TDZ) in JavaScript
The Temporal Dead Zone (TDZ) is the time between the hoisting of a variable and its initialization, during which accessing the variable results in a ReferenceError.

📌 Example 1: Accessing let or const Before Initialization

console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;
🔍 Explanation
The variable a is hoisted but remains in the TDZ until its initialization (let a = 10;).
Any access to a before this line results in an error.
📌 Example 2: Function Scope and TDZ

function test() {
  console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
  let x = 5;
}

test();
🔍 Explanation
let x is hoisted at the top of the test() function.
Since x is still in the TDZ before it is assigned 5, accessing it causes an error.
📌 Example 3: TDZ with const

console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
const y = 20;
🔍 Explanation
const behaves like let regarding hoisting.
Since y is in the TDZ, trying to access it before initialization throws an error.
📌 Example 4: TDZ in Block Scope (let and const inside a block)

{
  console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
  let z = 100;
}
🔍 Explanation
The variable z is hoisted inside the block {} but stays in the TDZ until it's initialized.
📌 Example 5: Function Expressions in TDZ

console.log(myFunc); // ❌ ReferenceError: Cannot access 'myFunc' before initialization

const myFunc = function() {
  console.log("Hello");
};
🔍 Explanation
const myFunc is hoisted but not initialized yet.
Since myFunc is in the TDZ, calling it before the assignment results in an error.
📌 Example 6: No TDZ with var (but undefined issue)

console.log(b); // ✅ undefined (no ReferenceError)
var b = 50;
🔍 Explanation
var is hoisted and initialized as undefined, so no TDZ exists.
However, using var before initialization can cause unexpected behavior due to undefined.
🔍 How to Avoid TDZ Issues
Always declare variables at the top of their scope before using them.
Use const or let instead of var to avoid unexpected undefined values.
Understand function expressions vs. function declarations.
Avoid accessing variables before their initialization in block scope.
Let me know if you need more examples! 🚀

*/
