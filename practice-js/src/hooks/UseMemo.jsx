import { useState } from "react";
import Parent from "../components/UseMemo/Parent";
import UseMemoExamples from "../components/UseMemo/UseMemoExamples";

const UseMemo = () => {
  const [showExamples, setShowExamples] = useState(false);

  return (
    <div>
      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <button
          onClick={() => setShowExamples(!showExamples)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {showExamples ? 'Show Basic Example' : 'Show Real-World Examples'}
        </button>
      </div>

      {showExamples ? (
        <UseMemoExamples />
      ) : (
        <Parent />
      )}
    </div>
  );
};

// Add display name
UseMemo.displayName = "UseMemo";

export default UseMemo;
