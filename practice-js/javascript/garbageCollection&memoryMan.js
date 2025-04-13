// ! What is memory management?
// => Memory management is how a program handles the allocation and release the memory. in javascript
// this process is mostly automatic, when we create variables, objects, or functions, memory is allowcated, and when they are no longer needed, javascript frees up that memory

// ! What is garbage collection ?
// =>  Garbage collection is the process where javascript automatically detects and removes objects that are no longer needed to free up memory. This prevents memory leaks.

/* How javascript allowcates memory 
  Javascript Uses memory in three stages 
  1) Allowcation: when we declares variables or objects or functions memory is allowcated 
  2) Use: The program reads/writes in memory 
  3) Release (garbage collection): When data is no longer needed, memory is automatically freed. */

// example 1 automatic garbage collection

function createUser() {
  let user = {
    name: "tejas",
    age: 32,
  };
  console.log(user.age);
} // After function execution, 'user' is no longer accesible, so GC removes it
createUser();

// How Does Javasript know What to Delete
// Javascript uses (Reference Counting) and (Mark-and-Sweep) algorithm;

/* 1️⃣ Reference Counting
If no references exist to an object, it is deleted.
Issue: If two objects reference each other, they may never be deleted.*/

//❌ Example of a memory leak due to reference counting:

function circularReference() {
  let obj1 = {};
  let obj2 = {};
  obj1.ref = obj1; // fix obj1.ref = null
  obj2.ref = obj2; // fix obj2.ref = null
}
circularReference();
// memory leaks obj1 and obj2 keeps referencing each other won't be garbage collected

/* 2️⃣ Mark-and-Sweep (How Modern JS Works)
The garbage collector marks objects still accessible and removes the rest.
Objects with no references are "swept" (deleted). */

let obj1 = { name: "test" };
obj1 = null;

/* Common Causes of Memory Leaks
1️⃣ Global Variables (Unintended References)


function leakyFunction() {
    myGlobalVar = "I'm not declared with let/const!";
}
leakyFunction();
 `myGlobalVar` stays in memory because it became a global variable.
🛠 Fix: Always use let or const to avoid accidental global variables.

2️⃣ Event Listeners Not Removed


document.getElementById("myButton").addEventListener("click", function () {
    console.log("Clicked!");
});
🛠 Fix: Remove event listeners when no longer needed.


Edit
document.getElementById("myButton").removeEventListener("click", myFunction);
3️⃣ SetInterval Without Clearing


setInterval(() => console.log("Running..."), 1000);
🛠 Fix: Use clearInterval when the interval is no longer needed.


let interval = setInterval(() => console.log("Running..."), 1000);
clearInterval(interval);
Key Takeaways
✔️ JavaScript automatically manages memory, but inefficient code can cause memory leaks.
✔️ Use null, remove event listeners, and clear intervals to free up memory.
✔️ Understand garbage collection mechanisms to write efficient code.

Would you like real-world scenarios or a deeper dive into performance tuning? 🚀







 */

test()

function test() {
  console.log("function worked")
}