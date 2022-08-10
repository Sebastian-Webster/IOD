import { useState } from "react";

const useWelcomeForm = () => {
    const [firstName, setFirstNameState] = useState('')
    const [lastName, setLastNameState] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        alert(`Weclome ${firstName} ${lastName}`)
    }

    const setFirstName = (e) => {
        setFirstNameState(e.target.value)
    }
    
    const setLastName = (e) => {
        setLastNameState(e.target.value)
    }

    return {firstName, setFirstName, lastName, setLastName, onSubmit}
}

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const reset = () => {
        setValue('')
    }

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, bind, reset]
}

export default useInput;