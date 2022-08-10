import React from "react";
import useCounter from "./hooks/useCounter";

const CounterWithCustomHookOne = () => {
    const {count, increment, decrement, reset} = useCounter(0)

    return (
        <>
            <h1>Count is: {count}</h1>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
            <button onClick={() => increment(5)}>Increment by 5</button>
            <button onClick={() => decrement(5)}>Decrement by 5</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default CounterWithCustomHookOne;