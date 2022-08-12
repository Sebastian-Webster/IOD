import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Order Confirmed!</h1>
            <button onClick={() => navigate('/', {replace: true})}>Go Back</button>
        </>
    )
}

export default OrderSummary