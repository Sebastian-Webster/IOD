import React, {useContext, useEffect} from "react"
import { UserConsumer } from "./context/NameContext"
import { NameContextTwo } from "./context/NameContext2"

export default function ContextDemoC() {
    const {name, setName} = useContext(NameContextTwo)

    /*useEffect(() => {
        var interval = setInterval(() => {
            setName(name => name === 'Sebastian' ? 'Bharath' : 'Sebastian')
        }, 2000);

        return () => {
            clearInterval(interval)
        }
    })*/

    return (
        <>
            <h1>User Consumer</h1>
            <UserConsumer>
                {username => {
                    return <h1>Hello {username}</h1>
                }}
            </UserConsumer>
            <h1>Name Consumer Two</h1>
            <h1>Hello {name}</h1>
        </>
    )
}