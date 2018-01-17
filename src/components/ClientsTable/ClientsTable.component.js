import React from 'react'
import ClickableRow from '../ClickableRow'
import LinkButton from '../LinkButton'
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
    <ClickableRow
      key={isSelected}
      isClickable={!isSelected}
      to={`/clients/${id}`}
      className={isSelected ? 'selected' : ''}
    >
      <td>
        <LinkButton
          to={`/clients/${id}`}
          text="Select"
          options={{ disabled: isSelected }}
          buttonClassName="select-client-btn"
        />
      </td>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{company}</td>
      <td>{telephone}</td>
      <td>{country}</td>
    </ClickableRow>
  )
}

export default ClientsTable
