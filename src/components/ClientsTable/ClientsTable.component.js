import React from 'react'
import LinkButton from '../LinkButton'
import './ClientsTable.css'

const ClientsTable = ({ clients, selectedId }) => (
  <div className="table-wrap">
    <table className="clients-table" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Company</th>
          <th>Telephone</th>
          <th>Country</th>
          <th>&nbsp;</th>
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
)

// Can't use an arrow function as Enzyme renders it 'Unknown'
export function ClientRow({
  id,
  firstName,
  lastName,
  company,
  telephone,
  country,
  isSelected
}) {
  return (
    <tr className={isSelected ? 'selected' : ''}>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{company}</td>
      <td>{telephone}</td>
      <td>{country}</td>
      <td>
        <LinkButton
          to={`/clients/${id}`}
          text="Select"
          options={{ disabled: isSelected }}
          buttonClassName="select-client-btn"
        />
      </td>
    </tr>
  )
}

export default ClientsTable
