import React, {useReducer} from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 0,
    thirdCounter: 0,
    fourthCounter: 0,
    fifthCounter: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {
                ...state,
                [action.counter]: state[action.counter] + action.value
            }
        case 'decrement':
            return {
                ...state,
                [action.counter]: state[action.counter] - action.value
            }
        case 'reset':
            return {
                ...state,
                [action.counter]: initialState[action.counter]
            }
        default:
            return state
    }
}

const CounterComponent = ({counter, text, count, dispatch}) => {
    return (
        <div style={{marginTop: 50, marginBottom: 50}}>
            <h2>{text} = {count[counter]}</h2>
            <button onClick={() => {dispatch({type: 'increment', value: 1, counter: counter})}}>Increment</button>
            <button onClick={() => {dispatch({type: 'decrement', value: 1, counter: counter})}}>Decrement</button>
            <button onClick={() => {dispatch({type: 'increment', value: 5, counter: counter})}}>Increment by 5</button>
            <button onClick={() => {dispatch({type: 'decrement', value: 5, counter: counter})}}>Decrement by 5</button>
            <button onClick={() => {dispatch({type: 'increment', value: 10, counter: counter})}}>Increment by 10</button>
            <button onClick={() => {dispatch({type: 'decrement', value: 10, counter: counter})}}>Decrement by 10</button>
            <button onClick={() => {dispatch({type: 'reset', counter: counter})}}>Reset</button>
        </div>
    )
}

const UseReducerCounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <CounterComponent counter="firstCounter" text="1st Count" count={count} dispatch={dispatch}/>
            <CounterComponent counter="secondCounter" text="2nd Count" count={count} dispatch={dispatch}/>
            <CounterComponent counter="thirdCounter" text="3rd Count" count={count} dispatch={dispatch}/>
            <CounterComponent counter="fourthCounter" text="4th Count" count={count} dispatch={dispatch}/>
            <CounterComponent counter="fifthCounter" text="5th Count" count={count} dispatch={dispatch}/>
        </div>
    )
}

export default UseReducerCounterTwo;