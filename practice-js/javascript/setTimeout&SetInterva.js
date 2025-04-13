/* 
both setTimeout and setInterval in javascript both setTimeout and setInterval are macrotasks used 
to schedule code execution asynchronously

*/

//TODO: 1    setTimeout() // setTimeout executes a function once after a specified delay 

// 1) it accepts the callback to execute a function after the specified delay
  // 2) delay: time in milisecond (1s = 1000ms);
  
  
  console.log('start');
  setTimeout(() => {
    console.log("middle")
  },1000)
  console.log("end")
  
  
  // TODO: 2   setInterval() // executes a function repeatedly a fixed interval 
    // 1) callback: a function to execute repeatedly 
    // 2) interval: time in milisecond between execution 
    
    
    let count = 0;
  const intervalStop =  setInterval(() => {
        count++;
        console.log(`Executed ${count} time`);
        if(count === 5) {
            clearInterval(intervalStop)
        }
    },1000)
    
    
    /*  
    
    When to use them
    1) use setTimeout when you need a delay before running the code 
    exmaple: delaying api calls to avoid overloading a server
    showing a notification after a delay 
    
    2) Use setInterval when we need repeatedly execution;
    example: Deplaying a live clock 
    example: autorefreshing data every few seconds  */
    
    