// 1) Example 1) Nested Promises with SetTimeout

  //  console.log("A");

  //  setTimeout(() => {
  //   console.log("B");
  //   Promise.resolve().then(() => {
  //     console.log("C")
  //   })
  //  },0)

  //  Promise.resolve().then(() => {
  //   console.log("D");
  //   setTimeout(() => {
  //    console.log("E")
  //   },0)
  //  }) 

  //  console.log("F")

   // A, F, D, B, C, E


   // Example 2  Combining Chained Promises and Timer Nesting

   console.log("Start")

   setTimeout(() => {
    console.log("Timeout 1");
    Promise.resolve().then(() => {
      console.log("Promise 1");
    }).then(() => {
      console.log("Promise 2")
    })
   },0)

   Promise.resolve().then(() => {
    console.log("Promise 3"); 
    setTimeout(() => {
      console.log("Timeout 2")
    },0)
    return Promise.resolve()
   }).then(() => {
    console.log("Promise 4")
   })

   console.log("End")

   // Start, End, Promise 3, promise 4, timeout 1, promise1, promise2, timeout 2


   /*


   # What is the Event Loop?
=> At its core,the javascript event loop is responsible for managing the execution of code, and collecting and processing events, and executing queued tasks. Javascript operates in a single-threaded environment, meaning only one piece of code runs at a time. The event loop ensures that tasks are executed in the correct order, enabling asynchronous programming.
   To explain it in simple terms, imaging you are running a todo list, The event loop is like a manager that ensures tasks are completed in right order, depending on their type and urgency

   () Components of the Event Loop:

     1) Call Stack: keeps tracks of function calls. when a function is invoked, it is pushed onto the stack. when the function finishes execution, it is popped off.

     2) Web API's: Provides browser features like setTimeout, DOM events, and HTTP requests. These API's handle asynchronous operations.

     3) Task Queue (Callback Queue): Stores tasks of Task queue or (callback queue) waiting to be executed after the call stack is empty. These tasks are queued by setTimeout, setInterval, or other API's

     4) Microtask Queue: A higher priority queue for promises and MutationObserver callbacks. Microtasks are executed before tasks in the task queue.
     
     5) Event Loop: Continuesly checks if all the call stack is empty and pushes tasks from microtasks queue or task to the call stack for execution.

  () How it work's simplied with analogy
     
     1) Your main Task: Javascript executes code line by line in a simple thread. This is called a (call Stack);

     2) Waiting Task (Events): Some tasks takes time (e.g fetching data from internet, timers). Instead of blocking progresses, these tasks are sent to "wait in line" in a queue (known as the event queue);

     3) The Manager (Event Loop): The event loop constantly checks 
       > Is the main task is empty (call stack);
       > Are there any tasks waiting in the queue 
       if yes. it picks a task from the queue and moves it to the stack for execution.

    
    () Types of Tasks in Javascript

     1) Synchronous Tasks: Executed immediatly on the call stack (e.g functions calls, variable declaration);

     2) Microtasks: High priority asynchronous tasks, such as Promise callbacks and queuedMicrotasks

     3) Macrotasks: Lower priority asynchronous tasks, like setTimeout, setInterval, and DOM events;


  () Order Of Execution:

  1) Executes all the Synchronous Tasks on call stack;
  2) Processes all microtasks in the microtasks queue;
  3) process the first task in the macrotask queue;
  4) Repeat 

  () KEY POINTS

  1) Microtasks (Promises) always executes before macrotasks (setTimeout, setInterval);
  2) Nesting promises creates a queue of microtasks that executes in the same cycle
  3) Timers (setTimeout) will always defer execution to the next event loop cycle, while microtasks resolves immediatly after the current tasks */
  