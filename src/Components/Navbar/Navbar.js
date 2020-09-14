import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
    return (
        <div className="nav">
            <NavLink to="/">
                <h3 className="logo">LOGO</h3>
            </NavLink>
            <ul className="the-lists">
                <NavLink to="/" className="lists">Home</NavLink>
                <NavLink to="/about" className="lists">About</NavLink>
                <NavLink to="/shop" className="lists">Shop</NavLink>
            </ul>
        </div>
    )
}

export default Navbar
