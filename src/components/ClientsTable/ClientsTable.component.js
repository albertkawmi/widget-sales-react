import React from 'react'
import ClientRow from './ClientRow.component'
import Spinner from '../Spinner'
import './ClientsTable.css'

const ClientsTable = ({ clients = [], selectedId }) => (
  clients.length ?
    <div className="table-wrap">
      <table className="clients-table" cellSpacing="0">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Telephone</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => <ClientRow
            key={client.id}
            isSelected={selectedId === client.id}
            {...client}
          />)}
        </tbody>
      </table>
    </div>
    : <Spinner />
)

export default ClientsTable
