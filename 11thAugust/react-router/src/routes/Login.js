import React, {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <label>Email: </label>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <label>Password: </label>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </>
    )
}

export default Login;