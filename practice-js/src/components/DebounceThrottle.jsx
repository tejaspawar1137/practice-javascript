import { useState, useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:active {
    background-color: #0056b3;
  }
`;

const EventCounter = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #e9ecef;
  border-radius: 4px;
`;

const DebounceThrottle = () => {
  // Normal counter (no debounce/throttle)
  const [normalCount, setNormalCount] = useState(0);
  
  // Debounced counter
  const [debounceCount, setDebounceCount] = useState(0);
  
  // Throttled counter
  const [throttleCount, setThrottleCount] = useState(0);

  // Debounce function - Waits until user stops clicking for 1 second
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      // Cancel previous timeout
      clearTimeout(timeoutId);
      // Start new timeout
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Throttle function - Only allows one click every 1 second
  const throttle = (func, limit) => {
    let canCall = true;
    return (...args) => {
      if (canCall) {
        func(...args);
        canCall = false;
        // Allow next call after limit
        setTimeout(() => {
          canCall = true;
        }, limit);
      }
    };
  };

  // Normal button click - counts every click
  const handleNormalClick = () => {
    setNormalCount(prev => prev + 1);
  };

  // Debounced button click - waits 1 second after last click
  const handleDebounceClick = useCallback(
    debounce(() => {
      setDebounceCount(prev => prev + 1);
    }, 1000),
    []
  );

  // Throttled button click - only counts once per second
  const handleThrottleClick = useCallback(
    throttle(() => {
      setThrottleCount(prev => prev + 1);
    }, 1000),
    []
  );

  return (
    <Container>
      <h1>Debounce vs Throttle Example</h1>
      
      <Section>
        <h2>Normal Button (No Delay)</h2>
        <p>Counts every single click immediately</p>
        <Button onClick={handleNormalClick}>Click Me!</Button>
        <EventCounter>
          Click count: {normalCount}
        </EventCounter>
      </Section>

      <Section>
        <h2>Debounced Button (Wait for pause)</h2>
        <p>Only counts after you stop clicking for 1 second</p>
        <p>Try clicking multiple times quickly - it will only count once!</p>
        <Button onClick={handleDebounceClick}>Click Me!</Button>
        <EventCounter>
          Debounced count: {debounceCount}
        </EventCounter>
      </Section>

      <Section>
        <h2>Throttled Button (Regular intervals)</h2>
        <p>Only counts once per second, no matter how many times you click</p>
        <p>Try clicking rapidly - it will count at a steady pace!</p>
        <Button onClick={handleThrottleClick}>Click Me!</Button>
        <EventCounter>
          Throttled count: {throttleCount}
        </EventCounter>
      </Section>
    </Container>
  );
};

export default DebounceThrottle;