import React from 'react'
import Store from '../../components/Store'

// This component hits an endpoint that always returns 500
// in order to demonstrate basic error handling

export class Fault extends React.Component {
  componentWillMount() {
    this.context.fetchFault()
  }
  render() {
    const { error } = this.context
    return (
      <div>
        <h2>A Faulty Page</h2>
        <p>When something goes wrong you'll see an error message.</p>
        {error && <p className="error">{error}</p>}
      </div>
    )
  }
}

Fault.contextTypes = Store.childContextTypes
