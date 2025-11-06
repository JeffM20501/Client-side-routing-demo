import React from 'react'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="shadow-2xl ...">
            <ul>
                <li><NavLink exact to="/home">Home</NavLink></li>
                <li><NavLink exact to="/about">About Us</NavLink></li>
                <li><NavLink exact to="/contact">Conatct Us</NavLink></li>
                <li><NavLink exact to='/counttracker'>Count Tracker</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar