import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Nav from '../Nav'
import './Header.css'

const Header = () => (
  <div className="header-bg">
    <header className="wrap">
      <img className="logo" src={logo} alt="WidgetSales Logo"/>
      <Link className="site-title-link" to="/">
        <h1 className="site-title">
          Widget<span className="site-title__highlight">Sales</span>
        </h1>
      </Link>
      <Nav />
    </header>
  </div>
)

export default Header
