import React from 'react'
import Store from '../../components/Store'

// This component hits an endpoint that always returns 500
// in order to demonstrate basic error handling

export default class Fault extends React.Component {
  componentWillMount() {
    this.context.fetchFault()
  }
  render() {
    return (
      <div>
        <h2 className="page-heading">A Faulty Page</h2>
        <p>To demonstrate error handling, this page makes a request to an endpoint that eventually returns a 500 error. Once the response comes back, a red error message will appear above and stay on screen until  it's dismissed.</p>
      </div>
    )
  }
}

Fault.contextTypes = Store.childContextTypes
