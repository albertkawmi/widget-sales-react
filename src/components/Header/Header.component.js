import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Nav from '../Nav'

const Header = () => (
  <header>
    <img className="logo" src={logo} alt="WidgetSales Logo"/>
    <Link to="/">
      <h1>
        Widget<span className="title-highlight">Sales</span>
      </h1>
    </Link>
    <Nav />
  </header>
)

export default Header
