import React from 'react'
import '../css/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar-brand">
            <Link to='/'>Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/favourites' className='nav-link'>Favourites</Link>
        </div>
    </nav>
  )
}

export default NavBar
