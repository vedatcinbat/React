import React, {useReducer} from 'react'

interface CounterState {
    count: number;
}

type Action = 
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'incrementBy', payload: number}
    | { type: 'reset' }

const initialState: CounterState = { count: 0 }

const counterReducer = (state: CounterState, action: Action): CounterState => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'incrementBy':
            return { count: state.count + action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}


const AdvancedCounter: React.FC = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)

  return (
    <>
        <div>Counter: {state.count}</div>
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'incrementBy', payload: 10})}>Increment 10</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </>
  )
}

export default AdvancedCounter