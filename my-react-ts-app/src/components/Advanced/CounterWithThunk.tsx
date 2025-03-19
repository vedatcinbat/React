import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { fetchIncrementAmount } from '../../store/counter/counterThunk';

const CounterWithThunk: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(fetchIncrementAmount())}>
        Fetch Increment
      </button>
    </div>
  );
};

export default CounterWithThunk;
