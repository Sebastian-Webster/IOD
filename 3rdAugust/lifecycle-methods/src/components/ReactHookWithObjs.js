import React, {useState} from 'react';

const ReactHookWithObjs = () => {
    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({...name, firstName: e.target.value})}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({...name, lastName: e.target.value})}
                    placeholder="Last Name"
                />
            </form>
            <h2>Your first name is: {name.firstName}</h2>
            <h2>Your last name is: {name.lastName}</h2>
        </>
    )
}

export default ReactHookWithObjs