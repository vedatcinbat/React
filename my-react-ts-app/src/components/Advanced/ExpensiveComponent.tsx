import React from "react";

interface ExpensiveComponentProps {
  value: number;
}

const ExpensiveComponent: React.FC<ExpensiveComponentProps> = React.memo(
  ({ value }) => {
    console.log("ExpensiveComponent rendered");
    // Complex calculations
    for (let i = 0; i < 1000000; i++) {
      // Do nothing
      // This is a very expensive operation
      value += i;
    }

    return <div>Computed Value: {value}</div>;
  }
);

/* const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({value}) => {
    console.log('ExpensiveComponent rendered')
    // Complex calculations
    for (let i = 0; i < 100000000000; i++) {
        // Do nothing
        // This is a very expensive operation
        value += i;
    }

    return <div>Computed Value: {value}</div>
} */
export default ExpensiveComponent;
