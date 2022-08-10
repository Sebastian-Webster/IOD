import React, {useState, useMemo} from 'react';

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    //Processing a huge record/filtering/sorting
    // const isEven = () => {
    //     let i = 0;
    //     while (i < 2000000000) i++
    //     return counterOne % 2 === 0
    // }

    const isEven = useMemo(() => {
        let i = 0;
        //while (i < 2000000000) i++ Uncomment this line to see what useMemo does
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </>
    )
}

export default Counter