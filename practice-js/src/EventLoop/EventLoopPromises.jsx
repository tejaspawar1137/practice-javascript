import {useEffect} from 'react'


/*
step 1: the first console.log executes immediatly once after the component mounted
step: 2: setTimeout is called which gets registered in the Web ApI and moves to the callback queue after 0ms
step:3: a promises is resolved immediatly however, its then(). callback its placed in the microtask queue
which has higher priority than the callback queue
step: 4: the second console executes immediatly cause i's synchronous
step: 5: the event loop checks microtask queue and finds the Promise.then() callback it executes loggin 3
step 6: only after all microtask are processed the event loop moves to the callback queue and executes the
setTimeout callback logging then execute the 4 console

 */
const EventLoopPromises = () => {
    useEffect(() => {
        console.log(`1) synchronous: once component mounted`);
        setTimeout(() => {
            console.log(`2) asynchronus: setTimeout executed`)
        },1000);
        Promise.resolve().then(() => {
            console.log(`3) Microtask: promise resolved`)
        });
        console.log(`4) synchronous: after promise`)
    },[])
  return (
    <div>EventLoopPromises</div>
  )
}

export default EventLoopPromises