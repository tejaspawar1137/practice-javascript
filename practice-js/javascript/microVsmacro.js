/* in javascript event loop handlers asynchronous operations by managing two types of tasks microtasks
and macrotasks. understanding the different between them is crucial for understanding how javascript handlers
asynchronous code execution */


 /* 1: Macrotasks (Tasks)
 
 macrotasks are larger, high level tasks that are executed in the event loop.
 // Examples of macrotasks includes
 
 1) setTimeout(() => {}) and setInterval(() => {}) callbacks
 2) DOM Events: (e.g click scroll etc);
 3) I/O operations (e.g reading files network requests);
 4) requestAnimationFrame
 5) Rendering Updates 
 
  // how macrotasks works 
  . macrotasks are executed one at a time 
  . the Event loop processes a macrotask, then checks if there are any macrotasks to execute
  before moving on to the next macrotask.
  . Macrotasks are queued in the task queue  */
  
  /*   
  MicroTasks vs Macrotasks 
  
  .) Microtasks have higher priority than the macrotasks and execute immidiatly after the currently
  rnning script but before the next rendering cycle
    (Examples. Promise.then(), mutation observer, queueMicrotask());
    
    .) Macrotasks: run after microtasks and are schedule to execute in the next event loop cycle
    (Examples: setTimeout(), setInterval(), setImmidate,(), nodejs, requestAnimationFrame)
  */
 
    
    //TODO:  example 1 Microtask 
    
    // console.log("Script start");
    
    // setTimeout(() => {
    //     console.log("setTimeout: macrotasks")
    // });
    
    // Promise.resolve().then(() => {
    //     console.log("Promise 1: microtasks")
    // });
    
    // Promise.resolve().then(() => {
    //     console.log("Promise 2: microtaks")
    // })
    
    // console.log("script end")
    
    //TODO: Example 2   queueMicrotask()
    
    // console.log("Start");
    
    
    // queueMicrotask(() => {
    //     console.log("Microtask 1")
    // });
    
    // console.log("middle");
    
    
    // queueMicrotask(() => {
    //     console.log("Microtasks 2")
    // })
    
    // console.log("end")
    
    // queueMicrotask(): schedule tasks in the microtasks queue;
    // microtasks runs after synchronous code but before the macrotasks
    
    
    
    // TODO: example 3 Macrotasks execution order
    
     
     
    //    console.log("Start")
       
    //    setTimeout(() => {
    //     console.log("setTimeout 1: macrotasks")
    //    },1000);
       
    //     setTimeout(() => {
    //     console.log("setTimeout 2: macrotasks")
    //    },2000);
       
    //    console.log("End")
       
       
       // setTimeout schedules macrotasks, which runs after the synchronous code finished 
       
       
       // TODO: 4 example microtask vs macrotask combined 
       
       console.log("Start");
       
       setTimeout(() => {
        console.log("setTimeout 1: macrotask")
       },1000)
       
        setTimeout(() => {
        console.log("setTimeout 1: macrotask")
       },2000)
       console.log("middle")
       Promise.resolve().then(() => {
        console.log("Promise 1: microtask")
       })
       
         Promise.resolve().then(() => {
        console.log("Promise 2: microtask")
       })
       
       console.log("End")