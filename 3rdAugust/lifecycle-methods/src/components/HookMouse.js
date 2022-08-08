import React, {useState, useEffect} from 'react';

const HookMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMouseMove = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMouseMove)

        return () => {
            console.log('Component unmounting.')
            window.removeEventListener('mousemove', logMouseMove)
        }
    }, [])

    return (
        <>
            <h1>X: {x}</h1>
            <h1>Y: {y}</h1>
        </>
    )
}

export default HookMouse