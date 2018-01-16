import React from 'react'
import { Link } from 'react-router-dom'
import './LinkButton.css'

const LinkButton = ({
  to,
  text = '',
  linkClassName = '',
  buttonClassName = '',
  options = {}
}) => (
  <Link className={linkClassName} to={to}>
    <button className={buttonClassName} disabled={options.disabled}>
      {text}
    </button>
  </Link>
)

export default LinkButton
