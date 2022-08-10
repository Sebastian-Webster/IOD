import React, {useReducer} from 'react';

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            console.error('A weird action was passed to the reducer')
    }
}

const UseReducerCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={() => {dispatch('increment')}}>Increment</button>
            <button onClick={() => {dispatch('decrement')}}>Decrement</button>
            <button onClick={() => {dispatch('reset')}}>Reset</button>
        </div>
    )
}

export default UseReducerCounter;