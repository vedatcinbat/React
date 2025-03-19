import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import {
  increment,
  decrement,
  incrementByAmount,
  reset
} from "../../store/counter/counterSlice";

const CounterWithRedux: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default CounterWithRedux;
