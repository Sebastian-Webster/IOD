import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='products'>Products</NavLink>
            <NavLink to='users'>Users</NavLink>
            <NavLink to='......'>Profile</NavLink>
        </nav>
    )
}

export default NavBar