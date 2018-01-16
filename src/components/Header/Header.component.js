import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Nav from '../Nav'
import './Header.css'

const Header = () => (
  <header>
    <img className="logo" src={logo} alt="WidgetSales Logo"/>
    <Link to="/">
      <h1 className="site-title">
        Widget<span className="site-title__highlight">Sales</span>
      </h1>
    </Link>
    <Nav />
  </header>
)

export default Header
