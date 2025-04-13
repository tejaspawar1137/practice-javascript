// ! Execution Context & Call Stack (With Simple Explanation & Examples)

// ? What is Execution Context? 
// *=> think of an execution context as a box where javascript runs your code. Each time a function is executes. a new execution context is created

// ? 2. Types of Execution Context
 

  // ! 1) Global Execution Context (GEC): 
  // GEC global execution context gets created when your script start running.
  // there is only one global execution context;
  
  // ! 2) Function Execution Context (FEC):
  // Function execution context(FEC) creates whenever a function is called. Each 
  // function gets its own execution context;


  // ? 3) What is call stack ? 

  // * => think of the call stack as a pile of books. Every time you call a function 
  // * it adds (push) a book on top. when the function finishes the book is removed


  console.log("Start");  // global execution context

  function greet() {
    console.log("hello");
  }
  greet(); // function execution context (fec)

  console.log("End")   // global execution context resume 

  /* Step by Step Execution call stack changes

  1) Global Execution Context (GEC) is created;
   . console.log("Start"); 


  /*

Step 1: Global Execution Context
------------------
|  GEC (global)  |
------------------

Step 2: greet() is called → New Function Execution Context
------------------
| greet()       |
|  GEC (global)  |
------------------

Step 3: greet() finishes → Function Execution Context is removed
------------------
|  GEC (global)  |
------------------

Step 4: Global Execution Context finishes (Program ends)


*/





// ? Example 2: Nested Function Execution

console.log("Start Nested");

function first() {
  console.log("Inside first function");
  second()
}

function second() {
  console.log("Inside second function");
}

first();

console.log("End");




// * Step-by-Step Execution
// * 1) Global execution context is created 
// console.log("Start nested");
// * 2) Function first() is called new function execution context gets created 
// console.log("Inside first function") runs => Inside firs function 

 // * 3) Function second() is called from first() new function execution context is created.
 // console.log("inside second function") // printed 
 // second() finishes => its execution context is removed 
 // 4) first function() fisnishes => its execution context is removed 
 // 5) global execution context is resume 
 // console.log("End")


/* 



Step 1: Global Execution Context
------------------
|  GEC (global)  |
------------------

Step 2: first() is called
------------------
| first()       |
|  GEC (global)  |
------------------

Step 3: second() is called from inside first()
------------------
| second()      |
| first()       |
|  GEC (global)  |
------------------

Step 4: second() finishes → Remove second()
------------------
| first()       |
|  GEC (global)  |
------------------

Step 5: first() finishes → Remove first()
------------------
|  GEC (global)  |
------------------

Step 6: Global Execution Context finishes (Program ends)


*/


/* 
// ? Summary
1) Execution Context: The environment where javascript runs  code;
2) Global Execution Context: Created when script start runs;
3) Function Execution Context: Created when a function is called 
4) Call Stack: A structure that tracks function calls in order. Functions are added and removed like a stack of books
*/