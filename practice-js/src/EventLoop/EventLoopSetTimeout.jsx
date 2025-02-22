import {useEffect} from 'react'

// This example shows how the event loop processes a macrotask setTimeout and how it executes
// after synchronous code 
// step 1: the useEffect hook runs when the components mounts
// step 2: the first console synchronous executes immediatly 
// step 3: setTimeout is called but it doesn't execute immediatly. Instead it's registerd with the Web ApI, 
// which will move it to the callback queue after 1000ms 
// step 4: the second console synchnonous executes immidiatly 
// step 5: after 1000ms, setTimeout's callback function is moved to the Callback Queue;
// step 6: the Event loop checks if the call stack is empty. once it is setTimeout callback executes 
// printing and then asynchronous callback executes 

const EventLoopSetTimeout = () => {
    
    useEffect(() => {
        console.log(`Synchronous:  1 component mounted`);
        setTimeout(() => {
            console.log(`Asynchronous: setTimeout Executed`)
        },1000)
        console.log(`Synchronous 2: after set Tiemout`)
    },[])
  return (
    <div>EventLoopSetTimeout</div>
  )
}

export default EventLoopSetTimeout