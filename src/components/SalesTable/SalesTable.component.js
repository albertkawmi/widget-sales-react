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
        {sales.map(sale => <SalesRow
          key={sale.id}
          {...sale}
        />)}
      </tbody>
    </table>
    : <Spinner />
)

const SalesRow = ({
  id,
  clientId,
  productName,
  size,
  price
}) => (
  <tr>
    <td>{id}</td>
    <td>{clientId}</td>
    <td>{productName}</td>
    <td>{size}</td>
    <td>£{price}</td>
  </tr>
)

export default SalesTable
