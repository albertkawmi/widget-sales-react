import React from 'react'
import Spinner from '../Spinner'

const SalesTable = ({ sales = [] }) => (
  sales.length ?
    <table className="sales-table" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Client ID</th>
          <th>Product Name</th>
          <th>Size</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {sales.map(sale => (
          <tr key={sale.id}>
            <td>{sale.id}</td>
            <td>{sale.clientId}</td>
            <td>{sale.productName}</td>
            <td>{sale.size}</td>
            <td>£{sale.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    : <Spinner />
)

export default SalesTable
