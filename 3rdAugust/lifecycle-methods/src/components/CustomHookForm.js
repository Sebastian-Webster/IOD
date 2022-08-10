import React from "react";
import useInput from "./hooks/useInput";

const CustomHookForm = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput();
    const [lastName, bindLastName, resetLastName] = useInput();

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" {...bindFirstName} placeholder="First Name"/>
            <input type="text" {...bindLastName} placeholder="Last Name"/>
            <input type="submit" value="Submit Form"/>
        </form>
    )
}

export default CustomHookForm;