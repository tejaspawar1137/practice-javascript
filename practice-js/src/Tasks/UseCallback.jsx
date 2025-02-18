import React, { useState, useCallback } from "react";

const Counter = React.memo(({ onIncrement }) => {
  console.log("Counter rendered");
  return <button onClick={onIncrement}>Increment</button>;
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const onIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // We pass an empty array because we only want to create onIncrement once

  return (
    <div>
      <h1>Count: {count}</h1>
      <Counter onIncrement={onIncrement} />
    </div>
  );
};

export default UseCallback;
