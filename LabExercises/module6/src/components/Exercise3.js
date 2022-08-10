import React, {useState} from 'react'

const Exercise3 = () => {
    const [currentEmoji, setCurrentEmoji] = useState(0)
    const emojiList = ['😃', '😭']

    return (
        <>
            <h1>{emojiList[currentEmoji]}</h1>
            <button onClick={() => setCurrentEmoji(currentEmoji => currentEmoji === 0 ? 1 : 0)}>Toggle Emoji</button>
        </>
    )
}

export default Exercise3;