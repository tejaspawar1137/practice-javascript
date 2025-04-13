import React, { useCallback, useState } from 'react'
import Child1 from './Child';
import Child2 from './Child2';

const Parent = () => {
  const [parent, setParent] = useState(0);
  const [child, setChild] = useState(0);
  const [child2, setChild2] = useState(0)
  const updateParent = () => {
    setParent(parent + 1)
  }

  
  const updateChild1 = useCallback(() => {
    setChild(Math.floor(Math.random() * 100) + 1);
  },[child]);

  const updateChild2 = useCallback(() => {
    setChild2(Math.floor(Math.random() * 100) + 1);
  },[child2]);
  console.log("Parent rendered")
  return (
    <div>
      Parent: {parent}
      <button onClick={updateParent}>Update Parent</button>
    
     <br></br>
      <Child1 value={child} updateValue={updateChild1} />
      <Child2 value={child2} updateChild2={updateChild2} />
    </div>
  )
}

export default Parent