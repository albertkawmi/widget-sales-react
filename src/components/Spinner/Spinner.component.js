import React from 'react'
import logo from '../../images/spinner.png'
import './Spinner.css'

const Spinner = () => (
  <div className="spinner-outer">
    <img className="spinner" src={logo} alt="Loading..."/>
    <a className="spinner-link" href="/why-so-slow">Why is this taking so long?</a>
  </div>
)

export default Spinner
