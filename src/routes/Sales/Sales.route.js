import React from 'react'
import Store from '../../components/Store'
import SalesTable from '../../components/SalesTable'

export class Sales extends React.Component {
  componentWillMount() {

  }
  render() {
    return (
      <div>
        <h2>All Sales</h2>
        <SalesTable sales={this.context.sales} />
      </div>
    )
  }
}

Sales.contextTypes = Store.childContextTypes
