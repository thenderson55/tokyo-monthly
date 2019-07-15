import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to='/'>Tokyo-Monthly</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to='/'>Home</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to='/contact'>Contact</NavLink>
          </li>
          {/* <li className="nav-item active">
            <NavLink className="nav-link" to='/detail'>Detail</NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar