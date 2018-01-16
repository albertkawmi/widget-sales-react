import React from 'react'
import Store from '../../components/Store'
import SalesTable from '../../components/SalesTable'

export default class Sales extends React.Component {
  componentWillMount() {
    const shouldFetch = !this.context.sales.length
    if (shouldFetch) this.context.fetchSales()
  }

  render() {
    return (
      <div>
        <h2 className="page-heading">All Sales</h2>
        <SalesTable sales={this.context.sales} />
      </div>
    )
  }
}

Sales.contextTypes = Store.childContextTypes
