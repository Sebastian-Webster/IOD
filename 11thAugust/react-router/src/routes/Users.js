import React, {useMemo, useState} from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active'
    // eslint-disable-next-line
    const [users, setUsers] = useState([
        {
            id: 1,
            status: 'active',
            name: 'Seb1'
        },
        {
            id: 2,
            status: 'inactive',
            name: 'Seb2'
        },
        {
            id: 3,
            status: 'active',
            name: 'Seb3'
        },
        {
            id: 4,
            status: 'active',
            name: 'Seb4'
        },
        {
            id: 5,
            status: 'inactive',
            name: 'Seb5'
        },
        {
            id: 6,
            status: 'inactive',
            name: 'Seb6'
        },
        {
            id: 7,
            status: 'inactive',
            name: 'Seb7'
        },
        {
            id: 8,
            status: 'inactive',
            name: 'Seb8'
        },
        {
            id: 9,
            status: 'active',
            name: 'Seb9'
        },
        {
            id: 10,
            status: 'active',
            name: 'Seb10'
        }
    ])

    const filteredUsers = useMemo(() => {
        return showActiveUsers ? users.filter(item => item.status === 'active') : users
    }, [showActiveUsers, users])

    return (
        <>
            <div>
                {showActiveUsers ?
                    <button onClick={() => setSearchParams({})}>
                        Reset Filter
                    </button>
                :
                    <button onClick={() => setSearchParams({ filter: 'active' })}>
                        Filter Active Users
                    </button>
                }
                {showActiveUsers ? (
                    <h2>Showing active users</h2>
                ) : (
                    <h2>Showing all users</h2>
                )}
                {
                    filteredUsers.map(item => (
                        <div key={item.id} style={{marginTop: 10, marginBottom: 10}}>
                            <Link to={item.id.toString()}>User {item.name} is {item.status}</Link>
                        </div>
                    ))
                }
            </div>
            <Outlet/>
        </>
    )
}

export default Users;