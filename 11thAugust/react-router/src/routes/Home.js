import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Home Screen</h1>
            <button onClick={() => {navigate('order-summary')}}>Place Order</button>
        </>
    )
}

export default Home;