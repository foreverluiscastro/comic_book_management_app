import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/clients"> Clients </NavLink>
            <NavLink to="/comics"> Comic Orders</NavLink>
        </div>
    )
}

export default NavBar