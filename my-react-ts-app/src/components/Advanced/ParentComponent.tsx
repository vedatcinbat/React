import React, { useState, useCallback } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Without useCallback, the increment function weoul be recreated on every render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      <ExpensiveComponent value={count} />
    </div>
  );
};

export default ParentComponent;
