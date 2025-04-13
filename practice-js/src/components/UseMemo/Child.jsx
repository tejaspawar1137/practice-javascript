import {memo} from 'react'

const Child1 = memo(({ value, updateValue }) => {
  console.log("Child 1 rerendered");

  return (
    <>
      <p>Child 1- {value}</p>
      <button onClick={updateValue}>Update Child 1</button>
    </>
  );
});

// Add display name
Child1.displayName = 'Child1';

export default Child1