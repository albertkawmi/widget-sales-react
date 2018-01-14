import React from 'react'
import Store from '../Store'

export default class ErrorMessage extends React.Component {
  render() {
    const { error, dismissError } = this.context
    if (!error) return null

    return (
      <div className="error">
        <div className="error__text">{error}</div>
        <div className="error__dismiss" onClick={dismissError}>
          <span role="img" aria-label="Dismiss Error">✖</span>
        </div>
      </div>
    )
  }
}

ErrorMessage.contextTypes = Store.childContextTypes
