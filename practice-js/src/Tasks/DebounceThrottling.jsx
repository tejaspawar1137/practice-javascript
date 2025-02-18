import { useState, useEffect } from "react";

const useDebounce = (text, delay) => {
  const [debounceValue, setDebounceValue] = useState(text);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(text);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [text, delay]);
  return debounceValue
};

const useThrottling = (text, delay) => {
  const [throttledValue, setThrottledValue] = useState(text);
  const lastCall = useState(0);
  
   useEffect(() => {
     const now = Date.now();
     if (now - lastCall[0] > delay) {
       setThrottledValue(text);
       lastCall[0] = now;
     }
     //eslint-disable-next-line
   },[text,delay])
   return {
    throttledValue,
    lastCall
   }
};
const DebounceThrottling = () => {
  const [text, setText] = useState("");
  const debounceValue = useDebounce(text, 500);
  console.log(debounceValue,'debounceValue')
  const {throttledValue, lastCall} = useThrottling(text, 500);
  return (
    <>
      <h2>Debouncing & Throttling Example</h2>
      <input
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <p>Debounced Value: {debounceValue}</p>
      <p>Throttled Value: {throttledValue}</p>
      <p>LastCall Value: {lastCall}</p>
    </>
  );
};

export default DebounceThrottling;
