import React, {useState} from 'react'

function ReactHookWithArrays() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems(items => [
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }

    const addThousandItems = () => {
        for (let i = 0; i < 1000; i++) {
            setItems(items => [
                ...items,
                {
                    id: items.length,
                    value: Math.floor(Math.random() * 10) + 1
                }
            ])
        }
    }

    return (
        <>
            <button onClick={addItem}>Add a number</button>
            <button onClick={addThousandItems}>Add a thousand numbers</button>
            {items.length > 0 && (
                <ul>
                    {
                        items.map(item => <li key={item.id}>{item.value}</li>)
                    }
                </ul>
            )}
        </>
    )
}

export default ReactHookWithArrays