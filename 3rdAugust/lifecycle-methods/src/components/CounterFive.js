// SAME CODE AS CounterThree.js AND CounterFour.js

import React, {useContext} from 'react';
import { GlobalCounterContext } from './context/GlobalCounterContext';

const CounterFive = () => {
    const {count, dispatchCount} = useContext(GlobalCounterContext)
    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={() => {dispatchCount({type: 'increment', value: 1})}}>Increment</button>
            <button onClick={() => {dispatchCount({type: 'decrement', value: 1})}}>Decrement</button>
            <button onClick={() => {dispatchCount({type: 'reset'})}}>Reset</button>
        </div>
    )
}

export default CounterFive;