import {memo} from 'react'

const Child2 = memo(({ value, updateChild2 }) => {
  console.log("Child 2 rerendered");

  return (
    <>
      <p>Child 2 - {value}</p>
      <button onClick={updateChild2}>Update Child 2</button>
    </>
  );
});

// Add display name
Child2.displayName = 'Child2';

export default Child2;