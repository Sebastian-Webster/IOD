import React, {useState} from 'react';

const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount)

    const increment = (value = 1) => setCount(count => count + value)
    const decrement = (value = 1) => setCount(count => count - value)
    const reset = () => setCount(initialCount)

    return {count, increment, decrement, reset}
}

export default useCounter;