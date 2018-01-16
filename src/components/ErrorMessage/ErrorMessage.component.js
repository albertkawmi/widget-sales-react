import React from 'react'
import Store from '../Store'
import './ErrorMessage.css'

export default class ErrorMessage extends React.Component {
  render() {
    const { error, dismissError } = this.context
    if (!error) return null

    return (
      <div className="error">
        <h4 className="error__heading">Sorry, this page always errors out!</h4>
        <span className="error__text">&nbsp;({error})</span>
        <div className="error__dismiss" onClick={dismissError}>
          <span role="img" aria-label="Dismiss Error">✖</span>
        </div>
      </div>
    )
  }
}

ErrorMessage.contextTypes = Store.childContextTypes
