import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar(){
  return(
    <ul className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/burgers">Burgers</NavLink>
      </li>
    </ul>
  )
};

export default NavBar;
