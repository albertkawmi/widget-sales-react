import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => (
  <nav>
    <StyledNavLink to="/clients">
      Clients
    </StyledNavLink>
    <StyledNavLink to="/sales">
      Sales
    </StyledNavLink>
    <StyledNavLink to="/fault">
      Fault
    </StyledNavLink>
  </nav>
)

const StyledNavLink = (props) => (
  <NavLink
    className="nav-link"
    activeClassName="nav-link__active"
    {...props}
  />
)

export default Nav
