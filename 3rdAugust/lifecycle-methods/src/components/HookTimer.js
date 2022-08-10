import React, {useState, useEffect, useRef} from 'react'

const HookTimer = () => {
    const [timer, setTimer] = useState(0);
    const [timerIsRunning, setTimerIsRunning] = useState(true);
    const intervalRef = useRef(null)

    useEffect(() => {
        startTimer()

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
        setTimerIsRunning(true)
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current)
        setTimerIsRunning(false)
    }

    return (
        <div>
            HookTimer - {timer}
            <button onClick={() => {timerIsRunning ? stopTimer() : startTimer()}}>{timerIsRunning ? 'Clear Timer' : 'Restart Timer'}</button>
        </div>
    )
}

export default HookTimer;