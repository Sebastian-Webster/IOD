import React, {useState} from 'react';

const Exercise2 = ({name}) => {
    const [showName, setShowName] = useState(false)

    return (
        <>
            <h1>Hello {showName ? name : 'World'}!</h1>
            <button onClick={() => setShowName(showName => !showName)}>Show {showName ? 'hello world' : 'name'}</button>
        </>
    )
}

export default Exercise2;