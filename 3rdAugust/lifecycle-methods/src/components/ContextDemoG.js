import React, {useContext} from 'react'
import { NameContextTwo } from './context/NameContext2';
import { NameContextThree } from './context/NameContext3';

const ContextDemoG = () => {
    const {name, setName} = useContext(NameContextTwo)
    const lastName = useContext(NameContextThree)
    return (
        <>
            <h1>I am ContextDemoG</h1>
            <h1>Welcome {name} {lastName}</h1>
        </>
    )
}

export default ContextDemoG;