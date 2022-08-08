import React, {useState} from 'react';

const HookCounter = ({initialCount}) => {
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    const decrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount - 1)
        }
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => {setCount(0)}}>
                Reset Count
            </button>
            <button onClick={() => {setCount(prevCount => prevCount + 1)}}>
                Increment Count
            </button>
            <button onClick={() => {setCount(prevCount => prevCount - 1)}}>
                Decrement Count
            </button>
            <button onClick={incrementFive}>
                Increment Count by 5
            </button>
            <button onClick={decrementFive}>
                Decrement Count by 5
            </button>
        </>
    )
}

export default HookCounter;