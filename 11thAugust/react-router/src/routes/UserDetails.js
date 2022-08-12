import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const {userId} = useParams()
    return (
        <div>UserDetails for user with ID: {userId}</div>
    )
}
