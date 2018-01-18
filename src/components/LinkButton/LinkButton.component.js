import React from 'react'
import PropTypes from 'prop-types'
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

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  linkClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  options: PropTypes.object
}

LinkButton.defaultProps = {
  text: '',
  linkClassName: '',
  buttonClassName: '',
  options: {
    disabled: false
  }
}

export default LinkButton
