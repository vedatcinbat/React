import React, { useState } from "react";

function useArray<T>(initialValue: T[]): [T[], (item: T) => void, (index: number) => void] {
  const [array, setArray] = useState<T[]>(initialValue);

  const addItem = (item: T) => {
    setArray([...array, item]);
  };

  const deleteItem = (index: number) => {
    const newArray = array.filter((_, i) => i !== index);
    setArray(newArray);
  }

  return [array, addItem, deleteItem];
}

const GenericComponent: React.FC = () => {
  const [numbers, addNumber, deleteNumber] = useArray<number>([1, 2, 3, 12, -5]);

  return (
    <>
      <button onClick={() => addNumber(4)}>Add 4</button>
      <button onClick={() => deleteNumber(2)}>Delete Index 2</button>
      <button onClick={() => deleteNumber(numbers.length - 1)}>Delete Last Index</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </>
  );
};

export default GenericComponent;
