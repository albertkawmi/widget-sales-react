import React from 'react'
import { Redirect } from 'react-router-dom'
import './ClickableRow.css'

// TODO remove the need for this component

// This is supposedly the way to do onClick redirects in React Router 4
// but it creates unneeded complexity. I'd prefer to change the design
// so that a simple <Link> component can be used. SO thread for ref:
// https://stackoverflow.com/questions/29244731/react-router-how-to-manually-invoke-link

class ClickableRow extends React.Component {
  state = { redirect: false }

  render() {
    const {
      to,
      className,
      isClickable,
      ...otherProps
    } = this.props

    if (this.state.redirect) return <Redirect to={this.props.to} />

    return (
      <tr
        className={`clickable-row--${isClickable} ${className}`}
        onClick={() => this.setState({ redirect: isClickable })}
        {...otherProps}
      >
        {this.props.children}
      </tr>
    )
  }
}

export default ClickableRow
